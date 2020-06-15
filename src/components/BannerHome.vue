.<template>
  <v-layout class="col-sm-10 mt-5 mx-auto">
    <v-row justify="space-between">
      <v-col cols="auto" sm="4">
        <v-card class=" text-center" color="transparent" flat>
          <v-img
            class="mx-auto"
            height="160px"
            width="160px"
            src="https://voluntarios.com.br/static/images/home/busca-peq.png"
          >
          </v-img>
          <span>
            <p class="mt-2">Busca de entidades</p>
            <h6 class="text-center">
              Procure por entidades que podem precisar de voluntários. Utilize
              vários critérios na busca, como cidade, bairro e área de atuação
            </h6>
          </span>
        </v-card>
      </v-col>
      <v-col cols="auto" sm="4">
        <v-card flat color="transparent" class=" text-center">
          <v-img
            class="mx-auto"
            height="160px"
            width="160px"
            src="https://voluntarios.com.br/static/images/home/gmaps-brasil-peq.png"
          >
          </v-img>
          <span>
            <p class="mt-2">Mapa de entidades</p>
            <h6 class="text-center">
              Veja onde se localizam as entidades cadastradas no sistema. Digite
              um endereço para encontrar aquelas que estão mais próximas de
              você.
            </h6>
          </span>
        </v-card>
      </v-col>
      <v-col cols="auto" sm="4">
        <v-card color="transparent" class=" text-center" flat>
          <v-img
            class="mx-auto"
            height="160px"
            width="160px"
            src="https://voluntarios.com.br/static/images/home/cadastro-peq.png"
          >
          </v-img>
          <span>
            <p class="mt-2">Cadastro de entidades</p>
            <h6 class="text-center">
              Gestor, cadastre sua entidade aqui, aumentando a visibilidade da
              instituição para pessoas interessadas em ajudar.
            </h6>
          </span>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {};
</script>

<style></style>
