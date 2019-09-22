FROM node:12.10.0-alpine
EXPOSE 5000

RUN mkdir /usr/src/coasterapp/backend
WORKDIR /usr/src/coasterapp/backend

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

CMD ../scripts/start.sh
