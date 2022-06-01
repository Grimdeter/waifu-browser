<template>
  <header>
    <nav class="bg-white shadow">
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
            <!-- <router-link to="ManageWaifus" class="mr-5"
              >Manage my waifus</router-link
            > -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
