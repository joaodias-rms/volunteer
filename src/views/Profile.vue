<template>
  <div class="col-sm-12">
    <v-row>
      <div class="col-sm-2">
        <Menu :menu="menu" />
      </div>
      <div class="col-sm-6">
        <TopProfile />

        <Account class="mt-2" />
      </div>
      <div class="col-sm-4">
        <router-view></router-view>
      </div>
    </v-row>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import TopProfile from "@/components/TopProfile.vue";
import Account from "@/components/Account.vue";

export default {
  name: "Profile",
  components: {
    Menu,
    TopProfile,
    Account,
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
