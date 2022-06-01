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
        props: true,
      },
      {
        name: "DetailWaifu",
        path: "waifu/:id",
        component: () => import("./pages/DetailWaifu.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/manage_waifus",
    component: () => import("./layouts/HeaderOnly.vue"),
    children: [
      {
        path: "",
        component: () => import("./pages/ManageWaifus.vue"),
        props: true,
      },
    ],
  },
];
