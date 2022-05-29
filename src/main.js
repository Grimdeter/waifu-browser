import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import imgThumb from "./components/imgThumb.vue";
import baseLink from "./components/baseLink.vue";

const app = createApp(App);

app.component("img-thumb", imgThumb);
app.component("base-link", baseLink);

app.mount("#app");
