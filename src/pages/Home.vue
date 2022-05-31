<template>
  <div>
    <div>
      <ul class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <li v-for="(item, index) in waifuList" :key="item.image_id">
          <Card :image="item" @click="showMultiple(index)"></Card>
        </li>
      </ul>
    </div>
    <vue-easy-lightbox
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Card from "@/components/Card.vue";
const varWaifuList = defineProps({
  waifuList: {
    type: Array,
    default: () => [{}],
  },
});

const imgs = ref([]);
const visible = ref(false);
const index = ref(0);
const showMultiple = (indexRecieved) => {
  let newArr = [];
  for (let i = 0; i < varWaifuList.waifuList.length; i++) {
    let lightboxitem = {
      title: varWaifuList.waifuList[i].image_id,
      src: varWaifuList.waifuList[i].url,
    };
    newArr.push(lightboxitem);
  }
  imgs.value = newArr;
  index.value = indexRecieved;
  show();
};
const show = () => {
  visible.value = true;
};
const handleHide = () => {
  visible.value = false;
};
</script>

<!-- <script setup>
import { defineProps } from "vue";
import Card from "@/components/Card.vue";

defineProps({
  waifuList: {
    type: Array,
    default: () => [{ url: "some" }],
  },
});
</script>

<template>
  <div>
    <ul class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <li v-for="item in waifuList" :key="item.image_id">
        <Card :image="item"></Card>
      </li>
    </ul>
  </div>
</template> -->
