<template>
  <aside class="w-50" aria-label="Sidebar">
    <div
      class="overflow-y-auto mt-5 py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
    >
      <ul class="space-y-2">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('waifu')"
          >
            <span class="ml-3">Waifu</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('neko')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Neko</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('shinobu')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Shinobu</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('megumin')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Megumin</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('bully')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Bully</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('cuddle')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Cuddle</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('cry')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Cry</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="setCategory('kiss')"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">Kiss</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  emits: ["set-category"],
  methods: {
    setCategory(category) {
      console.log(category);
      this.$emit("set-category", category);
    },
  },
};
</script>
