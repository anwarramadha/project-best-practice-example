<template>
  <div class="flex gap-4 justify-between p-1 pl-4 rounded border-primary-60 border-1">
      <SSearchInput
        placeholder="Cari kampus/prodi impian Anda disini..."
        class="w-[300px]"
        @input="emits('input', $event)"
      />
      <s-button>
        Cari
      </s-button>
    </div>
</template>

<script setup lang="ts">
import SSearchInput from '@sutekitechid/project-best-practices-example/components/commons/SSearchInput.vue'

const emits = defineEmits(['input'])
console.log('navbar search input', process)
</script>
