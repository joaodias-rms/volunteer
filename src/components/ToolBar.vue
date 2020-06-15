.<template>
  <v-app-bar dense right flat>
      <Icon Width="40%" Height="25px" colorIcon="#8634eb"/>
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
