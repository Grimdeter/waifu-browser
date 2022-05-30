<script setup>
import { defineComponent, ref, computed, defineProps } from "vue";
import ImgMenuVue from "./ImgMenu.vue";

const ImgMenu = defineComponent(ImgMenuVue);

const menuIconVisible = ref(false);
const menuIsVisible = ref(false);

const props = defineProps({
  image: {
    type: Object,
    default: () => ({}),
  },
});

const getDescription = computed(() => {
  return props.image.tags.map((el) => el.description).join(" ");
});

// const menuShow = () => {
//   menuIsVisible.value = true;
// };
</script>

<template>
  <div class="w-full px-4">
    <div
      class="bg-white relative rounded-lg overflow-hidden mb-10"
      @mouseenter="menuIconVisible = true"
      @mouseleave="
        menuIconVisible = false;
        menuIsVisible = false;
      "
    >
      <img :src="image.url" alt="image" class="shadow hover:shadow-xl w-full" />
      <button
        v-if="menuIconVisible"
        class="btn absolute left-5 top-5 text-4xl"
        @mouseenter="menuIsVisible = true"
      >
        <dots-vertical></dots-vertical>
      </button>
      <ImgMenu
        class="absolute left-5 top-5 text-4xl"
        :image="image"
        v-model="menuIsVisible"
      ></ImgMenu>
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
