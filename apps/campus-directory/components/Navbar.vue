<template>
    <div class="px-24 py-4 flex justify-between items-center border-b-1">
      <div class="w-[240px]">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <NavbarSearchInput />
      <div class="flex gap-4">
        <NavbarLoginButton />
        <NavbarRegisterButton />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import NavbarSearchInput from './NavbarSearchInput.vue';
  import NavbarLoginButton from './NavbarLoginButton.vue';
  import NavbarRegisterButton from './NavbarRegisterButton.vue';
  </script>
  