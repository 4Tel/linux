import { PluginConfig } from "@docusaurus/types";
export const gtag: PluginConfig = [
  '@docusaurus/plugin-google-gtag',
  {
    trackingID: 'G-KJQBWD08DH',
  }
];

export const redirects: PluginConfig = [
  '@docusaurus/plugin-client-redirects',
  {
    redirects: [],
  },
];