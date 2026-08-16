# Contributing to Flutter Power Pack

Thank you for considering a contribution. This repository is intentionally focused: it is a curated VS Code extension pack for Flutter and Dart developers, not a general-purpose extension directory.

## Before opening an issue

Search existing issues and discussions first. For a missing or outdated Marketplace entry, include the exact `publisher.name` ID, the direct Marketplace URL, the reason it belongs in the relevant tier, and evidence that it is actively maintained or useful to Flutter teams.

## Pull requests

Keep pull requests focused and update all affected documentation. Changes to the extension list must update `package.json`, the catalog in `README.md`, `CHANGELOG.md`, and `DESIGN_DECISIONS.md` when the decision affects pack scope. Run the JSON, link, image, and cross-reference checks before requesting review.

Do not commit credentials, PATs, personal tokens, generated VSIX files, or private project data. Use clear commit messages and explain any trade-offs in the pull request body.

## Quality bar

A proposed extension should have a clear Flutter or Dart development benefit, a valid Marketplace ID, an appropriate license and publisher page, and limited overlap with an existing entry. Availability and status should be rechecked before release.
