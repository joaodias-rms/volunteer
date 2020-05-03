<template>
  <div class="home">
    <HeaderHome id="Header" class="col-sm-6"/>
    <CardsCategorie />
  </div>
</template>

<script>
// @ is an alias to /src
import CardsCategorie from "@/components/CardsCategorie.vue";
import HeaderHome from "@/components/HeaderHome.vue";

export default {
  name: "Home",
  components: {
    CardsCategorie,
    HeaderHome,
  },
};
</script>

<style >
#Header{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
