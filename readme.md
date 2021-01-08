## Where To Work

A responsive web application that provides real-time data for Cities around the world to help users decide where to move to.

## Motivation

## Project Status

Project is currently in development. Visit [wheretowork](https://wheretowork.com "Google's Homepage")
to see currently progress.

## Features

- Stack: React, Node.js, Express, Postgres
- Impliments JSON Web Tokens for user authentication/authorization
- Bar graph - depicting quality of life ratings for specified city
- Table - provides the 25th, 50th, and 75th percentiles of salaries for tech related jobs.
- Uses Redux and Context API

## Screenshots

## Reflection

## Installation

Clone down this repository. You will need node and npm on your machine.

### Install

`cd client && npm install`
`cd server && npm install`

### Run

`cd client && npm run start`
`cd server && npm run dev`

## Installation with docker

Clone down this repository. You will need node, npm, and docker on your machine.

- create `/config/.env.dev` in your root directory
- add and replace `example` with valid credientials

```
PG_USER=example
PG_PASS=example
PG_HOST=example
PG_DB=example
PG_PORT=example
```

`cd` into the same directory as the docker-compose.yml file and type \
`docker-compose --env-file ./config/.env.dev up --build`

### Visit

visit `localhost:3000`
