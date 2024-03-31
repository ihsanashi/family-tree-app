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

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
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
