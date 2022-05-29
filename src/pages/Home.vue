<script setup>
import { defineProps } from "vue";
import Card from "@/components/Card.vue";

defineProps({
  waifuList: {
    type: Array,
    default: () => [{ url: "some" }],
  },
});
</script>

<template>
  <div>
    <ul class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <li v-for="item in waifuList" :key="item.image_id">
        <Card :image="item"></Card>
      </li>
    </ul>
  </div>
</template>
