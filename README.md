# TypeScript greeter

A tiny TypeScript project with Vitest tests.

## CI workflow

The workflow lives at [`.github/workflows/ci.yml`](.github/workflows/ci.yml) and declares `runs-on: ubuntu-latest`. Both are GitHub defaults, unchanged. Nothing in this repository was renamed or rewritten to run here:

- `.github/workflows/` is read directly. There is no `.forgejo/` directory.
- `ubuntu-latest` routes to a Codebahn runner in Paris.
- `actions/checkout` and `actions/setup-node` resolve from GitHub automatically, including the `cache: npm` dependency cache.

On every push and pull request:

1. Installs dependencies with `npm ci` against the committed lockfile
2. Type-checks with `tsc --noEmit`
3. Runs tests with Vitest

Need more than the 3 GB default? Set `runs-on: codebahn-medium` for 7 GB. See [CI runners](https://codebahn.net/docs/features/ci-runners/).

## Run locally

```
npm ci
npm test
npx tsc --noEmit
```
