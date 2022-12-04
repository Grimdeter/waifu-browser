import { createToast } from "mosha-vue-toastify";
import { waifuImAxios } from "./axios.service";
import { useWaifusStore } from "@/stores/waifus.js";

const TAGS = "tags/?full=true";
const LIST = "search";
const waifusStoreArray = useWaifusStore();

export const getAllTags = async () => {
  try {
    const { versatile } = await waifuImAxios.get(TAGS);
    return versatile;
  } catch (err) {
    createToast(err.message, {
      type: "danger",
    });
  }
  return [];
};

export const getRandomWaifus = async (tag, isNsfw = false) => {
  try {
    const response = await waifuImAxios.get(LIST, {
      params: {
        gif: false,
        is_nsfw: isNsfw,
        many: true,
        included_tags: tag,
      },
    });
    waifusStoreArray.pushNewWaifusArray(response.images);

    return response.images;
  } catch (err) {
    createToast(err.message, {
      type: "danger",
    });
  }

  return [];
};
