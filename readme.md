## Where To Work

My project, [where-to-work](https://where-to-work.com "where-to-work homepage"), is responsive web application providing real-time data with respect to cities around the world. With this data, users are able to make educated decisions when deciding where to move for work.

## Features

- Impliments JSON Web Tokens for user authentication/authorization
- Bar graph - depicting quality of life ratings for specified city
- Table - provides the 25th, 50th, and 75th percentiles of salaries for tech related jobs.
- Search bar that lazy loads the cities this website covers.
- Uses Amazon Route 53 to route trafic to Elastic Beanstalk Environment
- website supports HTTPS and AWS Certificate Manager was used to deploy SSL ceriticate
- Languages: Javascript, Node.js, SQL (check if node js is a language).
- Technologies: Docker, Nginx, Express.js, SCSS, Postgres, React-Bootstrap
- Uses Redux and Context API

## Installation

Clone down this repository. You will need node, npm, and postgres on your machine.

### Install

From project root directory: `cd client && npm install` \
From project root directory: `cd server && npm install`

### Postgres

In the `/server` folder, you will need to create a `.env` file with valid postgres credientials.

### Run

From project root directory: `cd client && npm run start` \
From project root directory: `cd server && npm run dev`

## Installation with docker for development

Clone down this repository. You will need node, npm, and docker on your machine.

- create `.env.dev` file in config folder in your project root directory
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

Visit website at `localhost:3000`

## Project Status

Project is currently in development.\
Visit [where-to-work](https://where-to-work.com "Where To Work") to see currently progress.

