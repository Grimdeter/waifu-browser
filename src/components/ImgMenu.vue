<template>
  <div class="group inline-block" v-if="props.modelValue" @click.stop="">
    <DotsVertical class="text-xl"></DotsVertical>
    <ul
      class="pt-2 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-300 ease-in-out origin-top-left min-w-max"
    >
      <li class="text-sm px-3 py-1 hover:bg-gray-100">
        <a :href="props.image.url" target="_blank">Link to img</a>
      </li>
      <li class="text-sm px-3 py-1 hover:bg-gray-100">
        <a :href="props.image.source" target="_blank">Link to source</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import DotsVertical from "./icons/DotsVertical.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Object,
    default: () => ({}),
  },
});
</script>
