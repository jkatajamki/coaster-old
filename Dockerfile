FROM node:12.10.0-alpine
EXPOSE 5000

RUN mkdir -p /usr/src/coasterapp
WORKDIR /usr/src/coasterapp

# Install python to build native dependencies
# alpine-sdk (containing make, gcc, g++) and python are needed by node-gyp
RUN apk add --no-cache --virtual .build-deps alpine-sdk python

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci --production --silent --no-optional

# Delete build deps to keep image size down
RUN apk del .build-deps

COPY . ./

RUN npm run build

CMD ../scripts/start-server.sh
