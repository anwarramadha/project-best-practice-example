// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SSearchInput from '@sutekitechid/project-best-practices-example/components/commons/SSearchInput.vue'

it('Search Input Displayed', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(SSearchInput, {
    props: {
      placeholder: 'Cari kampus/prodi impian Anda disini...'
    }
  })
  expect(component.html()).toContain(`Cari kampus/prodi impian Anda disini...`)
})

it('Search Input Emit Event', async () => {
  // ... test with Nuxt environment!
  const component = await mountSuspended(SSearchInput, {
    props: {
      placeholder: 'Cari kampus/prodi impian Anda disini...'
    }
  })
  component.vm.$emit('input', 'Universitas')
  // expect(component.emitted('input')).toBeTruthy()
  expect(component.emitted('input')![0]).toEqual(['Universitas'])
})