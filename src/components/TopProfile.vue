<template>
  <div class="">
    <v-card flat class="d-flex">
      <v-img
        height="240px"
        width="250px"
        src="https://avatars0.githubusercontent.com/u/61212858?s=460&u=eb895cb1e2b8f7c63aeef856c8ef6f34ec84a960&v=4"
      >
      </v-img>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <p>João Victor Dias Ramos</p>
          </v-list-item-title>
          <v-list-item-content>
            <p>Apaixonado pela vida e pelos animais</p>

            <p>20 anos</p>

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
  }
</script>

<style></style>
