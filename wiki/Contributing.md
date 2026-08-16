# Contributing

## Before you start

Read `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md`. Confirm that a proposed change belongs to this repository rather than to an upstream bundled extension. Do not include credentials, private code, generated VSIX files, or unrelated formatting changes.

## Changes to the catalog

Explain why the extension benefits Flutter or Dart developers, confirm its public Marketplace identifier, review its license and publisher information, and update the manifest, README catalog, changelog, and validation evidence together. Avoid adding duplicate or obsolete entries.

## Validation

At minimum, parse `package.json`, run `vsce ls`, package with `vsce package --no-dependencies`, inspect the archive, and install it into an isolated VS Code profile. If a change affects the workflow, review the permissions, secret conditions, action versions, and release behavior carefully.

## Pull requests

Use a focused branch and a descriptive commit or pull-request title. Explain the user-visible effect, evidence from local validation, publication implications, and any known limitation. A reviewer should be able to reproduce the result from the commands in `PUBLISH_GUIDE.md`.

## Documentation

Public documentation is written in English and should remain accurate for both the Marketplace listing and GitHub. Prefer complete explanations, tables, and links to authoritative upstream documentation over unsupported claims.
