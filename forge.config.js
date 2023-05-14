module.exports = {
  packagerConfig: {
    appCopyright: 'Copyright © 2023 suifei',
    appBundleId: 'com.suifei.ced2023',
    icon: 'icon',
    platforms: ['darwin', 'linux', 'win32'],
    arch: ['x64', 'arm64'],
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://github.com/suifei/CompilerExplorerDesktop/raw/main/assets/favicon.ico',
        setupIcon: './assets/favicon.ico',
        authors: 'suifei', 
        description: 'Compiler Explorer website local application',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32'],
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './assets/favicon.icns',
        background: './assets/bg.png',
        overwrite: true,
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          bin: 'CED',
          name: 'ced',
          productName: 'Compiler Explorer Desktop',
          description: 'Compiler Explorer website local application',
          productDescription: 'Compiler Explorer website local application',
          version: '1.0.0',
          categories: ['Utility'],
          maintainer: 'suifei',
          homepage: 'https://github.com/suifei/CompilerExplorerDesktop',
          icon: './assets/favicon.png',
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          bin: 'CED',
          name: 'ced',
          productName: 'Compiler Explorer Desktop',
          description: 'Compiler Explorer website local application',
          productDescription: 'Compiler Explorer website local application',
          version: '1.0.0',
          categories: ['Utility'],
          maintainer: 'suifei',
          homepage: 'https://github.com/suifei/CompilerExplorerDesktop',
          icon: './assets/favicon.png',
        },
      },
    },
  ],
};
