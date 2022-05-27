import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import imgThumb from "./components/imgThumb.vue";

const app = createApp(App);

app.component("img-thumb", imgThumb);

app.mount("#app");
