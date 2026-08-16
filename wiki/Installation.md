# Installation

## Install from the Visual Studio Marketplace

Open the [Flutter Power Pack Marketplace listing](https://marketplace.visualstudio.com/items?itemName=alqudimi.flutter-power-pack) and select **Install**. VS Code resolves the extension-pack entries and installs the available extensions. Some bundled services may require their own account, subscription, or license.

## Install from a GitHub Release

Download the `.vsix` asset from the repository's [Releases page](https://github.com/Alqudimi/flutter-power-pack/releases). In VS Code, open **Extensions**, choose the three-dot menu, select **Install from VSIX...**, and choose the downloaded file.

The command-line equivalent is:

```bash
code --install-extension flutter-power-pack-1.0.0.vsix --force
```

## Build and install from source

```bash
git clone https://github.com/Alqudimi/flutter-power-pack.git
cd flutter-power-pack
npm ci --ignore-scripts --no-audit --no-fund
npm install --global @vscode/vsce
vsce package --no-dependencies
code --install-extension flutter-power-pack-1.0.0.vsix --force
```

## Verify the installation

Open the Extensions view and search for `Flutter Power Pack`. The installed version should match the release version. The pack itself has no commands or activation events; its observable behavior is the successful installation and resolution of its curated extension IDs.

## Uninstall

Remove the pack from the Extensions view or run:

```bash
code --uninstall-extension alqudimi.flutter-power-pack
```

Uninstalling the pack does not necessarily remove extensions that VS Code installed as pack members or that are used by another pack. Review the Extensions view before removing those tools.
