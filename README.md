# Introduction

Backend repository for a Family Tree application, scaffolded using NestJS CLI.

## Technologies

- NestJS
- PostgreSQL
- Prisma

## Installation

```bash
$ pnpm install
```

## Running the app locally

```bash
# docker compose
docker-compose up

# prepare environment variables
1. copy over *.env.local* file into an *.env* file
2. specify values where required

# seed data
pnpm dlx prisma db seed
or
npx prisma db seed

# development
$ pnpm run start:dev
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

### Notes:

- `pnpm dlx` seems to be clunky with `prisma`, so use `npx` when it fails.
