<template>
  <div class="flex gap-4 items-center">
    <i class="si-search"></i>
    <SInput
      :placeholder="placeholder"
      class="w-[300px]"
      @input="emits('input', $event)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  placeholder: String,
  class: String,
})

const emits = defineEmits(['input'])
</script>

<style scoped>
:deep(.s-input) {
  border: none;
}
:deep(input:focus) {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
