# Flutter Power Pack

<p align="center">
  <img src="icon.png" width="128" alt="Flutter Power Pack icon" />
</p>

<h1 align="center">Flutter Power Pack</h1>

<p align="center">A carefully curated VS Code extension pack for productive, maintainable, and professional Flutter and Dart development.</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=alqudimi.flutter-power-pack"><img src="https://img.shields.io/visual-studio-marketplace/v/alqudimi.flutter-power-pack?style=flat&label=Version" alt="Visual Studio Marketplace version" /></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=alqudimi.flutter-power-pack"><img src="https://img.shields.io/visual-studio-marketplace/i/alqudimi.flutter-power-pack?style=flat&label=Installs" alt="Visual Studio Marketplace installs" /></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=alqudimi.flutter-power-pack"><img src="https://img.shields.io/visual-studio-marketplace/r/alqudimi.flutter-power-pack?style=flat&label=Rating" alt="Visual Studio Marketplace rating" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/Alqudimi/flutter-power-pack?style=flat" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/VS%20Code-%5E1.80.0-02569B?style=flat" alt="VS Code version compatibility" />
</p>

Flutter Power Pack bundles the tools that a Flutter developer typically needs across the complete development lifecycle: Dart and Flutter language services, code generation, state management, UI work, dependency maintenance, testing, Git, APIs, localization, architecture, accessibility, and optional AI assistance.

> **Important validation note:** The source specification listed 50 requested Marketplace IDs. The Marketplace API validation performed for this release found 46 available IDs and four unavailable IDs: `gornivv.vscode-flutter-helper`, `LottieFiles.lottiefiles`, `pflannery.vscode-find-unused`, and `jsayol.firebase-explorer`. The installable manifest includes only currently available IDs so installation remains reliable; all 50 requested entries remain documented in the catalog below for traceability. The requested `GitHub.copilot` entry is currently deprecated by its publisher, so the manifest uses the verified successor `GitHub.copilot-chat`.

## Table of Contents

- [Overview](#overview)
- [What is included](#what-is-included)
- [Installation](#installation)
- [Complete extension catalog](#complete-extension-catalog)
- [Feature highlights](#feature-highlights)
- [Recommended settings](#recommended-settings)
- [Recommended keyboard shortcuts](#recommended-keyboard-shortcuts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Release and changelog](#release-and-changelog)
- [Author and support](#author-and-support)
- [References](#references)
- [License](#license)

## Overview

Flutter Power Pack is intended for Flutter developers, Dart developers, mobile teams, and cross-platform product engineers who want a strong starting point for a new VS Code workspace. It is an **extension pack**, not a runtime extension: it contains no application code, does not activate commands, and does not collect telemetry. Its job is to make a consistent set of development tools installable in one step.

The two foundation extensions are the official Flutter and Dart extensions. Flutter's official VS Code documentation explains that the Flutter extension supports compiling, deploying, and debugging Flutter applications, and that installing Flutter also installs Dart.[1] The remaining extensions are organized around common project concerns rather than a single architectural style.

## What is included

The installable manifest contains **46 installable Marketplace extensions**, using `GitHub.copilot-chat` as the current successor to the requested deprecated `GitHub.copilot` entry. Four requested legacy or unavailable IDs are retained in the documentation catalog but intentionally excluded from the manifest; see the validation note above and `DESIGN_DECISIONS.md` for the rationale.

The manifest uses VS Code's official `extensionPack` field. The VS Code extension manifest reference defines this field as an array of extension IDs in `publisher.name` form, and requires a valid `name`, `version`, `publisher`, and `engines` declaration.[2]

## Installation

### From the Marketplace

Open the [Flutter Power Pack Marketplace page](https://marketplace.visualstudio.com/items?itemName=alqudimi.flutter-power-pack) and select **Install**. VS Code will install the pack and its verified entries. If an optional service extension such as GitHub Copilot Chat or Roo Code requires a separate account or subscription, that requirement belongs to the service provider and is not created by this pack.

### From a local VSIX package

Download a release VSIX from the repository's [Releases page](https://github.com/Alqudimi/flutter-power-pack/releases). In VS Code, open the Extensions view, select the three-dot menu, choose **Install from VSIX...**, and select the downloaded file. Alternatively, run `code --install-extension flutter-power-pack-1.0.0.vsix` from a terminal.

### Build from source

Clone the repository, install the VS Code Extension CLI, and package the project:

```bash
git clone https://github.com/Alqudimi/flutter-power-pack.git
cd flutter-power-pack
npm install --global @vscode/vsce
vsce package
```

The resulting `.vsix` file can be installed locally or published by a configured publisher. See `PUBLISH_GUIDE.md` for the complete release procedure.

## Complete extension catalog

The table below documents every ID from the original curation list. The last column links directly to the requested Marketplace item URL; an unavailable item is explicitly marked rather than silently replaced.

| Extension name | Requested ID | Description | Why it is included | Marketplace status |
|---|---|---|---|---|
| Flutter | `Dart-Code.flutter` | Official Flutter tooling for creating, running, debugging, testing, and inspecting Flutter applications in VS Code. | The primary Flutter development experience and the foundation of the pack. | [Available](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter) |
| Dart | `Dart-Code.dart-code` | Rich Dart language support with analysis, refactoring, debugging, navigation, and developer tooling. | Provides the Dart language services that power Flutter code intelligence. | [Available](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) |
| Error Lens | `usernamehw.errorlens` | Displays diagnostics and errors directly in the editor beside the relevant source line. | Makes analyzer feedback visible without switching to the Problems panel. | [Available](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) |
| Code Spell Checker | `streetsidesoftware.code-spell-checker` | Catches spelling mistakes in Dart identifiers, comments, documentation, and configuration files. | Keeps user-facing text, APIs, and documentation professional. | [Available](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) |
| Trailing Spaces | `shardulm94.trailing-spaces` | Highlights and removes accidental trailing whitespace from source files. | Reduces noisy diffs and prevents formatting issues. | [Available](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) |
| markdownlint | `DavidAnson.vscode-markdownlint` | Lints Markdown documentation against practical style and consistency rules. | Keeps project READMEs, architecture notes, and API docs maintainable. | [Available](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) |
| Dart Data Class Generator | `hzgood.dart-data-class-generator` | Generates Dart data classes, constructors, equality, copyWith methods, and serialization helpers. | Accelerates model-heavy Flutter applications and reduces boilerplate. | [Available](https://marketplace.visualstudio.com/items?itemName=hzgood.dart-data-class-generator) |
| Json to Dart Model | `hirantha.json-to-dart` | Converts JSON payloads into Dart model classes for API and persistence layers. | Shortens the path from backend contracts to typed Flutter models. | [Available](https://marketplace.visualstudio.com/items?itemName=hirantha.json-to-dart) |
| Awesome Flutter Snippets | `Nash.awesome-flutter-snippets` | Provides practical Flutter and Dart snippets for common widgets, layouts, and patterns. | Improves typing speed during everyday UI implementation. | [Available](https://marketplace.visualstudio.com/items?itemName=Nash.awesome-flutter-snippets) |
| Flutter Widget Snippets | `alexisvt.flutter-snippets` | Offers additional snippets for composing Flutter widgets and application structures. | Complements the core Flutter snippets with another focused productivity set. | [Available](https://marketplace.visualstudio.com/items?itemName=alexisvt.flutter-snippets) |
| Flutter Tree | `marcelovelasquez.flutter-tree` | Helps visualize and work with Flutter widget tree structures while coding. | Makes deeply nested widget composition easier to understand and refactor. | [Available](https://marketplace.visualstudio.com/items?itemName=marcelovelasquez.flutter-tree) |
| Dart Barrel File Generator | `miquelddg.dart-barrel-file-generator` | Generates Dart barrel files that re-export related libraries from a single entry point. | Supports clean imports and scalable package organization. | [Available](https://marketplace.visualstudio.com/items?itemName=miquelddg.dart-barrel-file-generator) |
| Flutter build_runner Tools | `nivisi.dart-build-runner-tools` | Provides commands and workflow helpers for Dart and Flutter build_runner tasks. | Makes generated-code workflows easier to run and repeat. | [Available](https://marketplace.visualstudio.com/items?itemName=nivisi.dart-build-runner-tools) |
| Dart build_runner | `Kaiqun.build-runner` | Adds convenient editor actions for running and managing build_runner generation. | Gives teams an additional practical interface for code generation. | [Available](https://marketplace.visualstudio.com/items?itemName=Kaiqun.build-runner) |
| bloc | `FelixAngelov.bloc` | Dart and Flutter support for the BLoC state-management ecosystem. | Supports a widely used predictable state-management architecture. | [Available](https://marketplace.visualstudio.com/items?itemName=FelixAngelov.bloc) |
| Flutter Riverpod Snippets | `robert-brunhage.flutter-riverpod-snippets` | Snippets for building Flutter applications with Riverpod providers and patterns. | Speeds up typed, testable Riverpod-based state management. | [Available](https://marketplace.visualstudio.com/items?itemName=robert-brunhage.flutter-riverpod-snippets) |
| Flutter Helper | `gornivv.vscode-flutter-helper` | Requested Flutter helper extension ID; not returned by the Marketplace at validation time. | Preserved in the catalog for traceability, but excluded from installation because the ID is unavailable. | [Unavailable at validation time](https://marketplace.visualstudio.com/items?itemName=gornivv.vscode-flutter-helper) |
| [FF] Flutter Files | `gornivv.vscode-flutter-files` | Provides file-oriented helpers for common Flutter project structures and workflows. | Reduces friction when navigating and creating Flutter files. | [Available](https://marketplace.visualstudio.com/items?itemName=gornivv.vscode-flutter-files) |
| Color Highlight | `naumovs.color-highlight` | Renders color values directly in the editor so design tokens are visible while coding. | Improves feedback when implementing Flutter themes and color systems. | [Available](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) |
| Flutter Color | `circlecodesolution.ccs-flutter-color` | Adds Flutter-focused color authoring and visualization support. | Makes Color and theme work more discoverable for Flutter developers. | [Available](https://marketplace.visualstudio.com/items?itemName=circlecodesolution.ccs-flutter-color) |
| Image preview | `kisstkondoros.vscode-gutter-preview` | Shows image previews near image references in the editor gutter. | Helps validate Flutter asset paths and visual resources quickly. | [Available](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) |
| LottieFiles | `LottieFiles.lottiefiles` | Requested LottieFiles extension ID; not returned by the Marketplace at validation time. | Preserved in the catalog for traceability, but excluded from installation because the ID is unavailable. | [Unavailable at validation time](https://marketplace.visualstudio.com/items?itemName=LottieFiles.lottiefiles) |
| SVG | `jock.svg` | Provides SVG-focused editing and preview support inside VS Code. | Useful for Flutter vector assets, icons, and scalable illustrations. | [Available](https://marketplace.visualstudio.com/items?itemName=jock.svg) |
| Flutter Best Theme | `HoussemEddineFadhli.flutter-best-theme` | A Flutter-oriented editor theme designed for comfortable Dart and widget authoring. | Improves visual focus during long Flutter development sessions. | [Available](https://marketplace.visualstudio.com/items?itemName=HoussemEddineFadhli.flutter-best-theme) |
| Pubspec Assist | `jeroen-meijer.pubspec-assist` | Assists with adding and maintaining Dart and Flutter dependencies in pubspec.yaml. | Reduces dependency-editing mistakes and repetitive package lookup. | [Available](https://marketplace.visualstudio.com/items?itemName=jeroen-meijer.pubspec-assist) |
| Pubspec Dependency Search | `everettjf.pubspec-dependency-search` | Searches for packages and helps locate dependency information while editing pubspec files. | Makes package discovery faster from within the project workspace. | [Available](https://marketplace.visualstudio.com/items?itemName=everettjf.pubspec-dependency-search) |
| Version Lens | `pflannery.vscode-versionlens` | Displays current and available dependency versions in supported manifest files. | Improves awareness of package freshness and upgrade opportunities. | [Available](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) |
| Find Unused | `pflannery.vscode-find-unused` | Requested unused-code extension ID; not returned by the Marketplace at validation time. | Preserved in the catalog for traceability, but excluded from installation because the ID is unavailable. | [Unavailable at validation time](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-find-unused) |
| Coverage Gutters | `ryanluker.vscode-coverage-gutters` | Displays code coverage information in the editor gutter from supported coverage reports. | Makes test coverage gaps visible during implementation and review. | [Available](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) |
| Flutter Coverage | `Flutterando.flutter-coverage` | Adds Flutter-specific coverage workflow support and visualization. | Keeps coverage feedback close to the Dart and Flutter source code. | [Available](https://marketplace.visualstudio.com/items?itemName=Flutterando.flutter-coverage) |
| flutter-stylizer | `gmlewis-vscode.flutter-stylizer` | Formats Flutter widget trees into a more readable and consistent style. | Improves maintainability of complex declarative UI code. | [Available](https://marketplace.visualstudio.com/items?itemName=gmlewis-vscode.flutter-stylizer) |
| Better Comments | `aaron-bond.better-comments` | Highlights categorized comments such as TODO, warning, and important notes. | Makes technical intent and follow-up work easier to scan. | [Available](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) |
| Todo Tree | `gruntfuggly.todo-tree` | Collects TODO and related annotations into a navigable tree view. | Provides a project-wide view of technical debt and planned work. | [Available](https://marketplace.visualstudio.com/items?itemName=gruntfuggly.todo-tree) |
| GitLens — Git supercharged | `eamodio.gitlens` | Adds rich Git blame, history, comparison, and repository insights to VS Code. | Supports safe, reviewable changes in collaborative Flutter projects. | [Available](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) |
| Git Graph | `mhutchie.git-graph` | Visualizes Git branches, commits, merges, and repository history. | Makes branch-based Flutter delivery workflows easier to reason about. | [Available](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) |
| GitHub Pull Requests | `GitHub.vscode-pull-request-github` | Reviews and manages GitHub pull requests and issues from inside VS Code. | Keeps code review and issue context close to the implementation. | [Available](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) |
| GitHub Copilot Chat | `GitHub.copilot-chat` | Current GitHub Copilot Chat extension for AI-assisted coding conversations and suggestions in VS Code. | Replaces the requested deprecated Copilot ID with the current Marketplace entry. | [Available](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) |
| Thunder Client | `rangav.vscode-thunder-client` | Provides a lightweight API client for testing REST services from VS Code. | Helps validate Flutter backend integrations without leaving the workspace. | [Available](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) |
| REST Client | `humao.rest-client` | Runs HTTP requests stored as readable .http files inside a project. | Enables repeatable, version-controlled API checks for mobile clients. | [Available](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) |
| Firebase Explorer | `jsayol.firebase-explorer` | Requested Firebase Explorer extension ID; not returned by the Marketplace at validation time. | Preserved in the catalog for traceability, but excluded from installation because the ID is unavailable. | [Unavailable at validation time](https://marketplace.visualstudio.com/items?itemName=jsayol.firebase-explorer) |
| Flutter i18n VsCode Inline | `volankey.flutter-i18n-vscode-inline` | Shows Flutter localization values inline while editing localized resources and code. | Reduces context switching during internationalized UI work. | [Available](https://marketplace.visualstudio.com/items?itemName=volankey.flutter-i18n-vscode-inline) |
| vscode-flutter-i18n-json | `esskar.vscode-flutter-i18n-json` | Supports Flutter i18n JSON editing and localization workflows. | Improves the authoring experience for JSON-backed translations. | [Available](https://marketplace.visualstudio.com/items?itemName=esskar.vscode-flutter-i18n-json) |
| Translate i18n by l10n.dev | `l10n-dev.translate-i18n-json` | Helps translate and maintain i18n JSON resources for application localization. | Supports multilingual Flutter releases and translation maintenance. | [Available](https://marketplace.visualstudio.com/items?itemName=l10n-dev.translate-i18n-json) |
| Clean Architecture (DDD) Scaffolder for Flutter | `Sunnat.clean-arch-ddd-flutter` | Scaffolds a Flutter project structure inspired by Clean Architecture and Domain-Driven Design. | Provides a starting point for modular, testable Flutter codebases. | [Available](https://marketplace.visualstudio.com/items?itemName=Sunnat.clean-arch-ddd-flutter) |
| GitHub Copilot | `GitHub.copilot` | Provides AI-assisted coding suggestions and completion inside VS Code. | Offers optional acceleration for repetitive coding tasks; service availability may require a separate plan. | [Available](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) |
| Roo Code | `RooVeterinaryInc.roo-cline` | Provides an AI-assisted coding agent experience inside VS Code. | Adds an optional agentic workflow for exploration and implementation tasks. | [Available](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline) |
| Advanced New File | `dkundel.vscode-new-file` | Creates files quickly from the Command Palette with flexible path entry. | Speeds up creation of Dart files, folders, tests, and project assets. | [Available](https://marketplace.visualstudio.com/items?itemName=dkundel.vscode-new-file) |
| change-case | `wmaurer.change-case` | Converts selected text between common naming and casing conventions. | Helps align Dart identifiers, JSON keys, and generated model names. | [Available](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) |
| Peacock | `johnpapa.vscode-peacock` | Customizes the VS Code workspace color for visual project identification. | Prevents mistakes when multiple Flutter projects are open at once. | [Available](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) |
| Material Icon Theme | `PKief.material-icon-theme` | Adds clear file and folder icons for Dart, Flutter, assets, and common project files. | Improves navigation in large Flutter repositories. | [Available](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) |
| Accessibility Checker | `a11yChecker.a11y-checker` | Checks accessibility-related concerns in supported web and UI content. | Encourages accessible product thinking alongside Flutter UI development. | [Available](https://marketplace.visualstudio.com/items?itemName=a11yChecker.a11y-checker) |

## Feature highlights

The pack provides an opinionated but flexible baseline for Flutter work. It makes Dart and Flutter analysis available immediately, adds several focused productivity tools for model generation and snippets, exposes visual feedback for colors and assets, and keeps testing and coverage signals close to the code. Git, GitHub, API, localization, and architecture tools extend the workflow beyond widget authoring.

The selection deliberately avoids embedding custom runtime code. This keeps the pack small, reduces maintenance risk, and lets each upstream extension update independently. Optional AI extensions are included as convenience entries, not as requirements for using Flutter Power Pack.

## Recommended settings

The following settings are a practical starting point. Add only the settings that match your team conventions to `.vscode/settings.json`:

```jsonc
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  },
  "[dart]": {
    "editor.defaultFormatter": "Dart-Code.dart-code",
    "editor.formatOnSave": true,
    "editor.rulers": [100]
  },
  "dart.lineLength": 100,
  "dart.previewFlutterUiGuides": true,
  "dart.previewFlutterUiGuidesCustomTracking": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "search.exclude": {
    "**/.dart_tool": true,
    "**/build": true,
    "**/.pub-cache": true
  },
  "todo-tree.general.tags": ["TODO", "FIXME", "BUG", "HACK", "NOTE"]
}
```

The correct Dart formatter identifier and preview settings can evolve with the Dart extension. If a setting is not recognized in your installed version, remove it rather than suppressing diagnostics globally.

## Recommended keyboard shortcuts

Add the following optional bindings to `keybindings.json` if they fit your workflow:

```jsonc
[
  {
    "key": "ctrl+alt+r",
    "command": "workbench.action.debug.start"
  },
  {
    "key": "ctrl+alt+h",
    "command": "flutter.hotReload"
  },
  {
    "key": "ctrl+alt+t",
    "command": "workbench.action.terminal.new"
  },
  {
    "key": "ctrl+shift+g",
    "command": "workbench.view.scm"
  }
]
```

Command IDs can vary across extension versions. If a Flutter command does not resolve, use the Command Palette to locate the current command and update the binding.

## Troubleshooting

### Flutter or Dart is not detected

Open the Command Palette and run **Flutter: Run Flutter Doctor**. Confirm that the workspace contains the directory with `pubspec.yaml`, that the Flutter SDK is on the system path or configured in VS Code, and that the project is opened as a workspace folder. Flutter's documentation describes this validation flow and the expected output panel.[1]

### The extension pack installs but an entry is missing

The pack manifest contains the 46 IDs verified in the release validation. Four IDs from the original list were unavailable at validation time and are therefore documented but not installed. Check the Marketplace status links in the catalog and consult the release notes before substituting a third-party extension.

### Formatting is inconsistent

Check that the Dart extension is installed and selected as the formatter for Dart files. Verify that another formatter is not overriding the language-specific setting, then run **Format Document With...** once to select the Dart formatter explicitly.

### Coverage is not visible

Coverage extensions generally need a generated coverage report. Run the test command that your project uses, confirm that a coverage file exists, and then open the relevant source file. The exact supported report format depends on the coverage extension version.

### API requests fail in REST Client or Thunder Client

Verify the request URL, environment variables, authentication headers, and network access separately from Flutter. Keep secrets out of `.http` files that are committed to the repository.

### Optional AI extensions are unavailable

GitHub Copilot and Roo Code are optional entries. Their capabilities, account requirements, and availability are controlled by their respective providers. The core Flutter workflow remains fully usable without them.

## Contributing

Contributions are welcome when they improve the accuracy, safety, or usefulness of the pack for Flutter teams. Before opening a pull request, check the Marketplace ID, explain why an extension belongs in the relevant tier, update the catalog and changelog, and run the validation commands described in `vsc-extension-quickstart.md`.

Please read `CONTRIBUTING.md`, follow the Code of Conduct, and keep changes focused. This project is an extension pack, so proposed entries should provide clear value without duplicating an existing tool unnecessarily.

## Release and changelog

Release notes follow the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and use Semantic Versioning. Read `CHANGELOG.md` for the current release. The GitHub Actions workflow in `.github/workflows/publish.yml` validates and packages every run, creates a GitHub Release for version tags, and publishes to the Visual Studio Marketplace or Open VSX only when the corresponding authorized secret (`VSCE_PAT` or `OVSX_TOKEN`) is configured. See `PUBLISH_GUIDE.md` for the complete procedure.

## Author and support

Flutter Power Pack is maintained by [Abdulaziz Alqudimi](https://github.com/Alqudimi). For bugs and feature proposals, open a [GitHub issue](https://github.com/Alqudimi/flutter-power-pack/issues). For discussions and questions, use [GitHub Discussions](https://github.com/Alqudimi/flutter-power-pack/discussions). For security concerns, follow `SECURITY.md`; for general support, follow `SUPPORT.md`. For direct author contact, email [abodx1234freey@gmail.com](mailto:abodx1234freey@gmail.com).

## References

[1]: https://docs.flutter.dev/tools/vs-code "Flutter: Visual Studio Code"
[2]: https://code.visualstudio.com/api/references/extension-manifest "Visual Studio Code Extension Manifest"

## License

This project is licensed under the [MIT License](LICENSE).
