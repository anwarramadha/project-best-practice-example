<template>
  <div class="px-24 py-4 flex justify-between items-center border-b-1">
    <div class="w-[240px]">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="flex gap-4 justify-between p-1 pl-4 rounded border-primary-60 border-1">
      <div class="flex gap-4 items-center">
        <i class="si-search"></i>
        <s-input
          placeholder="Cari kampus/prodi impian Anda disini..."
          class="w-[300px]"
        />
      </div>
      <s-button>
        Cari
      </s-button>
    </div>
    <div class="flex gap-4">
      <s-button>
        Masuk
      </s-button>
      <s-button outline>
        Daftar
      </s-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.s-input {
  border: none;
}
input:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
