import { createToast } from "mosha-vue-toastify";
import { waifuImAxios } from "./axios.service";

const TAGS = "tags/?full=on";
const LIST = "random";

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
    await waifuImAxios.get(LIST, {
      params: {
        gif: false,
        is_nsfw: isNsfw,
        more: true,
        selected_tags: tag,
      },
    });
  } catch (err) {
    createToast(err.message, {
      type: "danger",
    });
  }
};
