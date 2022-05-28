<template>
  <img
    :src="imgLink"
    @load="onLoad"
    ref="loadedImg"
    class="h-64 m-3 inline cursor-pointer"
    alt=""
    srcset=""
  />
</template>

<script>
// import * as nsfwjs from "nsfwjs";

export default {
  props: ["imgLink"],
  emits: ["isLoaded"],
  methods: {
    onLoad() {
      // const img = this.$refs.loadedImg;

      // Load model from my S3.
      // See the section hosting the model files on your site.
      // nsfwjs
      //   .load("../assets/min_nsfwjs")
      //   .then(function (model) {
      //     // Classify the image
      //     return model.classify(img);
      //   })
      //   .then(function (predictions) {
      //     console.log("Predictions: ", predictions);
      //   });
      // nsfwjs.load();
      // console.log(img);
      this.$emit("isLoaded");
      // console.log(this.$refs.loadedImg.width !== 0);
    },
  },
};
</script>
