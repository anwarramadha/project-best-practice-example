<template>
  <SSlider :slides="slides" />
</template>

<script setup>
/**
 * Slider component
 * @displayName Slider
 */
import SSlider from '@sutekitechid/project-best-practices-example/components/commons/SSlider.vue'
import { useNuxtApp } from 'nuxt/app';

const { $api } = useNuxtApp()

const slideResp = await $api.slide.getSlides()

const slides = computed(() => {
  const result = []
  if (slideResp) {
    slideResp?.data?.forEach((slide) => {
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
  return result
})
</script>
