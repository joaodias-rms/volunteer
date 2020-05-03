<template>
  <div class="">
    <v-card flat>
      <v-tabs
        grow
        v-model="tabActive"
        dense
        color="#8634eb"
        slider-color="#8634eb"
      >
        <v-tab>
          Detalhes
        </v-tab>
        <v-tab>
          Atividades
        </v-tab>
        <v-tab>
          Galeria
        </v-tab>
        <v-tabs-items v-model="tabActive">
          <v-tab-item>
            <div class="col-sm-12">
              <v-list-item>
                <v-list-item-avatar size="80">
                  <v-img :src="WorkDetail.cplogo"> </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <b>{{ WorkDetail.name }}</b>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ WorkDetail.company }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <div class="col-sm-12">
                <div class="">
                  <span><b>Sobre</b></span>
                </div>
                <div class="">
                  <span>{{ WorkDetail.sobre }} </span>
                </div>
                <div class="mt-3 mb-2">
                  <span><b>Requisitos</b></span>
                </div>
                <div class="">
                  <v-row>
                    <div
                      class="mr-4"
                      v-for="item in WorkDetail.req"
                      :key="item"
                    >
                      <v-chip>
                        {{ item }}
                      </v-chip>
                    </div>
                  </v-row>
                </div>
                <div class="mt-5">
                  <v-row>
                    <div class="col-sm-4 mr-2">
                      <v-btn outlined large color="#8634eb"
                        ><v-icon>mdi-bookmark-outline</v-icon> Salvar</v-btn
                      >
                    </div>
                    <div class="col-sm-7">
                      <v-btn block large dark color="#8634eb"
                        >Quero Ajudar</v-btn
                      >
                    </div>
                  </v-row>
                </div>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="col-sm-12">
              <div class="ml-3">
                <span><b>Atividades</b></span>
              </div>
              <div
                class="ml-2 mb-3"
                v-for="item in WorkDetail.Activities"
                :key="item.id"
              >
                <div class=" d-flex">
                  <v-icon class="mr-3" size="10">mdi-circle</v-icon>
                  <span>
                    {{ item.description }}
                  </span>
                </div>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="col-sm-12">
              <v-row>
                <v-col
                  class="col-sm-6"
                  v-for="item in WorkDetail.Images"
                  :key="item.id"
                >
                  <v-img :src="item.img" height="130px" width="100%"></v-img>
                </v-col>
              </v-row>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { Bus } from "@/plugins/Bus.js";

export default {
  created() {
    Bus.$off("emit-click");
    Bus.$on("emit-click", () => {
      this.event();
    });
  },
  mounted() {
    this.event();
  },
  data: () => ({
    tabActive: 0,
    WorkDetail: {},
    WorkList: [
      {
        id: 1,
        name: "Tirar foto com crianças africanas",
        company: "Instagram CO.",
        pbdata: "05/05/2020",
        type: "freelancer",
        city: "Sinop",
        state: "MT",
        cplogo:
          "http://operador.com.br/wp-content/uploads/2020/02/instagram.png",
        sobre:
          "O desenvolvimento da comunidade envolve muitas atividades e, geralmente, mais voltado para voluntários que desejam realizar uma variedade de tarefas enquanto se voluntariam no Rio de Janeiro.",
        req: [
          "solteiro",
          "Baiano",
          "Não Fumante",
          "Idade +18",
          "Estudante",
          "Famílias",
          "Rins Funcionais",
        ],
        Activities: [
          {
            id: 1,
            description:
              "Ministrando aulas sobre conhecimentos básicos de informática",
          },
          {
            id: 2,
            description:
              " Ajudando a proteger uma conexão com a Internet e a configurar um laboratório de TI.",
          },
          {
            id: 3,
            description: "Ajudando em uma horta comunitária.",
          },
        ],
        Images: [
          {
            id: 1,
            img:
              "https://ilhanoticias.com.br/uploads//imagens/shares/noticias/anteriores/8542147cce31d9fa95d60cdd5a93e28a.jpg.jpg",
          },
          {
            id: 2,
            img: "https://zh.rbsdirect.com.br/imagesrc/23256511.jpg?w=700",
          },
          {
            id: 3,
            img:
              "https://abrilexame.files.wordpress.com/2018/04/siria1.jpg?quality=70&strip=info&resize=680,453",
          },
          {
            id: 4,
            img:
              "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/v1/guides/section_image/qkcqsx5nj3njaa8urccf",
          },
        ],
      },
      {
        id: 2,
        name: "Cantar te amo piranha pra moradores de rua",
        company: "Twitter CO.",
        pbdata: "18/04/2020",
        type: "Cantoria",
        city: "São Paulo",
        state: "SP",
        cplogo:
          "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/172px-Twitter_logo_2012.svg.png",
        sobre:
          "O desenvolvimento da comunidade envolve muitas atividades e, geralmente, mais voltado para voluntários que desejam realizar uma variedade de tarefas enquanto se voluntariam no Rio de Janeiro.",
        req: [
          "solteiro",
          "Baiano",
          "Não Fumante",
          "Idade +18",
          "Estudante",
          "Famílias",
          "Rins Funcionais",
        ],
        Activities: [
          {
            id: 1,
            description:
              "Ministrando aulas sobre conhecimentos básicos de informática",
          },
          {
            id: 2,
            description:
              " Ajudando a proteger uma conexão com a Internet e a configurar um laboratório de TI.",
          },
          {
            id: 3,
            description: "Ajudando em uma horta comunitária.",
          },
        ],
        Images: [
          {
            id: 1,
            img:
              "https://ilhanoticias.com.br/uploads//imagens/shares/noticias/anteriores/8542147cce31d9fa95d60cdd5a93e28a.jpg.jpg",
          },
          {
            id: 2,
            img: "https://zh.rbsdirect.com.br/imagesrc/23256511.jpg?w=700",
          },
          {
            id: 3,
            img:
              "https://abrilexame.files.wordpress.com/2018/04/siria1.jpg?quality=70&strip=info&resize=680,453",
          },
          {
            id: 4,
            img:
              "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/v1/guides/section_image/qkcqsx5nj3njaa8urccf",
          },
        ],
      },
    ],
  }),

  methods: {
    event() {
      const result = this.WorkList.find(
        ({ id }) => id === parseInt(this.$route.params.id)
      );
      this.WorkDetail = result;

      console.log(result);
    },
  },
};
</script>

<style></style>
