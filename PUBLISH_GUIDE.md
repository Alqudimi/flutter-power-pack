# Publishing Guide

This guide explains how to validate, package, and distribute Flutter Power Pack `1.0.0` through GitHub Releases and local VSIX installation. Publication to the Visual Studio Marketplace and Open VSX is intentionally disabled for this project and is not part of the release workflow.

## Distribution policy

The canonical distribution channels for this repository are the public GitHub repository, GitHub Releases, and the locally installable `.vsix` archive. The pack references extensions that are discoverable through the public Visual Studio Marketplace, but this project does not publish its own pack listing there. Open VSX is also not used as a publication channel.

The project does not collect telemetry, process user content, or store credentials. Never commit publisher tokens, personal access tokens, private keys, or generated credentials.

## Prerequisites

Use Node.js 20 or a later LTS release, Git, and a VS Code installation. The packaging command downloads the pinned `@vscode/vsce` CLI through `npx`; no global package installation is required for the documented local path.

## Validate and package locally

Run these commands from the repository root:

```bash
npm ci --ignore-scripts --no-audit --no-fund
npm run validate:manifest
npm run package:vsix -- --out flutter-power-pack-1.0.0.vsix
unzip -t flutter-power-pack-1.0.0.vsix
```

The manifest validator confirms required metadata, semantic versioning, unique pack IDs, and the availability of all 46 referenced extension IDs in the public Marketplace gallery. This Marketplace query is a dependency-availability check, not a publication operation.

Inspect the generated archive. It should contain the manifest, README, license, changelog, publication guide, design decisions, validation report, security and support policies, wiki pages, and icon while excluding `.git`, `.github`, `.vscode`, `src`, `scripts`, `node_modules`, and generated VSIX files.

## Local installation

Install a locally packaged build with:

```bash
code --install-extension flutter-power-pack-1.0.0.vsix --force
```

Alternatively, open the Extensions view, choose **Install from VSIX...**, and select the archive.

## GitHub Releases

The workflow validates and packages every push and creates a GitHub Release with the VSIX for a `vX.Y.Z` tag. It requires only the repository's built-in GitHub Actions token and does not use Marketplace or Open VSX credentials.

```bash
git checkout main
git pull --ff-only origin main
git tag v1.0.0
git push origin main --tags
```

Before creating a tag, update `package.json`, `package-lock.json`, `CHANGELOG.md`, and `VALIDATION_REPORT.md` together. The tag must match the manifest version without the leading `v`.

## Release checklist

| Area | Required confirmation |
|---|---|
| Identity | Repository owner, publisher metadata, author information, and public support URLs are correct. |
| Package | `npm run validate:manifest` and `npm run package:vsix` succeed. |
| Archive | The VSIX contains no secrets or private development files. |
| Documentation | README, changelog, license, support, security, contribution, and Wiki documents are current and in English. |
| GitHub | The tag is pushed from `main`; CI creates an artifact and GitHub Release. |
| Verification | The public release asset downloads successfully and its SHA-256 checksum is recorded. |

## Disabled publication targets

The Visual Studio Marketplace and Open VSX are intentionally excluded from CI and are not official publication targets for this project. No credentials are required for them, no secrets should be created for them, and no public listing should be represented as an official release. Third-party download mirrors are likewise not treated as author-controlled publication channels.

## References

[1]: https://code.visualstudio.com/api/working-with-extensions/publishing-extension "Visual Studio Code: Publishing Extensions"
[2]: https://code.visualstudio.com/docs/configure/extensions/extension-marketplace "Visual Studio Code Extension Marketplace"
