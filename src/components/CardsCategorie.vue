<template>
  <v-app id="cardcategorie">
    <div class="col-sm-12">
      <div class="text-center mt-5">
        <h3 class="text-title">
          Tópicos de tendências & destinos de valor para 2020
        </h3>
      </div>
      <v-layout class="col-sm-10 mt-5 mx-auto">
       <v-row class="mx-auto ml-3">
         <v-col sm="2" v-for="item in Categories" :key="item.id">
          <v-card to="/VolunteerWork" flat>
          <v-card flat>
            <v-img
              height="130px"
              width="130px"
              :src="item.img"
            />
          </v-card>
          <div class="mt-2">
            <span class="card-subtitle">
              <b>{{item.name}}</b>
            </span>
          </div>
        </v-card>
       </v-col>
       </v-row>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "CardsCategorie",
    data: () => ({
    Categories: [
      {
        id: 1,
        img: "https://www.intercultural.com.br/wp-content/uploads/2019/10/VOLUNTARIADO_animal3-1-1.png",
        name: "Animais"
      },
      {
        id: 2,
        img: "https://static.quizur.com/i/b/57e19cea8e9892.9129760457e19cea5219f7.11299281.jpg",
        name: "Florestas"
      },
      {
        id: 3,
        img: "https://canaldoensino.com.br/blog/wp-content/uploads/2018/12/tipo-de-educacao.jpg",
        name: "Educação"
      },
      {
        id: 4,
        img: "https://miro.medium.com/max/1400/1*6uaWbr4a1TERjdaY6FKb6g.png",
        name: "Covid-19"
      },
      {
        id: 5,
        img: "https://www.folhadelondrina.com.br/img/inline/2960000/Esporte-para-criancas-deve-ser-motivador-divertido0296655900201910071516-sm.jpg",
        name: "Esportes"
      },
      {
        id: 6,
        img: "https://static.escolakids.uol.com.br/conteudo_legenda/96a170c9de5833e7e9d9e7b7532f33bd.jpg",
        name: "Arte&Cultura"
      }
    ]
  }),
};

</script>

<style>
#cardcategorie {
  font-family: CircularStd !important;
}
.text-title,
.card-subtitle {
  color: #8634eb;
}
</style>
