<template>
  <div class="col-sm-12">
    <div class="d-flex justify-space-between">
      <div class="">
        <v-subheader>
          Recentes
        </v-subheader>
      </div>
      <div class="">
        <v-btn flat outlined color="#8634eb">
          Filtrar
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>
      </div>
    </div>
    <div v-for="item in WorkList" :key="item.id">
      <div class="d-flex align-center ">
        <div class="col-sm-8 d-flex">
          <div class="mr-2">
            <v-img
              width="60px"
              height="60px"
              :src="item.cplogo"
            >
            </v-img>
          </div>
          <div>
            <span>
              <b>{{item.name}}</b>
            </span>
            <br />
            <small>
              {{item.company}}
            </small>
          </div>
        </div>
        <div class="col-sm-3">
          <span><b>{{item.type}}</b></span>
          <br />
          <small>{{item.city}}-{{item.state}}</small>
        </div>
        <div class="">
          <v-btn flat icon color="#8634eb">
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/172px-Twitter_logo_2012.svg.png"
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
          "data:image/png;base64,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"
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
          "https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96"
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
          "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2011%2F10%2F29%2F15%2FWDL-Logo-8220_6769_041644115_1991191473.jpg"
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
          "https://storage.googleapis.com/sealpolen-files.polinizador.com.br/blob/ongs/ong-ongagatha-logo.png"
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
          "https://3.bp.blogspot.com/_dFpUArguu1M/S2AawV2Pw2I/AAAAAAAAABg/HczBbGrEE-U/s280/ONG+-+CPV+Logo.jpg"
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
          "https://djhandesign.files.wordpress.com/2016/04/logo-final-ong-lar-da-redenc3a7c3a3o-v.jpg"
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
          "http://operador.com.br/wp-content/uploads/2020/02/instagram.png"
      },
    ],
  }),
};
</script>

<style></style>
