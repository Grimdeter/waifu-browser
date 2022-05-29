<template>
  <div class="relative flex flex-col">
    <header class="py-4 px-4 bg-cyan-500 text-white">
      <button class="btn" @click="showSidebar = true">show sidebar</button>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <Sidebar
      v-model="showSidebar"
      v-model:tag="currentTag"
      :tagList="tagList"
      class="absolute left-0 top-0"
    ></Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { ref, onMounted, watch } from "vue";
import * as waifuImService from "@/services/waifu-im.service";

export default {
  components: { Sidebar },

  setup() {
    /* ==================== refs START ==================== */
    const showSidebar = ref(false);
    const tagList = ref([]);
    const waifuList = ref([]);
    const currentTag = ref({});
    const isNsfw = ref(false);
    /* ==================== refs END ==================== */

    /* ==================== methods START ==================== */
    const getAllTags = async () => {
      tagList.value = await waifuImService.getAllTags();
    };

    const getRandomWaifus = async () => {
      waifuList.value = await waifuImService.getRandomWaifus(
        currentTag.value.name,
        isNsfw.value
      );
    };
    /* ==================== methods END ==================== */

    /* ==================== hooks START ==================== */
    onMounted(() => {
      getAllTags();
    });
    /* ==================== hooks END ==================== */

    /* ==================== watchers START ==================== */
    watch(tagList, () => {
      currentTag.value = tagList.value[0];
      getRandomWaifus();
    });

    watch(currentTag, () => {
      getRandomWaifus();
    });
    /* ==================== watchers END ==================== */

    return { currentTag, showSidebar, tagList };
  },
};
</script>
