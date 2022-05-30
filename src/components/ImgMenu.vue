<template>
  <div class="group inline-block" v-if="props.modelValue">
    <DotsVertical></DotsVertical>
    <ul
      class="pt-2 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-max"
    >
      <li class="text-sm px-3 py-1 hover:bg-gray-100">
        <a :href="props.image.url">Link to img</a>
      </li>
      <li class="text-sm px-3 py-1 hover:bg-gray-100">
        <a :href="props.image.source">Link to source</a>
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

<style>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}
</style>
