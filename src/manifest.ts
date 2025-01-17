import { defineManifest } from '@crxjs/vite-plugin'
// @ts-ignore
import packageData from '../package.json'

const isDev = process.env.NODE_ENV == 'development'

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/google-extension-16.png',
    32: 'img/google-extension-32.png',
    48: 'img/google-extension-48.png',
    128: 'img/google-extension-128.png',
  },
  action: {
    default_popup: 'pages/popup.html',
    default_icon: 'img/google-extension-48.png',
  },
  options_page: 'pages/options.html',
  devtools_page: 'pages/devtools.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['https://mirapri.com/*'],
      js: ['src/contentScript/index.ts'],
    },
  ],
  side_panel: {
    default_path: 'pages/sidepanel.html',
  },
  web_accessible_resources: [
    {
      resources: [
        'img/google-extension-16.png',
        'img/google-extension-32.png',
        'img/google-extension-48.png',
        'img/google-extension-128.png',
      ],
      matches: [],
    },
  ],
  /**
   * 权限
   * @see https://developer.chrome.com/docs/extensions/mv3/manifest/permissions/
   */
  permissions: ['sidePanel', 'storage']
})
