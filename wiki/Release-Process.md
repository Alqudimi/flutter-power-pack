# Release Process

## Versioning

Use Semantic Versioning for the extension manifest. The Git tag must use the same version with a leading `v`; for example, manifest version `1.0.1` uses tag `v1.0.1`.

## Release sequence

1. Update `package.json`, `package-lock.json`, `CHANGELOG.md`, and `VALIDATION_REPORT.md`.
2. Run the local manifest, Marketplace-ID, VSIX, secret, documentation, and isolated-install checks.
3. Review the generated VSIX contents and confirm that no private or generated development files are included.
4. Commit the release changes on `main`.
5. Create and push the matching version tag.
6. Review the GitHub Actions run, artifact, and GitHub Release.
7. If authorized, verify the Visual Studio Marketplace and Open VSX listings.
8. Record the public URLs, package checksum, and any skipped publication target in the validation report.

## CI behavior

The workflow always validates the manifest and packages a VSIX. On a version tag, it uploads the archive and creates a GitHub Release. Visual Studio Marketplace publication is conditional on the `VSCE_PAT` secret, and Open VSX publication is conditional on `OVSX_TOKEN`. Missing registry credentials do not make GitHub Release packaging fail.

## Rollback

Do not silently overwrite a public release. If a package is defective, publish a corrective patch version, explain the issue in the changelog, and update the relevant listing. Unpublishing or removing a Marketplace or Open VSX version may have additional registry-specific constraints and should be used only after reviewing the provider's current policy.

## Evidence

Each release should retain the versioned validation report, the GitHub Actions run URL, the GitHub Release URL, and the final VSIX SHA-256 checksum. Registry listing URLs should be recorded only after the provider confirms successful publication.
