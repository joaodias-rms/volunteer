.<template>
  <div>
    <v-layout>
      <v-card tile width="100%" color="#8634eb">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="3">
            <div>
              <h4>Depoimentos</h4>
              <h1>O que dizem nossos voluntários</h1>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <v-slide-group center-active v-model="model" show-arrows>
              <v-slide-item
                v-for="n in 4"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <v-card class="ma-4" height="255" width="420" @click="toggle">
                  <h4 class="pa-4">
                    Da vez que ajudei os moradores de rua foi muito bom gente,
                    sério tentem
                  </h4>
                  <v-list-item two-line>
                    <v-list-item-avatar size="60">
                      <v-img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      >
                      </v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        Enzo Silva
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        freelancer
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style></style>
