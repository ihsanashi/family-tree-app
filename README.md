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
