#
# Build stage
#
FROM node:12.10.0-alpine AS buildstage
WORKDIR /usr/src/coasterapp

# Install python to build native dependencies
# alpine-sdk (containing make, gcc, g++) and python are needed by node-gyp
RUN apk add --no-cache --virtual .build-deps alpine-sdk python
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --silent --no-optional
COPY . ./
RUN npm run lint
RUN npm run build
RUN npm run test

# Delete build deps
RUN apk del .build-deps

#
# Production live stage
#
FROM node:12.10.0-alpine AS livestage
EXPOSE 5000
WORKDIR /usr/src/coasterapp

RUN apk add --no-cache --virtual .build-deps alpine-sdk python
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --production --silent --no-optional
COPY . ./

# Delete build deps to keep image size down
RUN apk del .build-deps

CMD ./start-server.sh
