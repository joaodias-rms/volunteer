.<template>
  <div class="">
    <v-card flat class="d-flex">
      <v-img
        height="240px"
        width="250px"
        src="https://vidasrecicladas.org/wp-content/uploads/2017/01/Logo_ONG_alta.png"
      >
      </v-img>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <p>ONG Vidas Recicladas</p>
          </v-list-item-title>
          <v-list-item-content>
            <p>Ajudando a natureza reciclando e reusando</p>

            <p>Sinop - MT</p>
            <div class="mt-3">
              <v-rating
                v-model="rating"
                background-color="purple lighten-3"
                color="#8634eb"
              >
              </v-rating>
            </div>
          </v-list-item-content>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    rating: 4,
  }),
};
</script>

<style></style>
