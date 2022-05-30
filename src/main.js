import { createPinia } from "pinia";
import { createApp } from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/tailwind.css";
import baseLink from "./components/baseLink.vue";
import imgThumb from "./components/imgThumb.vue";
import { routes } from "./routes";
import "mosha-vue-toastify/dist/style.css";
import VueClickAwayPlugin from "vue3-click-away";
import VueEasyLightbox from "vue-easy-lightbox";
import DotsVertical from "@/components/icons/DotsVertical.vue";

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

app.use(router);
app.use(createPinia());
app.use(VueClickAwayPlugin);
app.use(VueEasyLightbox);

app.component("img-thumb", imgThumb);
app.component("base-link", baseLink);
app.component("dots-vertical", DotsVertical);

app.mount("#app");
