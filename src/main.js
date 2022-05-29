import { createPinia } from "pinia";
import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/tailwind.css";
import baseLink from "./components/baseLink.vue";
import imgThumb from "./components/imgThumb.vue";
import { routes } from "./routes";
import 'mosha-vue-toastify/dist/style.css';

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);
app.use(createPinia());

app.component("img-thumb", imgThumb);
app.component("base-link", baseLink);

app.mount("#app");
