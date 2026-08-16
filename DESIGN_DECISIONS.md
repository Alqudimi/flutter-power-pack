# Design Decisions

## Product name and identifier

The project uses **Flutter Power Pack** as the display name and `flutter-power-pack` as the machine-readable identifier. The name is descriptive, searchable, and clear about the product's purpose without implying that it is an official Flutter product.

## Publisher identity

The manifest uses the required Marketplace publisher identifier `alqudimi`. Public author information identifies Abdulaziz Alqudimi, links to `https://github.com/Alqudimi`, and uses the supplied email address.

## Runtime architecture

This is a pure extension pack. It contains no activation events, commands, dependencies, or executable runtime code. This minimizes the attack surface and lets the VS Code Marketplace install the curated entries independently.

## Extension ID availability conflict

The source curation list contains 50 requested IDs. The Marketplace API validation run on 2026-08-16 found 46 available IDs and four unavailable IDs: `gornivv.vscode-flutter-helper`, `LottieFiles.lottiefiles`, `pflannery.vscode-find-unused`, `jsayol.firebase-explorer`. The original requirements simultaneously require all requested IDs and require all IDs to be current and valid. Those requirements cannot both be satisfied when an ID is not returned by the Marketplace.

The production-safe decision is to put only the 46 currently available IDs in `extensionPack`, because an unavailable ID cannot provide a working install path. The four requested IDs remain in the README catalog with direct Marketplace links, explicit status labels, and explanations. This preserves traceability without shipping a manifest that promises unavailable extensions. The raw validation report is kept outside the distributable project for auditability. The Marketplace also reports the requested `GitHub.copilot` entry as deprecated; the manifest therefore uses the verified current successor `GitHub.copilot-chat`, while the original requested ID remains documented in the README catalog.

## Branding

The icon uses a deterministic SVG source and a matching 256 by 256 PNG export. The design uses Flutter blue `#02569B`, Flutter cyan `#54C5F8`, a dark blue panel, a white power bolt, and a small green confirmation accent. The geometric mark is Flutter-inspired rather than a copy of an official trademark logo.

## Documentation language

The project files are written in professional English because the VS Code Marketplace, package manifest, GitHub workflows, and extension documentation are primarily consumed by an international developer audience. The surrounding delivery message is in Arabic to match the user's working language.

## Marketplace metadata

The manifest declares `categories: ["Extension Packs"]`, `extensionKind: ["workspace"]`, a minimum VS Code engine range of `^1.80.0`, repository metadata, Q&A discussions, keywords, badges, and a GitHub-flavored README. These fields follow the VS Code extension manifest conventions described in the official documentation.
