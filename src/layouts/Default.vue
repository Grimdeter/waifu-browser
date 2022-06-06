<template>
  <div class="relative flex flex-col">
    <!-- <header class="py-4 px-4 bg-cyan-500 text-white">
      <Checkbox v-model:isChecked="isNsfw" label="NSFW"></Checkbox>
    </header> -->
    <TheHeader class="fixed w-full z-40" @showSidebar="showSidebar = true">
      <button class="btn mr-4" @click="showSidebar = true">Show sidebar</button>
    </TheHeader>
    <BackgroundImage
      @showSidebar="showSidebar = true"
      v-if="showBackgroundImage"
    ></BackgroundImage>

    <main class="py-10 mt-10">
      <router-view
        :waifuList="waifuList"
        :waifuListFirebase="waifuListFirebase"
        @post-new-waifu="postWaifu"
        @delete-waifu="deleteWaifuMethod"
        @update-waifu="updateWaifuMethod"
        @showBackgroundImage="showBackgroundImage = true"
        @hideBackgroundImage="showBackgroundImage = false"
      ></router-view>
    </main>

    <TheFooter v-if="showFooter"></TheFooter>

    <Sidebar
      v-model="showSidebar"
      v-model:tag="currentTag"
      :tagList="tagList"
      class="right-0 top-0 fixed"
    ></Sidebar>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"
import Checkbox from "@/components/Checkbox.vue"
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import { ref, onMounted, watch } from "vue"
import * as waifuImService from "@/services/waifu-im.service"
import { useKeypress } from "vue3-keypress"
import BackgroundImage from "@/components/BackgroundImage.vue"
import { getMyWaifus, postMyWaifus } from "@/services/firbase.service"
import UpdateWaifuVue from "@/pages/UpdateWaifu.vue"
import DeleteWaifuVue from "@/pages/DeleteWaifu.vue"
import { DeleteWaifu } from "@/services/firbase.service"
import { UpdateWaifu } from "@/services/firbase.service"

export default {
  components: {
    Sidebar,
    Checkbox,
    TheHeader,
    TheFooter,
    BackgroundImage,
    UpdateWaifuVue,
    DeleteWaifuVue,
  },

  setup() {
    let isFirst = true

    /* ==================== refs START ==================== */
    const showSidebar = ref(false)
    const tagList = ref([])
    const waifuList = ref([])
    const waifuListFirebase = ref([])
    const currentTag = ref({})
    const isNsfw = ref(false)
    const showFooter = ref(false)
    const showBackgroundImage = ref(true)

    /* ==================== refs END ==================== */

    /* ==================== methods START ==================== */
    const getAllTags = async () => {
      tagList.value = await waifuImService.getAllTags()
    }

    const getRandomWaifus = async () => {
      waifuList.value = await waifuImService.getRandomWaifus(
        currentTag.value.name,
        isNsfw.value
      )
      showFooter.value = true
    }

    const hideSideBar = () => {
      showSidebar.value = false
    }

    const getW = async () => {
      waifuListFirebase.value = await getMyWaifus()
      console.log(waifuListFirebase.value)
    }

    const postWaifu = async (waifu) => {
      console.log(waifu)
      await postMyWaifus(waifu).then(() => {
        getW()
      })
    }

    const deleteWaifuMethod = async (WID) => {
      await DeleteWaifu(WID).then(() => {
        getW()
      })
    }

    const updateWaifuMethod = async (waifuToUpdate) => {
      await UpdateWaifu(waifuToUpdate).then(() => {
        getW()
      })
    }
    /* ==================== methods END ==================== */

    /* ==================== hooks START ==================== */
    onMounted(() => {
      getAllTags()
      getW()
    })

    useKeypress({
      keyEvent: "keydown",
      keyBinds: [
        {
          keyCode: "esc", // or keyCode as integer, e.g. 40
          success: hideSideBar,
        },
      ],
    })
    /* ==================== hooks END ==================== */

    /* ==================== watchers START ==================== */
    watch(tagList, () => {
      currentTag.value = tagList.value[0]
      getRandomWaifus()
      setTimeout(() => {
        isFirst = false
      }, 300)
    })

    watch(currentTag, () => {
      if (!isFirst) {
        getRandomWaifus()
      }
    })

    watch(isNsfw, () => {
      if (!isFirst) {
        getRandomWaifus()
      }
    })
    /* ==================== watchers END ==================== */

    return {
      currentTag,
      showSidebar,
      tagList,
      waifuList,
      isNsfw,
      showFooter,
      waifuListFirebase,
      postWaifu,
      showBackgroundImage,
      deleteWaifuMethod,
      updateWaifuMethod,
    }
  },
}
</script>
