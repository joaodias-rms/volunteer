<template>
  <div class="home">
    <HeaderHome/>
    <CardsCategorie />
    <BannerHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardsCategorie from "@/components/CardsCategorie.vue";
import HeaderHome from "@/components/HeaderHome.vue";
import BannerHome from "@/components/BannerHome.vue";

export default {
  name: "Home",
  components: {
    CardsCategorie,
    HeaderHome,
    BannerHome
  },
};
</script>

<style >

</style>
