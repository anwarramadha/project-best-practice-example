<template>
  <vueper-slides fade :touchable="false">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
    />
  </vueper-slides>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useFetch } from 'nuxt/app';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { Slide } from '@sutekitechid/types/slide'
// console.log(process)
const { data, execute } = useFetch<Slide[]>('/api/open/banner/all?position=home-banner', {
  watch: false,
  // immediate: false,
  headers: {
    'Content-Type': 'application/json',
    'api-key': "4Qe7h5NcgCu1EPDzCKIO"
  },
})

// console.log(slideReq)
const fetchData = async () => {
  await execute()
  console.log(data)
}

fetchData()

const slides: ComputedRef<Slide[]> = computed(() => {
  const result: Slide[] = []
  if (data) {
    console.log('slides', data)
    data?.value?.forEach((slide: Slide) => {
      result.push({
        id: slide.id,
        title: slide.title,
        description: slide.description,
        image: `https://apicampusdir.civitas.id${slide.image}`,
        link: slide.link,
        position: slide.position,
        status: slide.status,
        createdAt: slide.createdAt,
        updatedAt: slide.updatedAt,
      })
    })
  }
  console.log(result)
  return result
})
</script>
