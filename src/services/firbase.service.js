import { createToast } from "mosha-vue-toastify";
import Axios from "axios";

const BASE_URI =
  "https://vue-sample-8b60b-default-rtdb.europe-west1.firebasedatabase.app/waifus.json";

const firebaseAxios = Axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

firebaseAxios.interceptors.response.use((onFulfilled) => onFulfilled.data);

let currWaifus = [];
export const getMyWaifus = async () => {
  console.log("getMyWaifus");
  try {
    const response = await firebaseAxios.get();
    let arr = [];
    for (let i in response) {
      arr.push(response[i]);
    }
    currWaifus = arr;
    return arr;
  } catch (error) {
    createToast(error.message, { type: "danger" });
  }
};

export const postMyWaifus = async (waifuToPost) => {
  console.log("hi from post");
  console.log(waifuToPost.WID._rawValue);
  console.log(currWaifus[2].WID);
  for (let i = 0; i < currWaifus.length; i++) {
    if (
      currWaifus[i].WID === waifuToPost.WID._rawValue ||
      currWaifus[i].src === waifuToPost.src._rawValue
    ) {
      createToast("Record already exists", { type: "danger" });
      throw "Record already exists";
    }
    // console.log(i);
  }

  try {
    const sub = {
      WID: waifuToPost.WID._rawValue,
      description: waifuToPost.description._rawValue,
      src: waifuToPost.src._rawValue,
    };
    const response = await firebaseAxios.post("", JSON.stringify(sub), {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    return;
  } catch (error) {
    createToast(error.message, { type: "danger" });
  }
};
