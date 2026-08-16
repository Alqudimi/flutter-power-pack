# Architecture

## Project type

Flutter Power Pack is a **manifest-only VS Code extension pack**. It has no TypeScript or JavaScript runtime, no activation function, no commands, no settings contributions, no webviews, and no network client. The manifest delegates all feature behavior to the independent extensions listed in `extensionPack`.

## Repository map

| Path | Purpose |
|---|---|
| `package.json` | Extension identity, compatibility, metadata, and 46 pack IDs. |
| `README.md` | Marketplace-facing overview, installation instructions, catalog, and support information. |
| `CHANGELOG.md` | Versioned release notes. |
| `PUBLISH_GUIDE.md` | Packaging and publication procedure. |
| `VALIDATION_REPORT.md` | Evidence and limitations for the validated release. |
| `.github/workflows/publish.yml` | Validation, VSIX packaging, GitHub Release creation, and optional registry publication. |
| `icon.png` | Marketplace-compatible package icon. |
| `icon.svg` | Editable source artwork; the PNG remains the manifest icon. |
| `wiki/` | GitHub wiki-ready explanatory pages. |

## Installation flow

```mermaid
flowchart LR
    A[User installs Flutter Power Pack] --> B[VS Code reads package.json]
    B --> C[VS Code resolves extensionPack IDs]
    C --> D[Marketplace or local VSIX source]
    D --> E[VS Code installs pack members]
    E --> F[Independent upstream extensions provide features]
```

## Release flow

```mermaid
flowchart LR
    A[Version and changelog updated] --> B[Push main and vX.Y.Z tag]
    B --> C[GitHub Actions validates manifest]
    C --> D[vsce packages VSIX]
    D --> E[Artifact and GitHub Release]
    E --> F[Users download VSIX or install locally]
```

## Failure boundaries

A missing upstream extension, an upstream crash, a Flutter SDK problem, a VS Code defect, or an account/subscription requirement belongs to the relevant upstream provider. A malformed manifest, broken package archive, incorrect pack ID, unsafe workflow, or incorrect project documentation belongs to this repository.
