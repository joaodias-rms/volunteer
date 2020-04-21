<template>
  <div class="home">
    <HeaderHome />
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
