# Troubleshooting

## The pack does not appear after installation

Confirm that VS Code is using the expected profile and extensions directory, then search for the exact identifier `alqudimi.flutter-power-pack`. Reinstall the VSIX with `--force` or reload the Extensions view. If the listing came from a local archive, confirm that the archive was built from the intended version.

## A bundled extension is missing

Open the Extensions view and search for the exact upstream ID from the [Extension Catalog](Extension-Catalog). Check whether the upstream extension supports the current operating system and VS Code version. The pack cannot repair a removed, unpublished, incompatible, or platform-specific upstream extension.

## Flutter or Dart analysis is not working

Verify the Flutter SDK, Dart SDK, and official `Dart-Code.flutter` and `Dart-Code.dart-code` extensions independently. Run Flutter's own diagnostics and inspect the Dart analysis output. This pack only installs the tooling; it does not configure an SDK path or alter a workspace.

## A service extension asks for an account

Extensions such as AI assistants, API clients, or collaboration tools may require separate accounts, subscriptions, or provider-specific licenses. The pack does not grant access to those services. Follow the provider's own sign-in and licensing instructions.

## GitHub Release packaging fails

Run `npm ci --ignore-scripts --no-audit --no-fund`, then `npm run validate:manifest` and `npm run package:vsix -- --out flutter-power-pack-1.0.0.vsix` locally. Check the workflow log for the first failing command and confirm that the version tag matches the manifest version.

## The release asset cannot be installed

Download the VSIX again from the official [GitHub Release](https://github.com/Alqudimi/flutter-power-pack/releases), verify its checksum when provided, and install it with `code --install-extension ... --force`. Do not use an unverified third-party mirror.

## Why is a Marketplace reference present in the project?

The pack contains IDs for upstream extensions that are discoverable through the public Marketplace. The validator checks that those upstream dependencies still exist. This is not a publication or upload of Flutter Power Pack to the Marketplace. The project itself is distributed through GitHub Releases and local VSIX files only.
