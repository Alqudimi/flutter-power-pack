# Development Quick Start

Flutter Power Pack is a manifest-only VS Code extension pack. There is no runtime source to compile.

## Requirements

Use Node.js 20 or later, npm, Git, and VS Code. The repository pins the packaging CLI through the `package:vsix` npm script, so a global `vsce` installation is optional.

## Inspect and validate

From the repository root:

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run validate:manifest
npm run package:vsix -- --out flutter-power-pack-1.0.0.vsix
```

The validator checks required metadata, duplicate IDs, semantic versioning, and the availability of all pack IDs in the public Marketplace gallery. This is an upstream dependency check, not a publication step. The package command creates a local VSIX without runtime dependencies.

## Package inspection

Preview the files included in the package with:

```bash
npx --yes @vscode/vsce@3.9.2 ls
unzip -t flutter-power-pack-1.0.0.vsix
```

Confirm that secrets, `.git`, `.github`, `.vscode`, `src`, `scripts`, `node_modules`, and generated archives are not included.

## Local installation

Install the generated package with:

```bash
code --install-extension flutter-power-pack-1.0.0.vsix --force
```

## Release

Update `package.json`, `package-lock.json`, `CHANGELOG.md`, and `VALIDATION_REPORT.md`; commit the change; create a matching `vX.Y.Z` tag; and push the tag. GitHub Actions creates a GitHub Release with the VSIX asset. Visual Studio Marketplace and Open VSX publication are intentionally disabled for this project.
