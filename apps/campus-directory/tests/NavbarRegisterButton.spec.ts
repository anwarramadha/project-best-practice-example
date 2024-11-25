// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import NavbarRegisterButton from '@/components/NavbarRegisterButton.vue'

it('NavbarRegisterButton Displayed', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(NavbarRegisterButton)
  expect(component.html()).toContain(`Register`)
})

it('NavbarRegisterButton has href=/register', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(NavbarRegisterButton)
  expect(component.html()).toContain(`to="/register"`)
})