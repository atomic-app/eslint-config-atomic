# eslint-config-atomic

[![NPM](https://img.shields.io/npm/v/@atomic-tools/eslint-config-atomic.svg)](https://www.npmjs.com/package/@atomic-tools/eslint-config-atomic)

Shared linting and prettier config for atomic packages

### Installation

```
yarn add -ED @atomic-tools/eslint-config-atomic
```

in your `.eslintrc` file:

```
{
  "extends": ["@atomic-tools/atomic"]
}
```

### To update this config

1. Install dependencies and update the shared config as needed
2. Update the version appropriately in package.json
3. Commit and push changes

Whenever the version in package.json is bumped, a new version is published automatically to [npm](https://www.npmjs.com/package/@atomic-tools/eslint-config-atomic). See [.github/workflows/main.yml](.github/workflows/main.yml)
