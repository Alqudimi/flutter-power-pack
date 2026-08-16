# Publishing Guide

This guide explains how to validate, package, release, and publish Flutter Power Pack `1.0.0` as publisher `alqudimi`. The project is a manifest-only VS Code extension pack: it contributes no executable extension code and does not collect telemetry.

## Publication model

The repository can distribute a signed-by-the-registry or locally packaged `.vsix` through GitHub Releases, the Visual Studio Marketplace, and Open VSX. GitHub Releases and local VSIX packaging do not require marketplace credentials. Marketplace and Open VSX publication are separate authenticated operations and are intentionally skipped by CI when their corresponding secrets are not configured.

> Never commit publisher tokens, personal access tokens, private keys, or generated credentials. Use short-lived or least-privilege credentials and rotate them after suspected exposure.

## Prerequisites

Use Node.js 20 or a later LTS release, Git, and a VS Code installation. Install the packaging CLI only when needed:

```bash
npm install --global @vscode/vsce
```

The repository contains a lockfile for reproducible project metadata, but the extension itself has no runtime npm dependencies. The package command uses `--no-dependencies` because all extension-pack entries are resolved by VS Code at installation time.

## Validate before release

Run these commands from the repository root:

```bash
npm ci --ignore-scripts --no-audit --no-fund
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8')); console.log('package.json is valid JSON')"
vsce ls
vsce package --no-dependencies --out flutter-power-pack-1.0.0.vsix
```

Inspect the generated archive. It should contain the manifest, README, license, changelog, publication guide, design decisions, validation report, and PNG icon while excluding `.git`, `.github`, `.vscode`, `src`, `node_modules`, and generated VSIX files.

For the release validation performed for this version, install the VSIX into an isolated VS Code profile and confirm that `alqudimi.flutter-power-pack-1.0.0` appears in the installed extension list. Because this pack has no activation code, installation and dependency resolution are the relevant runtime checks.

## Local installation

Install a locally packaged build with:

```bash
code --install-extension flutter-power-pack-1.0.0.vsix --force
```

Alternatively, open the Extensions view, choose **Install from VSIX...**, and select the archive.

## Visual Studio Marketplace

The publisher identifier in `package.json` must belong to the Visual Studio Marketplace account that performs the publication. The Marketplace documentation currently recommends Microsoft Entra ID-based automation and notes that global Azure DevOps PATs are scheduled for retirement on December 1, 2026. Use that identity-based approach for long-lived production automation when your organization supports it. A temporary `VSCE_PAT` secret remains supported by the included workflow for accounts that have not migrated yet.

For a one-time local publication with an authorized token, keep the token out of shell history where possible:

```bash
export VSCE_PAT='replace-with-a-short-lived-token'
vsce publish --packagePath flutter-power-pack-1.0.0.vsix --pat "$VSCE_PAT"
unset VSCE_PAT
```

After publication, verify the Marketplace page for the display name, publisher, icon, README rendering, extension-pack entries, compatibility range, license, and links. The workflow publishes to the Marketplace only when the `VSCE_PAT` repository secret exists and the pushed reference is a version tag.

## Open VSX

Open VSX requires an Eclipse account, an accepted publisher agreement, an access token, and a namespace matching the `publisher` field. Create or claim the namespace before publishing. The namespace should be `alqudimi` for this project.

Publish an existing VSIX locally as follows:

```bash
npm install --global ovsx
export OVSX_TOKEN='replace-with-an-open-vsx-token'
ovsx publish flutter-power-pack-1.0.0.vsix --pat "$OVSX_TOKEN"
unset OVSX_TOKEN
```

The GitHub Actions workflow publishes to Open VSX only when the `OVSX_TOKEN` repository secret exists and the pushed reference is a version tag. Confirm the resulting listing and metadata on Open VSX after the command succeeds.

## GitHub Releases

The workflow creates a GitHub Release and attaches the VSIX automatically for a `vX.Y.Z` tag. The release job uses the repository-provided GitHub token and does not require a third-party publishing credential.

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
| Identity | The repository owner, `publisher`, author information, and public support URLs are correct. |
| Package | `vsce package --no-dependencies` succeeds and the archive contains no secrets or private data. |
| Manifest | The version, engine range, category, icon, and all 46 unique extension IDs are valid. |
| Documentation | README, changelog, license, support, security, contribution, and conduct documents are current and in English. |
| GitHub | The tag is pushed from `main`; CI creates an artifact and GitHub Release. |
| Marketplace | Publication is performed only with an authorized publisher credential, then the listing is checked manually. |
| Open VSX | The namespace and publisher agreement are complete before an access token is used. |
| Other stores | A store is used only when it provides an official author upload process; a third-party download mirror is not treated as a publisher channel. |

## References

[1]: https://code.visualstudio.com/api/working-with-extensions/publishing-extension "Visual Studio Code: Publishing Extensions"
[2]: https://github.com/eclipse-openvsx/openvsx/wiki/Publishing-Extensions "Open VSX: Publishing Extensions"
[3]: https://open-vsx.org/about "Open VSX: About This Service"
