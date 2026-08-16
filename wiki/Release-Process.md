# Release Process

## Versioning

Use Semantic Versioning for the extension manifest. The Git tag must use the same version with a leading `v`; for example, manifest version `1.0.1` uses tag `v1.0.1`.

## Release sequence

1. Update `package.json`, `package-lock.json`, `CHANGELOG.md`, and `VALIDATION_REPORT.md`.
2. Run the local manifest, dependency-availability, VSIX, secret, documentation, and isolated-install checks.
3. Review the generated VSIX contents and confirm that no private or generated development files are included.
4. Commit the release changes on `main`.
5. Create and push the matching version tag.
6. Review the GitHub Actions run, artifact, and GitHub Release.
7. Download the public VSIX asset and record its SHA-256 checksum in the validation report.

## CI behavior

The workflow validates the manifest and packages a VSIX on every run. On a version tag, it uploads the archive and creates a GitHub Release. Visual Studio Marketplace and Open VSX publication steps are intentionally absent from CI and are not distribution targets for this project.

## Rollback

Do not silently overwrite a public release. If a package is defective, publish a corrective patch version, explain the issue in the changelog, and update the validation report. Existing GitHub Release assets should remain traceable to their version tag.

## Evidence

Each release should retain the versioned validation report, the GitHub Actions run URL, the GitHub Release URL, and the final VSIX SHA-256 checksum.
