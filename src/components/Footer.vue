.<template>
  <v-card tile class="text-center" color="#8634eb" flat width="100%">
    <v-card-text>
      <Icon Width="100%" Height="30px" colorIcon="#FFF" />
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text> </v-card-text>
    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>by Jão</strong>
    </v-card-text>
  </v-card>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style></style>
