<template>
  <div class="home">
    <HeaderHome />
    <CardsCategorie />
    <Comments />
    <BannerHome />
    <RecentWorks />
  </div>
</template>

<script>
// @ is an alias to /src
import CardsCategorie from "@/components/CardsCategorie.vue";
import HeaderHome from "@/components/HeaderHome.vue";
import BannerHome from "@/components/BannerHome.vue";
import Comments from "@/components/Comments.vue";
import RecentWorks from "@/components/RecentWorks.vue";

export default {
  name: "Home",
  components: {
    CardsCategorie,
    HeaderHome,
    BannerHome,
    Comments,
    RecentWorks,
  },
};
</script>

<style></style>
