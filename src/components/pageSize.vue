<template>
  <div class="mt-5">
    <button class="mt-3" @click="setPageSize">Set my page size</button>
  </div>
  <div class="">
    <button
      @click="pageSize--"
      class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-full rounded-l cursor-pointer outline-none"
    >
      <span class="m-auto text-2xl font-thin">-</span>
    </button>
    <input
      type="number"
      class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
      name="custom-input-number"
      v-model="pageSize"
    />
    <button
      @click="pageSize++"
      class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-full rounded-r cursor-pointer"
    >
      <span class="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["newPageSize"],
  data() {
    return {
      pageSize: 18,
    };
  },
  watch: {
    pageSize() {
      this.$emit("newPageSize", this.pageSize);
    },
  },
  methods: {
    setPageSize() {
      this.$emit("newPageSize", this.pageSize);
    },
  },
};
</script>
