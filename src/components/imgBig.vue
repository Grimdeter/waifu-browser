<template>
  <div>
    <img
      @click="closeImg"
      :src="imgLink"
      alt=""
      class="absolute inset-0 mt-[-25px] ml-[-25px] blur-none"
    />
  </div>
</template>

<script>
export default {
  props: ["imgLink"],
  emits: ["close-img"],
  methods: {
    closeImg() {
      this.$emit("close-img");
    },
  },
};
</script>
