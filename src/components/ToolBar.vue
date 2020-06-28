.<template>
  <v-app-bar dense right flat max-height="45px">
    <v-btn to="/" color="transparent" width="120" text class="justify-center" depressed small>
      <Icon Width="120" Height="25px" colorIcon="#8634eb"
    /></v-btn>
    <v-spacer></v-spacer>
    <v-btn outlined small color="#8634eb" to="/Login"> Login</v-btn>
  </v-app-bar>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style></style>
