# 4IT580: Backend

## Requirements

- Node.js v14 (or later)
- Yarn (`npm install --global yarn`)

## Setup ENV Variables

```
cp ./.env ./.env.local
```

Edit `.env.local` file (DB user, password, ...)

## Install Dependencies

```bash
yarn install
```

## `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## Seed Database

Using phpMyAdmin or MySQL Workbench run following SQL: [`./db/seed.sql`](./db/seed.sql)

## Run Production

```bash
yarn start
```

## Build Production

```bash
yarn build
```

### Build Production and Watch for Changes

```bash
yarn build:watch
```
