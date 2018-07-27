# Coaster.
Keep track of your collection

## Requirements
* PostgreSQL (tested with PostgreSQL 9.4.14)
* Node.js (tested with node v9.5.0 and npm 5.6.0)

## Installation
* Clone the repository from GitHub
* Run `npm install`
* In `coaster/common/constants` directory, create a copy of `app-config.example.js` and name it `app-config.js`. You can edit its contents according to your needs.
* In `coaster/server/config`, create copies of `data-source.config.example.json` and `jwt.config.example.json`, and name them `data-source.config.json` and `jwt.config.json` respectively. Edit the data source config according to your local PostgreSQL settings. Edit the jwt config with an appropriate secret key.
* This project uses Sequelize for database migrations. To run migrations, run the command `node_modules/.bin/sequelize db:migrate`
* Run `npm start` for development.
