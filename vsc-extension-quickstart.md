# Development Quick Start

Flutter Power Pack is a manifest-only VS Code extension pack. There is no runtime source to compile.

## Requirements

Use Node.js 20 or later, npm, Git, and the VS Code Extension CLI.

```bash
npm install --global @vscode/vsce@3
```

## Inspect and validate

From the repository root:

```bash
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8')); console.log('valid JSON')"
vsce ls
vsce package --no-dependencies
```

The first command validates the manifest. `vsce ls` previews the files included in the package. `vsce package --no-dependencies` creates a local VSIX without trying to resolve runtime dependencies.

## Cross-reference check

The source validation report is maintained outside the distributable project during development. Before a release, verify that every ID in `package.json` has a corresponding catalog row in `README.md`, that no ID is duplicated, that `icon.png` is at least 128 by 128 pixels, and that the GitHub workflow is valid YAML.

## Local installation

Install the generated package with:

```bash
code --install-extension flutter-power-pack-1.0.0.vsix
```

## Release

Update `package.json` and `CHANGELOG.md`, commit the change, create a `vX.Y.Z` tag, and push the tag. The GitHub Actions workflow publishes tagged releases when `VSCE_PAT` is configured.
