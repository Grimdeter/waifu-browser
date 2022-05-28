<template>
  <div class="flex">
    <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
      <h2
        @click="changeApi"
        class="text-3xl font-semibold text-center text-blue-800"
      >
        Pick your poison
      </h2>

      <div>
        <side-bar @set-category="setCategory"></side-bar>
      </div>
      <page-size @newPageSize="newPageSize"></page-size>
    </div>
    <div class="w-full h-full p-4 m-8 overflow-y-auto">
      <div class="flex items-center justify-center p-4 border-4 border-dotted">
        <div class="flex-wrap" :class="blurStatus" v-show="!loadingStatus">
          <img-thumb
            @click="thumbClicked(i)"
            v-for="(imgLink, i) in imgLinks"
            :key="i"
            :imgLink="imgLink"
            @isLoaded="loadingHandler"
          />
        </div>
        <div v-if="loadingStatus"><loading-spinner></loading-spinner></div>
        <imgBig
          v-if="imgClicked"
          @close-img="thumbClose"
          :imgLink="imgLinks[imgClicked]"
        />
      </div>
    </div>
  </div>
  <!-- <div class="columns-2">
    <side-bar></side-bar>
    <div class="flex-wrap" :class="blurStatus">
      <img-thumb
        @click="thumbClicked(i)"
        v-for="(imgLink, i) in imgLinks"
        :key="i"
        :imgLink="imgLink"
      />
    </div>
    <imgBig
      v-if="imgClicked"
      @close-img="thumbClose"
      :imgLink="imgLinks[imgClicked]"
    />
  </div> -->
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import imgBig from "./components/imgBig.vue";
import sideBar from "./components/theSidebar.vue";
import loadingSpinner from "./components/loadingSpinner.vue";
import pageSize from "./components/pageSize.vue";

export default {
  components: { imgBig, sideBar, loadingSpinner, pageSize },
  setup() {
    const imgLinks = ref([]);
    const hardLink = ref("https://i.waifu.pics/aY~~qQE.png");
    const softLink = ref("https://i.waifu.pics/TCe98X_.jpg");
    const imgClicked = ref(null);
    const blurStatus = ref("");
    const selectedCategory = ref("");
    const selectedType = ref("sfw");
    const loadingStatus = ref(false);
    const numberOfPictures = ref(18);
    const apiChoice = ref(1);

    onMounted(() => {
      imgLinks.value = [
        "https://i.waifu.pics/n6U5SHh.png",
        "https://i.waifu.pics/V8hvqfK.jpg",
        "https://i.waifu.pics/-eOx7uI.jpg",
        "https://i.waifu.pics/_laUTLb.jpg",
        "https://i.waifu.pics/bzgUs3j.jpg",
        "https://i.waifu.pics/mUTwf4z.jpg",
        "https://i.waifu.pics/sS-rREz.jpg",
        "https://i.waifu.pics/i1QE8~W.com_0265.jpg",
        "https://i.waifu.pics/e6r~srS.png",
        "https://i.waifu.pics/dPXxQqE.png",
        "https://i.waifu.pics/hFkV1Ny.jpg",
        "https://i.waifu.pics/u~qTv5c.jpg",
        "https://i.waifu.pics/ryft10A.jpg",
        "https://i.waifu.pics/i~RQhRD.png",
        "https://i.waifu.pics/bMH6oaI.png",
        "https://i.waifu.pics/lAI_XX6.jpg",
        "https://i.waifu.pics/MjtH3Ha.jpg",
        "https://i.waifu.pics/WGTA1vN.png",
      ];
      // console.log(imgLinks.value);
    });

    const loadImgs = (category) => {
      loadingStatus.value = true;
      let imgLinksTemp = [];
      imgLinks.value = [];
      for (let i = 0; i < numberOfPictures.value; i++) {
        if (apiChoice.value == 1) {
          axios
            .get(`https://api.waifu.pics/${selectedType.value}/${category}`)
            .then((response) => {
              imgLinksTemp.push(response.data.url);
              imgLinks.value.push(response.data.url);
              console.log("2");
              if (i === numberOfPictures.value - 1) {
                imgLinks.value = imgLinksTemp;
                console.log(imgLinks.value);
                // imgLinksTemp = [];
                // loadingStatus.value = false;
              }
            });
        } else {
          axios
            .get(`https://api.waifu.im/random`, { selected_tags: category })
            .then((response) => {
              console.log(response.data.images[0].url);

              imgLinks.value.push(response.data.images[0].url);
            });
        }
      }
    };

    const changeApi = () => {
      apiChoice.value = 2;
      console.log("change in api");
    };

    const newPageSize = (newSize) => {
      numberOfPictures.value = newSize;
    };
    let loadingCounter = 0;
    const loadingHandler = () => {
      loadingCounter++;
      // console.log(loadingCounter);
      if (loadingCounter === numberOfPictures.value) {
        console.log("object");
        loadingStatus.value = false;
        loadingCounter = 0;
      }
    };

    const setCategory = (category) => {
      selectedCategory.value = category;
      loadImgs(category);
    };

    const thumbClicked = (id) => {
      imgClicked.value = id;
      // console.log(imgClicked.value);
      blurStatus.value = "blur";
    };

    const thumbClose = () => {
      blurStatus.value = "";
      imgClicked.value = null;
    };

    return {
      thumbClicked,
      thumbClose,
      setCategory,
      loadImgs,
      loadingHandler,
      newPageSize,
      changeApi,
      loadingStatus,
      hardLink,
      softLink,
      imgLinks,
      imgClicked,
      blurStatus,
      selectedType,
      apiChoice,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
