<script setup>
import { defineProps, computed, defineEmits } from "vue";

const emits = defineEmits(["update:isChecked"]);

const props = defineProps({
  label: String,
  isChecked: Boolean,
});

const innerIsChecked = computed({
  get: () => props.isChecked,
  set(value) {
    emits("update:isChecked", value);
  },
});
</script>

<template>
  <label class="inline-flex items-center mt-3">
    <input
      type="checkbox"
      class="form-checkbox h-5 w-5 text-gray-600"
      v-model="innerIsChecked"
    />
    <span class="ml-2 text-gray-700">{{ label }}</span>
  </label>
</template>
