# Extension Catalog

The authoritative machine-readable catalog is the `extensionPack` array in `package.json`. The root `README.md` provides the full human-readable catalog and explains the curation rationale for every entry.

## Categories

| Category | Coverage |
|---|---|
| Flutter and Dart foundation | Official Flutter and Dart language tooling. |
| Diagnostics and code quality | Error Lens, spelling, whitespace, Markdown linting, comments, and TODO navigation. |
| Modeling and generation | Dart data classes, JSON-to-Dart, barrel files, build runner helpers, and snippets. |
| State management and architecture | BLoC, Riverpod snippets, and Clean Architecture / DDD support. |
| UI and assets | Widget snippets, Flutter tree utilities, colors, SVG, previews, themes, and icons. |
| Dependencies and versions | Pubspec assistance, dependency search, and Version Lens. |
| Testing and coverage | Coverage gutters, Flutter coverage, and Flutter styling. |
| Git and collaboration | GitLens, Git Graph, GitHub Pull Requests, Peacock, and change-case tools. |
| APIs and localization | Thunder Client, REST Client, Flutter i18n tools, and JSON translation helpers. |
| Optional productivity and AI | Copilot Chat, Roo Code, new-file helpers, and accessibility checking. |

## Curation policy

An extension is included when it provides practical value to Flutter or Dart development, is discoverable through the public Marketplace, and can be represented safely in a one-step pack. Availability can change over time. Before a release, the maintainers re-query the public Marketplace and remove or replace entries that cannot be resolved reliably.

## Upstream responsibility

The pack does not copy, modify, or redistribute the implementation of its members. Licensing, privacy, account requirements, telemetry, support, and compatibility are controlled by each upstream publisher. Review the upstream listing before enabling an extension in a production workspace.
