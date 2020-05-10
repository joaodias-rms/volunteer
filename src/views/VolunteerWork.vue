<template>
  <div class="col-sm-12 ">
    <v-row>
      <div class="col-sm-2">
        <Menu :menu="menu" />
      </div>
      <v-card flat class="col-sm-6 mt-3">
        <TopHome />
        <WorkList/>
      </v-card>
      <div class="col-sm-4">
        <router-view>
        </router-view>

      </div>
    </v-row>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import TopHome from "@/components/TopHome.vue";
// import HeaderHome from "@/components/HeaderHome.vue";
// import WorkDetail from "@/components/WorkDetail.vue";
import WorkList from "@/components/WorkList.vue";
export default {
  name: "VolunteerWork",
  components: {
    TopHome,
    Menu,
    WorkList,
    // WorkDetail,
    // HeaderHome
  },
  data: () => ({
    menu: [
     {
        id: 1,
        name: "Home",
        route: "/",
        icon: "mdi-home"
      },
      {
        id: 2,
        name: "Profile",
        route: "/Profile",
        icon: "mdi-account"
      },
      {
        id: 3,
        name: "Saved Itens",
        route: "/Save",
        icon: "mdi-content-save"
      },
      {
        id: 4,
        name: "How it Works?",
        route: "/About",
        icon: "mdi-information-variant"
      },
    ],
    Detail: true
  }),
};
</script>

<style></style>
