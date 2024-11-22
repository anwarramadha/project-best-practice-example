// https://nuxt.com/docs/api/configuration/nuxt-config
import dotEnvExtended from 'dotenv-extended'
import viteCompression from 'vite-plugin-compression'

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
    '@sutekitechid/project-best-practices-example'
  ],
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
    },
    API_KEY: process.env.API_KEY
  }
} as NuxtConfig)