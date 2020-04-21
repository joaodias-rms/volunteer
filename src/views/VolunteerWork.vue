<template>
  <div class="col-sm-12 ">
    <v-row>
      <div class="col-sm-2">
        <Menu :menu="menu" />
      </div>
      <v-card flat class="col-sm-6">
        <TopHome />
        <WorkList/>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import TopHome from "@/components/TopHome.vue";
// import WorkDetail from "@/components/WorkDetail.vue";
import WorkList from "@/components/WorkList.vue";
export default {
  name: "VolunteerWork",
  components: {
    TopHome,
    Menu,
    WorkList
  },
  data: () => ({
    menu: [
      {
        id: 1,
        name: "Home",
        route: "/",
      },
      {
        id: 2,
        name: "Profile",
        route: "/Profile",
      },
      {
        id: 3,
        name: "Saved Itens",
        route: "/Save",
      },
      {
        id: 4,
        name: "How it Works?",
        route: "/About",
      },
    ],
  }),
};
</script>

<style></style>
