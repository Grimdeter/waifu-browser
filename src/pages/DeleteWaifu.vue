<template>
  <section class="py-26 bg-white">
    <div class="container px-4 mx-auto">
      <div class="max-w-lg mx-auto">
        <div class="text-center mb-8">
          <img src="../assets/logo.png" alt="" />
          <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Delete waifu</h2>
        </div>
        <form action="" @submit.prevent="">
          <div class="mb-6">
            <label class="block mb-2 font-extrabold" for="">Waifu ID</label>
            <input
              class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="text"
              placeholder="Waifu ID"
              v-model="WID"
            />
          </div>

          <button
            class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            @click="deleteW"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineEmits } from "vue"

import { createToast } from "mosha-vue-toastify"

const WID = ref(null)

const emits = defineEmits(["delete-waifu"])

const deleteW = async () => {
  if (WID.value === null || WID.value.trim() === "") {
    createToast("Please enter the fields", { type: "danger" })
    throw "Please enter the fields"
  }

  emits("delete-waifu", WID)
}
</script>
