<template>
  <TheHeader></TheHeader>
  <main class="py-10">
    <router-view></router-view>
  </main>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>
