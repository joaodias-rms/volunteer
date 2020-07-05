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
    redirect: { name: "RecentWorks" },
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
        name: "RecentWorks",
        component: () => import("../components/RecentWorks.vue"),
      },
    ],
  },
  {
    path: "/Profile",
    name: "Profile",
    redirect: { name: "HeaderHome" },
    component: () => import("../views/Profile.vue"),
    children: [
      // {
      //   path: ":id/",
      //   name: "MyWorks",
      //   component: () => import("../components/WorkDetail.vue"),
      // },
      {
        path: ":id/",
        name: "MyExperiences",
        component: () => import("../components/ExperiencesDetail.vue"),
      },
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
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/HowWorks",
    name: "HowWorks",
    component: () => import("../components/HowWorks.vue"),
  },
  {
    path: "/OngProfile",
    name: "OngProfile",
    component: () => import("../views/OngProfile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
