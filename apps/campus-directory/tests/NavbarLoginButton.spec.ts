// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import NavbarLoginButton from '@/components/NavbarLoginButton.vue'

it('Navbar Displayed', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(NavbarLoginButton)
  expect(component.html()).toContain(`Masuk`)
})

it('Navbar has href=/login', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(NavbarLoginButton)
  expect(component.html()).toContain(`to="/login"`)
})