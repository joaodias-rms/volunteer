<template>
  <div class="col-sm-12">
    <v-row>
      <div class="col-sm-2">
        <Menu :menu="menu" />
      </div>
      <div class="col-sm-6">
        <SavedItens />
      </div>
      <div class="col-sm-4">
        <router-view> </router-view>
      </div>
    </v-row>
  </div>
</template>

<script>
import SavedItens from "@/components/SavedItens.vue";
import Menu from "@/components/Menu.vue";
// import WorkDetail from "@/components/WorkDetail.vue";
export default {
  name: "Save",
  components: {
    SavedItens,
    Menu,
    // WorkDetail,
  },
  data: () => ({
    menu: [
      {
        id: 1,
        name: "Home",
        route: "/",
        icon: "mdi-home",
      },
      {
        id: 2,
        name: "Profile",
        route: "/Profile",
        icon: "mdi-account",
      },
      {
        id: 3,
        name: "Saved Itens",
        route: "/Save",
        icon: "mdi-content-save",
      },
      {
        id: 4,
        name: "How it Works?",
        route: "/About",
        icon: "mdi-information-variant",
      },
    ],
    Detail: true,
  }),
};
</script>

<style></style>
