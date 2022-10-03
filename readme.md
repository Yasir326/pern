# Decibel Studios Repo

## About
This is a web app made for `Decibel Studios` in order for customers to book sessions and sessions for admins to be able to log in and modify settings and booking.

## Stack
This Web app is built using [Typescript](https://www.typescriptlang.org/) and the `PERN` stack which consists of [PostgresSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/) and [Node](https://nodejs.org/en/)

## Getting Started 🏁

### Prerequisites

1. [Node](https://nodejs.org/en/). We recommend using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to make it easier to use the correct Node version.
2. [NPM](https://www.npmjs.com/package/npm)
3. [PostgresSQL](https://www.postgresql.org/download)
4. [PGAdmin](https://www.pgadmin.org/)

### Running Locally 🏃🏽‍♂️

**Backend**

1. `cd server`
2. `npm i`
3. `npm start:dev`

`API` will be available on `localhost:3000` 🚀
#### Endpoints

| Method | Endpoint                                              |
| ------ | ----------------------------------------------------- |
| GET    | <http://localhost:3000/users>                         |
| GET    | <http://localhost:3000/users/:id>                     |
| POST   | <http://localhost:3000/users>                         |
| DELETE | <http://localhost:3000/users/:id>                     |

The request body in order to create or update the user needs to be in the following format:

```
curl --location --request POST 'localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Colonel",
    "lastName": "Sanders",
    "email": "c.sanders@gmail.com"
}'
```