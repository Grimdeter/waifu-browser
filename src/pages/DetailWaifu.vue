<template>
  <div class="flex items-center justify-center">
    <div class="w-1/2"><Card :image="waifu"></Card></div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue"
import { useWaifusStore } from "@/stores/waifus"
import Card from "@/components/Card.vue"

const waifusStoreArray = useWaifusStore()
const props = defineProps(["id"])
const waifu = ref(null)
for (let i = 0; i < waifusStoreArray.firebaseWaifus.length; i++) {
  if (waifusStoreArray.firebaseWaifus[i].WID === props.id) {
    console.log("found")
    waifu.value = waifusStoreArray.firebaseWaifus[i]
    break
  }
}

for (let i = 0; i < waifusStoreArray.waifus.length; i++) {
  if (waifusStoreArray.waifus[i].image_id === parseInt(props.id)) {
    console.log("found")
    waifu.value = waifusStoreArray.waifus[i]
    break
  }
}
onMounted(() => {})

console.log(waifusStoreArray.waifus[0])
// console.log(props.id)
</script>
