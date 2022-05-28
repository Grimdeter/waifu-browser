<template>
  <aside class="w-50" aria-label="Sidebar">
    <div class="overflow-y-auto mt-5 py-4 px-3">
      <ul class="space-y-2">
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('waifu')">
            <span class="ml-3">Waifu</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('neko')">
            <span class="flex-1 ml-3 whitespace-nowrap">Neko</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('shinobu')">
            <span class="flex-1 ml-3 whitespace-nowrap">Shinobu</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('megumin')">
            <span class="flex-1 ml-3 whitespace-nowrap">Megumin</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('bully')">
            <span class="flex-1 ml-3 whitespace-nowrap">Bully</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('cuddle')">
            <span class="flex-1 ml-3 whitespace-nowrap">Cuddle</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('cry')">
            <span class="flex-1 ml-3 whitespace-nowrap">Cry</span>
          </a>
        </li>
        <li>
          <a href="#" :class="classStylesLink" @click="setCategory('kiss')">
            <span class="flex-1 ml-3 whitespace-nowrap">Kiss</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      classStylesLink:
        "flex items-center p-2 text-base font-normal bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 rounded-lg",
    };
  },
  emits: ["set-category"],
  methods: {
    setCategory(category) {
      console.log(category);
      this.$emit("set-category", category);
    },
  },
};
</script>
