<template>
  <div class="mx-auto">
    <v-img
      dark
      width="100%"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      max-height="300px"
      src="../assets/HomeImg.jpg"
    >
      <div class="fill-height bottom-gradient">
        <div class="mx-auto mt-5">
          <div class="text-center">
            <Icon Width="100%" Height="30px" colorIcon="#FFF" />
          </div>
          <h3 class="text-center mx-auto col-sm-6">
            Explore mais de 1.600+ projetos no exterior e encontre seu melhor
            programa de voluntariado
          </h3>
        </div>
        <div class="col-sm-4 mx-auto">
          <v-btn to="/HowWorks" x-large block dark color="#8634eb">Como funciona?</v-btn>
        </div>
      </div>
    </v-img>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "HeaderHome",
  components: {
    Icon,
  },
};
</script>

<style></style>
