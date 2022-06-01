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
      {
        name: "ManageWaifus",
        path: "/ManageWaifus",
        component: () => import("./pages/ManageWaifus.vue"),
        props: true,
        children: [
          {
            name: "AddWaifu",
            path: "/AddWaifu",
            component: () => {
              import("./pages/AddWaifu.vue");
            },
          },
        ],
      },
    ],
  },
];
