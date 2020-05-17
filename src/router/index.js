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
    redirect: { name: "HeaderHome" },
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
      },
    ],
  },
  {
    path: "/Profile",
    name: "Profile",
    redirect: { name: "HeaderHome" },
    component: () => import("../views/Profile.vue"),
    children: [
      {
        path: ":id/",
        name: "MyWorks",
        component: () => import("../components/WorkDetail.vue"),
      },
      // {
      //   path: ":id/",
      //   name: "MyExperiences",
      //   component: () => "../components/Experiences.vue",
      // },
      {
        path: "",
        name: "HeaderProfile",
        component: () => import("../components/HeaderHome.vue"),
      },
    ],
  },
  {
    path: "/Save",
    name: "Save",
    component: () => import("../views/Save.vue"),
    children: [
      {
        path: ":id/",
        name: "WorkDetailSaved",
        component: () => import("../components/WorkDetail.vue"),
      },
      {
        path: "",
        name: "HeaderSave",
        component: () => import("../components/HeaderHome.vue"),
      },
    ],
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
