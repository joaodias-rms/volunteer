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
          Meu Relato
        </v-tab>
        <v-tab>
          Galeria
        </v-tab>
        <v-tabs-items v-model="tabActive">
          <v-tab-item>
            <div>
              <div class="">
                <v-icon class="mr-3" size="10">mdi-circle</v-icon>
                <span>{{ ExperienceDetail.description }} </span>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="">
              <v-row>
                <v-col
                  class="col-sm-6"
                  v-for="item in ExperienceDetail.ExpImages"
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
    Bus.$off("emit-exp");
    Bus.$on("emit-exp", () => {
      this.event();
    });
  },
  mounted() {
    this.event();
  },
  data: () => ({
    tabActive: 0,
    ExperienceDetail: {},
    ExperienceList: [
      {
        id: 1,
        description: "Teste normalzinho só pra ver como está saindo",
        ExpImages: [
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
            img: "https://conceitos.com/wp-content/uploads/2014/07/ONG.jpg",
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
        description: "Teste do id 2 isso não deve aparecer em outro id.",
        ExpImages: [
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
            img: "https://conceitos.com/wp-content/uploads/2014/07/ONG.jpg",
          },
          {
            id: 4,
            img:
              "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/v1/guides/section_image/qkcqsx5nj3njaa8urccf",
          },
        ],
      },
      {
        id: 3,
        description: "Mais um tester pra ver se está tudo correto, por enquanto ta tudo tranquilo",
        ExpImages: [
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
            img: "https://conceitos.com/wp-content/uploads/2014/07/ONG.jpg",
          },
          {
            id: 4,
            img:
              "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/v1/guides/section_image/qkcqsx5nj3njaa8urccf",
          },
        ],
      },
      {
        id: 4,
        description: "Agora sério, último teste sem vacilo",
        ExpImages: [
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
            img: "https://conceitos.com/wp-content/uploads/2014/07/ONG.jpg",
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
      const result = this.ExperienceList.find(
        ({ id }) => id === parseInt(this.$route.params.id)
      );
      this.ExperienceDetail = result;

      console.log(result);
    },
  },
};
</script>

<style></style>
