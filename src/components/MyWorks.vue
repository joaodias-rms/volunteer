<template>
  <div class="">
    <v-list-item
      v-for="item in ProfileList"
      :key="item.id"
      link
      :to="{ name: 'MyWorks', params: { id: item.id } }"
      @click="profileEvent()"
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
    </v-list-item>
  </div>
</template>

<script>
import { Bus } from "@/plugins/Bus.js";

export default {
  data: () => ({
    ProfileList: [
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
    ],
  }),
  methods: {
    profileEvent() {
      Bus.$emit("emitProfile");
    },
  },
};
</script>

<style></style>
