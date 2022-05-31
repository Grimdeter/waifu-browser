<template>
  <header>
    <nav class="bg-white shadow">
      <div class="container mx-auto px-6 py-3">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex justify-between items-center">
            <div class="text-xl font-semibold text-gray-700">Waifu Browser</div>
            <!-- Mobile menu button -->
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

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div class="hidden -mx-4 md:flex md:items-center">
            <a
              href="https://waifu.im/docs/"
              class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >API documentation</a
            >
            <a
              href="https://github.com/Grimdeter/waifu-browser"
              class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
              >Project GitHub</a
            >
            <slot></slot>
          </div>
        </div>
      </div>
    </nav>

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
  </header>
</template>
