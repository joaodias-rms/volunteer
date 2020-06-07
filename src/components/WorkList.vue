<template>
  <div class="col-sm-12">
    <div class="d-flex justify-space-between">
      <div class="">
        <v-subheader>
          Recentes
        </v-subheader>
      </div>
      <div class="">
        <v-btn outlined color="#8634eb">
          Filtrar
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>
      </div>
    </div>

    <v-list-item
      link
      v-for="item in WorkList"
      :to="{ name: 'WorkDetail', params: { id: item.id } }"
      :key="item.id"
      @click="event()"
    >
      <v-list-item-avatar>
        <v-img :src="item.cplogo"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle class="text--primary">
          {{ item.company }} {{ item.type }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <small>{{ item.city }}-{{ item.state }}</small>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
        <v-btn icon color="#8634eb">
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import { Bus } from "@/plugins/Bus.js";

export default {
  data: () => ({
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
      },
      {
        id: 3,
        name: "Resgatar animais de rua",
        company: "APAMS",
        pbdata: "13/08/2020",
        type: "Voluntário",
        city: "Sinop",
        state: "MT",
        cplogo:
          "https://static.wixstatic.com/media/bec156_a6e0560b562b402c850245c15d8bc600~mv2.png/v1/fit/w_300,h_300,al_c,q_5/file.png",
      },
      {
        id: 4,
        name: "Tirar foto com crianças mexicanas",
        company: "Paleteria CO.",
        pbdata: "14/07/2020",
        type: "freelancer",
        city: "Piracicaba",
        state: "SP",
        cplogo:
          "https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96",
      },
      {
        id: 5,
        name: "Servir comida a moradores de rua",
        company: "ONG Cultivando a vida",
        pbdata: "14/12/2020",
        type: "Voluntário",
        city: "Manaus",
        state: "AM",
        cplogo:
          "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F10%2F29%2F15%2FWDL-Logo-8220_6769_041644115_1991191473.jpg",
      },
      {
        id: 6,
        name: "Distribuir cobertores",
        company: "ONG Agatha",
        pbdata: "17/11/2020",
        type: "Voluntário",
        city: "Espigão d'oeste",
        state: "RO",
        cplogo:
          "https://storage.googleapis.com/sealpolen-files.polinizador.com.br/blob/ongs/ong-ongagatha-logo.png",
      },
      {
        id: 7,
        name: "Pintar casas e ruas na favela",
        company: "ONG Cores pra vida",
        pbdata: "17/10/2020",
        type: "freelancer",
        city: "Campo Grande",
        state: "MS",
        cplogo:
          "https://3.bp.blogspot.com/_dFpUArguu1M/S2AawV2Pw2I/AAAAAAAAABg/HczBbGrEE-U/s280/ONG+-+CPV+Logo.jpg",
      },
      {
        id: 8,
        name: "Tarde de entretenimento para PCD",
        company: "Lar da Redenção",
        pbdata: "18/03/2020",
        type: "freelancer",
        city: "Sinop",
        state: "MT",
        cplogo:
          "https://djhandesign.files.wordpress.com/2016/04/logo-final-ong-lar-da-redenc3a7c3a3o-v.jpg",
      },
      {
        id: 9,
        name: "Tirar foto com crianças neozelandezas",
        company: "Instagram CO.",
        pbdata: "29/12/2020",
        type: "freelancer",
        city: "Sinop",
        state: "MT",
        cplogo:
          "http://operador.com.br/wp-content/uploads/2020/02/instagram.png",
      },
    ],
  }),
  methods: {
    event() {
      Bus.$emit("emit-click");
    },
  },
};
</script>

<style></style>
