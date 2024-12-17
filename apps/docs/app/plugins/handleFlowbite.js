import { defineNuxtPlugin } from 'nuxt/app'
// import { initFlowbite } from 'flowbite'
import { sicocoV3 } from '@sutekitechid/flowbite-vue'

import '@sutekitechid/flowbite-vue/icomoon/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.mixin({
  //   mounted () {
  //     initFlowbite()
  //   }
  // })
  console.log('handleFlowbite.js')
  nuxtApp.vueApp.use(sicocoV3, {
  })
})
