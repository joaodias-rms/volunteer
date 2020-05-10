.<template>
  <div class="col-sm-12">
    <div class="">
      <h3>Itens Salvos</h3>
    </div>
    <v-row>
      <v-layout>
        <v-row>
          <v-col sm="6" v-for="item in SavedList" :key="item.id">
            <v-card flat>
              <v-list-item
                link
                :to="{ name: 'WorkDetailSaved', params: { id: item.id } }"
                @click="SavedEvent()"
              >
                <v-list-item-avatar size="60">
                  <v-img :src="item.cplogo"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle class="text--primary">
                    {{ item.company }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <small>{{ item.city }}-{{ item.state }}</small>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="#8634eb">
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
import { Bus } from "@/plugins/Bus.js";
export default {
  name: "SavedItens",
  components: {},
  data: () => ({
    SavedList: [
      {
        id: 1,
        name: "Tirar foto com crianças africanas",
        company: "Instagram CO.",
        city: "Sinop",
        state: "MT",
        cplogo:
          "http://operador.com.br/wp-content/uploads/2020/02/instagram.png",
      },
      {
        id: 2,
        name: "Cantar te amo piranha pra moradores de rua",
        company: "Twitter CO.",
        city: "São Paulo",
        state: "SP",
        cplogo:
          "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/172px-Twitter_logo_2012.svg.png",
      },
      {
        id: 3,
        name: "Resgatar animais de rua",
        company: "APAMS",
        city: "Sinop",
        state: "MT",
        cplogo:
          "https://static.wixstatic.com/media/bec156_a6e0560b562b402c850245c15d8bc600~mv2.png/v1/fit/w_300,h_300,al_c,q_5/file.png",
      },
      {
        id: 4,
        name: "Tirar foto com crianças mexicanas",
        company: "Paleteria CO.",
        city: "Piracicaba",
        state: "SP",
        cplogo:
          "https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96",
      },
    ],
  }),
  methods: {
    SavedEvent() {
      Bus.$emit("emit-save");
    },
  },
};
</script>

<style></style>
