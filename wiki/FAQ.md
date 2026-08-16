# Frequently Asked Questions

## Is this a Flutter SDK?

No. Flutter Power Pack is a VS Code extension pack. Install Flutter and Dart separately and ensure their SDKs are available on the machine.

## Does the pack execute code?

The pack itself has no runtime source code or activation events. Its purpose is to declare a curated list of extension IDs that VS Code can install.

## Are all bundled extensions maintained by this project?

No. Each bundled extension is published and maintained by its own upstream publisher. This project curates the list and maintains the pack manifest, metadata, documentation, and release automation.

## Does installing the pack include paid subscriptions?

No. An upstream extension may require an account, subscription, or provider-specific license. Installing the pack does not grant any service entitlement.

## Can I install the pack without the Marketplace?

Yes. Build or download the `.vsix` file and install it through **Install from VSIX...** or the `code --install-extension` command.

## Why are extension IDs case-sensitive in documentation but matched case-insensitively during validation?

The manifest preserves the publisher-provided spelling. The validation script normalizes case because the public Marketplace API may return publisher names with different capitalization even when the identifier resolves to the same listing.

## Which distribution channels are officially supported?

The project officially distributes through the public GitHub repository, GitHub Releases, and local VSIX installation. The Visual Studio Marketplace and Open VSX are intentionally not used as publication channels for this project. A third-party site that merely mirrors VSIX downloads is not treated as an official author-controlled channel.
