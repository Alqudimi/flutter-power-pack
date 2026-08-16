# Flutter Power Pack Wiki

Flutter Power Pack is a manifest-only VS Code extension pack for Flutter and Dart teams. It bundles 46 currently available Marketplace extension IDs covering language services, code generation, state management, UI work, APIs, localization, testing, Git, architecture, accessibility, and productivity.

## Start here

| Goal | Guide |
|---|---|
| Install the pack | [Installation](Installation) |
| Understand what is included | [Extension Catalog](Extension-Catalog) |
| Troubleshoot installation or compatibility | [Troubleshooting](Troubleshooting) |
| Understand the project structure | [Architecture](Architecture) |
| Contribute changes | [Contributing](Contributing) |
| Publish a release | [Release Process](Release-Process) |
| Find common answers | [FAQ](FAQ) |

## Important boundaries

This project is a curated manifest. It does not replace Flutter, Dart, VS Code, or any bundled extension. It does not execute application code, provide paid service access, collect telemetry, or guarantee the behavior of independent upstream extensions.

The canonical project documentation lives in the repository. The root `README.md`, `PUBLISH_GUIDE.md`, `SECURITY.md`, `SUPPORT.md`, and `CONTRIBUTING.md` are the source of truth when a wiki page and a generated marketplace page differ.

## Release status

The current manifest version is `1.0.0`. Before each release, maintainers validate the JSON manifest, query the public Marketplace gallery for all pack IDs, package the VSIX, scan its contents, install it into an isolated VS Code profile, and review the generated documentation and workflow changes.
