import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/VolunteerWork",
    name: "VolunteerWork",
    redirect: {name:"HeaderHome"},
    // alias: {name:"VolunteerWork"},
    component: () => import("../views/VolunteerWork.vue"),
    children: [
      
      {
        path: ":id/",
        name: "WorkDetail",
        component: () => import("../components/WorkDetail.vue"),
      },
      {
        path: "",
        name: "HeaderHome",
        component: () => import("../components/HeaderHome.vue"),
      }

    ],
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/Save",
    name: "Save",
    component: () => import("../views/Save.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
