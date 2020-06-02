<template>
  <div class="">
    <v-card>
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
            <div class="col-sm-12" v-for="item in ExperienceList" :key="item.id">
              <div class="">
                <v-icon class="mr-3" size="10">mdi-circle</v-icon>
                <span>{{ item.description }} </span>
              </div>
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
  data: () => ({
    tabActive: 0,
    ExperienceList: [
      {
        id: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crassed lacus sed augue volutpat imperdiet quis et dolor. Etiam orcis felis, accumsan ac erat nec, maximus commodo tortor. Fusce neclobortis orci, non ornare eros. Nullam sit amet felis et nunc iaculis consectetur at at orci. Aliquam cursus sagittis lacinia.t placerat id risus ac rutrum. Proin sollicitudin convallisnim, non malesuada elit fermentum nec. Integer aliquet dapibusrna sed lacinia. Quisque aliquam, erat at tincidunt laoreet,rci enim accumsan diam, at consequat risus ante et sem. Lorempsum dolor sit amet, consectetur adipiscing elit. Aeneanuscipit gravida nisl eu aliquam. Nullam id velit a lectusermentum lacinia. Duis pulvinar, mauris quis imperdietccumsan, justo ligula sodales nisi, vel tempor enim nibh eudio. Nunc vitae nulla mauris. Pellentesque in diam nisl. Nullaiam velit, tempus rutrum vehicula at, finibus non neque.",

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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crassed lacus sed augue volutpat imperdiet quis et dolor. Etiam orcis felis, accumsan ac erat nec, maximus commodo tortor. Fusce neclobortis orci, non ornare eros. Nullam sit amet felis et nunc iaculis consectetur at at orci. Aliquam cursus sagittis lacinia.t placerat id.",

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
      const result = this.ExperienceList.find(
        ({ id }) => id === parseInt(this.$route.params.id)
      );
      this.WorkDetail = result;

      console.log(result);
    },
  },
};
</script>

<style></style>
