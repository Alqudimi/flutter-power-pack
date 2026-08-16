# Security Policy

## Scope

Flutter Power Pack is a manifest-only VS Code extension pack. It does not contain executable extension code, collect telemetry, process user content, or store credentials. The security scope includes the package manifest, release archive, documentation, GitHub workflows, and the third-party extension identifiers listed in `package.json`.

## Supported versions

| Version | Support status |
|---|---|
| `1.0.x` | Supported for security reports |
| Older versions | Best effort only; please reproduce on the latest release first |

## Reporting a vulnerability

Please do not open a public issue for a suspected security vulnerability. Use the repository's private GitHub security advisory workflow when it is available. If private advisories are not enabled, open a minimal issue asking the maintainer to provide a private reporting channel without including exploit details, credentials, tokens, or personal data.

A useful report includes the affected version, the exact file or workflow involved, a minimal reproduction, the security impact, and a suggested mitigation. Remove secrets and private information before submitting any diagnostic output.

## Response expectations

The maintainer will acknowledge a valid report as soon as practical, investigate it, and coordinate a fix or mitigation. The project will not publish reporter details without permission. Reports involving an upstream extension-pack member should also be sent to that extension's maintainer because this project does not control the upstream code.

## Supply-chain precautions

Release automation must use least-privilege, short-lived credentials where possible. Marketplace and Open VSX tokens belong in repository secrets or a password manager and must never appear in source files, logs, README examples, or VSIX contents. Pull requests should be reviewed for unexpected workflow changes, new external actions, embedded credentials, and unreviewed generated files.
