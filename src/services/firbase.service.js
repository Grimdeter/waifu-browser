import { createToast } from "mosha-vue-toastify";
import Axios from "axios";
import { useWaifusStore } from "@/stores/waifus.js";

const BASE_URI =
  "https://vue-sample-8b60b-default-rtdb.europe-west1.firebasedatabase.app/waifus";

const waifusStoreArray = useWaifusStore();

const firebaseAxios = Axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

firebaseAxios.interceptors.response.use((onFulfilled) => onFulfilled.data);

let currWaifus = [];
export const getMyWaifus = async () => {
  console.log("getMyWaifus");
  try {
    console.log("err here1");
    const response = await firebaseAxios.get(".json");
    let arr = [];
    let index = 0;
    for (let i in response) {
      arr.push(response[i]);
      arr[index].nodeName = i;
      index++;
    }
    currWaifus = arr;
    waifusStoreArray.setNewFirebaseWaifus(arr);
    return arr;
  } catch (error) {
    console.log("err here2");
    createToast(error.message, { type: "danger" });
  }
};

export const postMyWaifus = async (waifuToPost) => {
  console.log("hi from post");
  let regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  if (!regexp.test(waifuToPost.src._rawValue)) {
    createToast("Please enter valid link", { type: "danger" });
    throw "Record already exists";
  }

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
    const response = await firebaseAxios.post(".json", JSON.stringify(sub), {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    return;
  } catch (error) {
    createToast(error.message, { type: "danger" });
  }
};

export const UpdateWaifu = async (waifuToUpdate) => {
  console.log("hi from update");
  const waifuToUpdateInside = {
    WID: waifuToUpdate.WID._rawValue,
    description: waifuToUpdate.description._rawValue,
    src: waifuToUpdate.src._rawValue,
  };
  let WIDNode = null;
  let regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  if (!regexp.test(waifuToUpdateInside.src)) {
    createToast("Please enter valid link", { type: "danger" });
    throw "Record already exists";
  }

  for (let i = 0; i < currWaifus.length; i++) {
    if (currWaifus[i].WID === waifuToUpdateInside.WID) {
      WIDNode = currWaifus[i].nodeName;
    }
    if (i == currWaifus.length - 1 && WIDNode === null) {
      createToast("No record to update was found", { type: "danger" });
      throw "No record to update was found";
    }
  }

  try {
    const response = await firebaseAxios.put(
      WIDNode + ".json",
      JSON.stringify(waifuToUpdateInside),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
    return;
  } catch (error) {
    createToast(error.message, { type: "danger" });
  }
};

export const DeleteWaifu = async (WID) => {
  console.log("hi from delete");
  console.log(currWaifus);
  let WIDNode = null;

  for (let i = 0; i < currWaifus.length; i++) {
    if (currWaifus[i].WID === WID._rawValue) {
      WIDNode = currWaifus[i].nodeName;
    }
    if (i == currWaifus.length - 1 && WIDNode === null) {
      createToast("No record was found", { type: "danger" });
      throw "No record was found";
    }
  }

  try {
    const response = await firebaseAxios.delete(WIDNode + ".json");
    console.log(response);
    return;
  } catch (error) {
    createToast(error.message, { type: "danger" });
  }
};
