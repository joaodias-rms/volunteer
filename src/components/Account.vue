<template>
  <div class="">
    <v-card flat class="mx-auto">
      <v-tabs
        grow
        v-model="tabActive"
        dense
        color="#8634eb"
        slider-color="#8634eb"
      >
        <v-tab>
          Minhas experiências
        </v-tab>
        <v-tab>
          Configurar conta
        </v-tab>
          <v-tab-item>
            <Experiences />
          </v-tab-item>
          <v-tab-item>
            <ProfileSettings />
          </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
// import MyWorks from "@/components/MyWorks.vue";
import Experiences from "@/components/Experiences.vue";
import ProfileSettings from "@/components/ProfileSettings.vue";
export default {
  components:{
    // MyWorks,
    Experiences,
    ProfileSettings
  },
    data:()=>({
      tabActive: 0,
    })
};
</script>

<style></style>
