<template background-color="#FFFFF">
  <div light class="col-sm-12">
    <header>
      <v-toolbar flat>
        <v-btn outlined="" color="success">Voltar</v-btn>
      </v-toolbar>
    </header>

    <div class="col-sm-12">
      <v-card class="col-sm-6 mx-auto" flat outlined max-width="400px">
        <div class="mb-5 col-sm-12">
          <h2>Olá! Para continuar, faça o login ou cadastre-se</h2>
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
            <div class="subtitle text-center mt-3 mb-3">
              <span>Entrar com um email</span>
            </div>

            <div class="">
              <v-input type="email">
                <v-text-field
                  dense
                  label="Email"
                  color="#8634eb"
                  outlined
                  name="Email"
                ></v-text-field>
              </v-input>
            </div>
            <div class="">
              <v-input>
                <v-text-field
                  dense
                  color="#8634eb"
                  v-model="password"
                  :type="show1 ? 'text' : 'password'"
                  outlined
                  name="Senha"
                  label="Senha"
                ></v-text-field>
              </v-input>
            </div>
            <div class="mb-2">
              <v-btn depressed block medium color="#8634eb">Entrar</v-btn>
            </div>
            <div class="mb-2">
              <v-btn block outlined medium color="#8634eb">Cadastre-se</v-btn>
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
