<template>
  <div>
    <Navbar />
    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import Navbar from '@/components/navbar/BadNavbar.vue'
import Navbar from '~/components/Navbar.vue'
</script>
