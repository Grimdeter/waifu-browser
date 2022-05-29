/**
 * @type RouteRecordRaw[]
 */
export const routes = [
  {
    path: "",
    component: () => import("./layouts/Default.vue"),
    children: [
      {
        path: "",
        component: () => import("./pages/Home.vue"),
      },
      {
        name: "DetailWaifu",
        path: "waifu/:id",
        component: () => import("./pages/DetailWaifu.vue"),
        props: true,
      },
    ],
  },
];
