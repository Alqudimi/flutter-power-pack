# Troubleshooting

## The pack does not appear after installation

Confirm that VS Code is using the expected profile and extensions directory, then search for the exact identifier `alqudimi.flutter-power-pack`. Reinstall the VSIX with `--force` or reload the Extensions view. If the listing came from a local archive, confirm that the archive was built from the intended version.

## A bundled extension is missing

Open the Extensions view and search for the exact upstream ID from the [Extension Catalog](Extension-Catalog). Check whether the upstream extension supports the current operating system and VS Code version. The pack cannot repair a removed, unpublished, incompatible, or platform-specific upstream extension.

## Flutter or Dart analysis is not working

Verify the Flutter SDK, Dart SDK, and official `Dart-Code.flutter` and `Dart-Code.dart-code` extensions independently. Run Flutter's own diagnostics and inspect the Dart analysis output. This pack only installs the tooling; it does not configure an SDK path or alter a workspace.

## A service extension asks for an account

Extensions such as AI assistants, API clients, or collaboration tools may require separate accounts, subscriptions, or provider terms. The pack does not grant access to those services. Follow the provider's own sign-in and licensing instructions.

## The Marketplace package cannot be published

Check that the `publisher` value belongs to the authenticated publisher account, the version is not already published, the icon and README satisfy Marketplace rules, and the token or identity has the required permission. Do not copy credentials into issue reports or workflow files.

## Open VSX publication fails

Confirm that the Eclipse publisher agreement is accepted, the `alqudimi` namespace exists, the access token is valid, and the VSIX was packaged successfully. Review registry scanning messages for secret detection, blocked files, or namespace similarity issues.

## CI does not publish to a registry

This is expected when `VSCE_PAT` and/or `OVSX_TOKEN` is absent. The workflow still validates, packages, uploads an artifact, and creates a GitHub Release for version tags. Add only the required secret to the repository settings and rerun the tag workflow after reviewing the permissions.
