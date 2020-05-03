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
                  <v-img
                    src="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F10%2F29%2F15%2FWDL-Logo-8220_6769_041644115_1991191473.jpg"
                  >
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <b>Tirar fotos de crianças africanas</b>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Instagram CO.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <div class="col-sm-12">
                <div class="">
                  <span><b>Sobre</b></span>
                </div>
                <div class="">
                  <span
                    >O desenvolvimento da comunidade envolve muitas atividades
                    e, geralmente, mais voltado para voluntários que desejam
                    realizar uma variedade de tarefas enquanto se voluntariam no
                    Rio de Janeiro.</span
                  >
                </div>
                <div class="mt-3 mb-2">
                  <span><b>Requisitos</b></span>
                </div>
                <div class="">
                  <v-row>
                    <div class="mr-4">
                      <v-chip>
                        Solteiro
                      </v-chip>
                    </div>
                    <div class="mr-4">
                      <v-chip>
                        Baiano
                      </v-chip>
                    </div>
                    <div class="mr-4">
                      <v-chip>
                        Não Fumante
                      </v-chip>
                    </div>
                    <div class="mr-4">
                      <v-chip>
                        Idade +18
                      </v-chip>
                    </div>
                    <div class="mr-4 mt-3">
                      <v-chip>
                        Estudantes
                      </v-chip>
                    </div>
                    <div class="mr-4 mt-3">
                      <v-chip>
                        Famílias
                      </v-chip>
                    </div>
                    <div class="mr-4 mt-3">
                      <v-chip>
                        Rins funcionais
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
              <div class="ml-2 mb-3" v-for="item in Activities" :key="item.id">
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
            <div class="col-sm-12" >
              <v-row>
                <v-col class="col-sm-6" v-for="item in Images" :key="item.id">
                  <v-img
                    :src="item.img"
                    height="130px"
                    width="100%"
                  ></v-img>
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
export default {
  data: () => ({
    tabActive: 0,
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
    Images:[
      {
        id: 1,
        img: "https://ilhanoticias.com.br/uploads//imagens/shares/noticias/anteriores/8542147cce31d9fa95d60cdd5a93e28a.jpg.jpg"
      },
      {
        id:2,
        img: "https://zh.rbsdirect.com.br/imagesrc/23256511.jpg?w=700"
      },
      {
        id:3,
        img: "https://abrilexame.files.wordpress.com/2018/04/siria1.jpg?quality=70&strip=info&resize=680,453"
      },
      {
        id: 4,
        img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/v1/guides/section_image/qkcqsx5nj3njaa8urccf"
      }
    ]
  }),
  props: {},
};
</script>

<style></style>
