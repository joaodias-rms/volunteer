<template>
  <div id="HeaderIntro" class="col-sm-6 mx-auto">
    <div class="col-sm-10 mx-auto">
      <div class="text-center">
        <Icon />
      </div>
      <h3 class="text-center">
        Explore mais de 1.600+ projetos no exterior e encontre seu melhor
        programa de voluntariado
      </h3>
    </div>
    <div class="col-sm-6 mx-auto">
      <v-btn x-large block dark color="#8634eb">Como funciona?</v-btn>
    </div>
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

<style>
#HeaderIntro {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
