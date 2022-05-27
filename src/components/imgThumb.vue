<template>
  <img
    :src="imgLink"
    @load="onLoad"
    ref="loadedImg"
    class="h-64 m-3 inline"
    alt=""
    srcset=""
  />
</template>

<script>
export default {
  props: ["imgLink"],
  emits: ["isLoaded"],
  methods: {
    onLoad() {
      this.$emit("isLoaded");
      // console.log(this.$refs.loadedImg.width !== 0);
    },
  },
};
</script>
