<template>
  <div class="col-sm-12">
    <v-list-item
      link
      v-for="item in ExperienceList"
      :to="{ name: 'MyExperiences', params: { id: item.id } }"
      :key="item.id"
      @click="event()"
    >
      <v-list-item-avatar>
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
    </v-list-item>
  </div>
</template>

<script>
import { Bus } from "@/plugins/Bus.js";
export default {
  data: () => ({
    tabActive: 0,
    ExperienceList: [
      {
        id: 1,
        name: "Minha experiência na Africa",
        company: "Instagram CO.",
        pbdata: "05/05/2020",
        city: "Sinop",
        state: "MT",
        cplogo:
          "http://operador.com.br/wp-content/uploads/2020/02/instagram.png",
      },
      {
        id: 2,
        name: "Minha experiência na rua",
        company: "Twitter CO.",
        pbdata: "05/05/2020",
        city: "Sinop",
        state: "MT",
        cplogo:
          "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/172px-Twitter_logo_2012.svg.png",
      },
      {
        id: 3,
        name: "Ao resgate dos animais",
        company: "APAMS",
        pbdata: "18/04/2020",
        type: "Animais",
        city: "Santa Fé",
        state: "PR",
        cplogo:
          "https://static.wixstatic.com/media/bec156_a6e0560b562b402c850245c15d8bc600~mv2.png/v1/fit/w_300,h_300,al_c,q_5/file.png",
      },
      {
        id: 4,
        name: "Minha experiência no Mexico",
        company: "Paleteria CO.",
        pbdata: "05/05/2020",
        city: "Sinop",
        state: "MT",
        cplogo:
          "https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96",
      },
    ],
  }),
  methods:{
    eventExperience() {
      
      Bus.$emit("emit-exp");
    }
  },
};
</script>

<style></style>
