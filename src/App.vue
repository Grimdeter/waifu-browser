<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <img :src="imgLink" alt="" srcset="" />
  <hr />
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const imgLink = ref("");
onMounted(() => {
  axios.get("https://api.waifu.pics/sfw/waifu").then((response) => {
    // console.log(response.data.url);
    imgLink.value = response.data.url;
    console.log(imgLink);
  });

  const showImgLink = computed(() => {
    return imgLink;
  });

  return {
    showImgLink,
    imgLink,
  };
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
