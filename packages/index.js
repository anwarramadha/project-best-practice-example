import {
    defineNuxtModule,
    addPlugin,
    createResolver,
  } from '@nuxt/kit'
  // import { join } from 'path'
  
  export default defineNuxtModule({
    setup() {
      // here we need to setup our components
  
      // nuxt.hook('components:dirs', dirs => {
      //   dirs.push({
      //     path: join(__dirname, 'components'),
      //     prefix: 's',
      //   })
      // })
      const { resolve } = createResolver(import.meta.url)
      addPlugin(resolve('./plugins/handleFlowbite.js'))
      addPlugin(resolve('./plugins/api.ts'))
    }
  })
  