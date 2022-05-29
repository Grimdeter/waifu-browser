<template>
  <a href="#" :class="classStylesLink" @click="setCategory(linkText)">
    <span class="ml-3">{{ linkText }}</span>
  </a>
</template>

<script>
export default {
  props: ["linkText"],
  data() {
    return {
      classStylesLink:
        "flex items-center p-2 text-base font-normal bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-lg",
    };
  },
  emits: ["set-category"],
  methods: {
    setCategory(category) {
      console.log(category);
      this.$emit("set-category", category);
    },
  },
};
</script>
