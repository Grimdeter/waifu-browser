<template>
  <div
    class="w-full bg-cover bg-center"
    style="
      height: 32rem;
      background-image: url(https://cdn.wallpapersafari.com/4/95/HSYiKZ.jpg);
    "
  >
    <div
      class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"
    >
      <div class="text-center">
        <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
          Pick your
          <span
            class="underline text-blue-400 cursor-pointer"
            @click="$emit('showSidebar')"
            >poison</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>
