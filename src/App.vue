<template>
  <v-app id="app">
    <router-view>

    </router-view>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app{
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
