<template>
  <ul
    class="py-1 text-sm text-gray-700 dark:text-gray-200 mx-auto text-center"
    aria-labelledby="dropdownDefault"
  >
    <li>
      <router-link
        to="AddWaifu"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Add waifu</router-link
      >
    </li>
    <li>
      <router-link
        to="/"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Browse waifus</router-link
      >
    </li>
    <li>
      <router-link
        to="UpdateWaifu"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Update waifus</router-link
      >
    </li>
    <li>
      <router-link
        to="DeleteWaifu"
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >Delete waifus</router-link
      >
    </li>
  </ul>
</template>
