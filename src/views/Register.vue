.<template>
  <div>
    <div class="col-sm-12">
      <v-card class="col-sm-6 mx-auto" flat outlined max-width="400px">
        <div class="mb-3 col-sm-12">
          <h2>Olá! Cadastre sua ONG para disponibilizar seus serviços</h2>
        </div>

        <div class="">
          <div class="col-sm-12">
            <div class="">
              <v-btn depressed block medium color="primary" class="mb-2">
                <v-icon class="mr-1">mdi-facebook</v-icon>
                Entrar com o Facebook</v-btn
              >
            </div>
            <div class="mb-2">
              <v-btn block medium outlined color="error" class="mb-4">
                <v-icon class="mr-1">mdi-google</v-icon>
                Entrar com o Google</v-btn
              >
            </div>

            <div class="">
              <v-text-field
                dense
                label="Email"
                color="#8634eb"
                outlined
                name="Email"
              ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                dense
                color="#8634eb"
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                outlined
                name="Senha"
                label="Senha"
              ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                dense
                label="ONG"
                color="#8634eb"
                outlined
                name="ONG"
              ></v-text-field>
            </div>
            <div class="">
              <v-text-field
                dense
                label="Telefone"
                color="#8634eb"
                outlined
                name="Telefone"
              ></v-text-field>
              </div>
            <div class="mb-2">
              <v-btn block dense medium color="#8634eb">Cadastrar</v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
