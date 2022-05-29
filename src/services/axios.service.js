import Axios from "axios";

const BASE_URI = "https://api.waifu.im";

const waifuImAxios = Axios.create({
  baseURL: BASE_URI,
});

waifuImAxios.interceptors.response.use(onFulfilled => onFulfilled.data);

export { waifuImAxios };
