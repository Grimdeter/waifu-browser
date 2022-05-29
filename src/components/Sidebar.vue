<script setup>
import { defineProps, computed, defineEmits } from "vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

const emits = defineEmits(["update:modelValue", "update:tag"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  tagList: {
    type: Array,
    default: () => [],
  },

  tag: {
    type: Object,
    default: () => ({}),
  },
});

const innerModel = computed({
  get: () => props.modelValue,
  set(value) {
    emits("update:modelValue", value);
  },
});

const innerTag = computed({
  get: () => props.tag,
  set(value) {
    emits("update:tag", value);
  },
});
</script>

<template>
  <transition name="slide">
    <nav v-if="innerModel" class="w-64 py-5 h-screen bg-gray-800">
      <div class="relative w-full h-full">
        <button
          class="btn absolute -right-5 -top-2 text-4xl border-2 border-white rounded-full bg-white"
          @click="innerModel = false"
        >
          <CloseIcon></CloseIcon>
        </button>
        <div class="flex items-center justify-center">
          <h3>Tags</h3>
        </div>
        <div class="mt-10">
          <div v-for="item in tagList" :key="item.tag_id" class="bg-gray-700">
            <button
              class="w-full py-2 text-sm text-gray-100 hover:bg-blue-500 hover:text-white"
              :class="{ 'bg-blue-500': item.name === tag.name }"
              @click="innerTag = item"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<style lang="scss" scoped>
.slide {
  &-enter-active,
  &-leave-active {
    // @apply translate-x-0 transition-all duration-500 ease-in;
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    // @apply -translate-x-52 opacity-0;
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>
