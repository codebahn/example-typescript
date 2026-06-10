# TypeScript greeter

A tiny TypeScript project with Vitest tests. Demonstrates type checking and testing on [Forgejo Actions](https://forgejo.org/docs/latest/user/actions/).

## CI workflow

Runs on every push ([`.forgejo/workflows/ci.yml`](.forgejo/workflows/ci.yml)):

1. Installs dependencies
2. Type-checks with `tsc --noEmit`
3. Runs tests with Vitest

## Run locally

```
npm install
npm test
npx tsc --noEmit
```
