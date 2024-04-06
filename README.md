_Table of Contents_

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the app locally](#running-the-app-locally)
  - [Prepare environment variables](#prepare-environment-variables)
  - [Seed data](#seed-data)
  - [Development](#development)
  - [Test](#test)

# Introduction

Backend repository for a Family Tree application, scaffolded using NestJS CLI.

# Technologies

- NestJS with TypeScript
- PostgreSQL
- Prisma
- Docker
- Bcrypt, JWT and Passport for authentication
- Swagger for API documentation

# Installation

```bash
$ pnpm install
```

# Running the app locally

```bash
# docker compose
docker-compose up
```

## Prepare environment variables

1. copy over `.env.local` file into an `.env` file
2. specify values where required
3. for `MY_USER_PASSWORD`, please follow the rules specified in the [password criteria file](./src/auth/password-criteria.ts)

## Seed data

```bash
pnpm dlx prisma db seed
or
npx prisma db seed

# `pnpm dlx` seems to be clunky with `prisma`, so use `npx` when it fails.
```

## Development

```bash
pnpm run start:dev
```

## Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```
