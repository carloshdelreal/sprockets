
# Sprockets

This is the result of the homelab for applying to the position of senior software engineer for Powerflex

## Quickstart guide

To get started with this project it is assumed that you have installed [docker](https://www.docker.com/) and [Node.js](https://nodejs.org/) which has been tested to work from version 16 but the recomended version is set in the `.nvmrc` file.

The package manager recommended for this project is `yarn`

1. Copy the `.env.example` into `.env` by running: `cp .env.example .env`
2. Check you have installed docker by `docker -v`
4. Check you are using a proper node version by `node -v`, should be v16 or later, if you are using nvm you can just `nvm use`
5. Install the dependencies by running in the console `yarn install`
6. Run the full starting command by `yarn dev:long`
     - this command it is going to start docker from the `docker-compose.yml` that is the the root folder, will create a new database, run the database migrations, seed the database with the test data, and finally will run the server.
7. Go to [http://localhost:3000/documentation](http://localhost:3000/documentation)
8. You will see the required routes and swagger documentation about how to use them.




