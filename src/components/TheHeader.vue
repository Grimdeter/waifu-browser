<template>
  <header>
    <nav class="bg-white shadow h-15">
      <div class="container mx-auto px-6 py-3">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex justify-between items-center">
            <router-link to="/" class="text-xl font-semibold text-gray-700"
              >Waifu Browser</router-link
            >
            <div class="flex md:hidden">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                @click="$emit('showSidebar')"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="hidden -mx-4 md:flex md:items-center">
            <router-link
              to="/"
              class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >Home</router-link
            >
            <a
              href="https://waifu.im/docs/"
              class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              target="_blank"
              >API documentation</a
            >
            <a
              href="https://github.com/Grimdeter/waifu-browser"
              class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              target="_blank"
              >Project GitHub</a
            >
            <div
              @mouseleave="showCRUD = false"
              class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
            >
              <button
                class="inline-flex mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                type="button"
                @click="showCRUD = !showCRUD"
              >
                Manage Waifus
                <!-- class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" -->

                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdown"
                class="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                v-if="showCRUD"
              >
                <manage-waifus-vue></manage-waifus-vue>
              </div>
            </div>
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              @click="$emit('showSidebar')"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import ManageWaifusVue from "@/pages/ManageWaifus.vue"
import { defineComponent, ref } from "vue"

const showCRUD = ref(false)
defineComponent(ManageWaifusVue)
</script>
