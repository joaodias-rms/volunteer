<template>
  <v-app id="app">
    <ToolBar />
    <v-main>
        <router-view> </router-view>
    </v-main>
    <v-footer width="100%" dark padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    ToolBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: CircularStd !important;
  background-color: #f7f8fa;
}
.v-btn {
  text-transform: none !important;
}
::-webkit-scrollbar {
  display: none;
}
</style>
