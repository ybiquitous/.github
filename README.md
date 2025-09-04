# .github

Common GitHub stuffs in [github.com/ybiquitous](https://github.com/ybiquitous).

## Reusable workflows

### Ruby

- [Test](.github/workflows/ruby-test-reusable.yml)
- [Release](.github/workflows/ruby-release-reusable.yml)

See the [example](.github/workflows/ruby-ci.yml).

### Node.js

- [Test](.github/workflows/nodejs-test-reusable.yml)
- [Lint](.github/workflows/nodejs-lint-reusable.yml)
- [Release](.github/workflows/nodejs-release-reusable.yml)

See the [example](.github/workflows/nodejs-ci.yml).

### Dependabot

- [Auto-merge](.github/workflows/dependabot-auto-merge-reusable.yml)

See the [example](.github/workflows/dependabot-auto-merge.yml).

### GitHub Actions

- [Release](.github/workflows/action-release-reusable.yml)

Example:

```yaml
name: Release

on:
  workflow_dispatch:

jobs:
  release:
    uses: ybiquitous/.github/.github/workflows/action-release-reusable.yml@main
    permissions:
      contents: write
```
