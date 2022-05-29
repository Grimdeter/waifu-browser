<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  image: {
    type: Object,
    default: () => ({}),
  },
});

const getDescription = computed(() => {
  return props.image.tags.map(el => el.description).join(", ");
});
</script>

<template>
  <div class="w-full px-4">
    <div class="bg-white rounded-lg overflow-hidden mb-10">
      <img :src="image.url" alt="image" class="w-full" />
      <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
        <h3>
          <p
            class="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
          >
            {{ image.image_id }}
          </p>
        </h3>
        <p class="text-base text-body-color leading-relaxed mb-7">
          {{ getDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
