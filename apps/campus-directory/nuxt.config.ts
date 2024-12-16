// https://nuxt.com/docs/api/configuration/nuxt-config
import dotEnvExtended from 'dotenv-extended'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'node:path'

dotEnvExtended.load({
  path: '../../.env',
  defaults: '../../.env',
  schema: '../../.env.schema'
})

interface ViteProxyOptions {
  target: string;
  changeOrigin: boolean;
  rewrite: (path: string) => string;
}

interface ViteServerOptions {
  fs: {
    allow: string[];
  };
  proxy: {
    [key: string]: ViteProxyOptions;
  };
}

interface ViteOptions {
  server: ViteServerOptions;
  plugins: any[];
}

interface NuxtConfig {
  compatibilityDate: string;
  devtools: { enabled: boolean };
  modules: string[];
  tailwindcss: object;
  vite: ViteOptions;
}

console.log('API BASE URL',process.env.API_BASE_URL)

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sutekitechid/project-best-practices-example',
    '@nuxt/test-utils/module',
    '@nuxt/content'
  ],components: {
     global: true,
    dirs: ['~/docs/components', '~/docs/commons/components']
        },
  tailwindcss: {},
  vite: {
    server: {
      fs: {
        allow: [
          '..', '../..'
        ]
      },
      proxy: {
        '/api': {
          target: process.env.API_BASE_URL as string,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        },
        '/multisite-config': {
          target: process.env.MULTISITE_CONFIG_URL as string,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/multisite-config/, '')
        }
      }
    },
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress'
      })
    ]
  },

  runtimeConfig: {
    public : {
      API_BASE_URL: process.env.API_BASE_URL,
      MULTISITE_CONFIG_URL: process.env.MULTISITE_CONFIG_URL,
      MULTISITE_NODE_ID: process.env.MULTISITE_NODE_ID,
      MULTISITE_SERVICE_ID: process.env.MULTISITE_SERVICE_ID || 'pmb'
    },
    API_KEY: process.env.API_KEY
  },
  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '/docs/campus-directory',
        base: resolve(__dirname, 'docs'),
        dir: 'docs'
      }
    }
  }
} as NuxtConfig)