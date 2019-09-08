FROM node:12.10.0-alpine

RUN mkdir /usr/src/coasterapp
WORKDIR /usr/src/coasterapp

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . ./
