// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Navbar from '@/components/Navbar.vue'

it('Navbar Displayed', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(Navbar)
  expect(component.html()).toContain(`Masuk`)
  expect(component.html()).toContain(`Register`)
})
