#!/bin/sh

if [ "$NODE_ENV" == "development" ] ; then
  npm run dev:server
else
  npm run start:server
fi
