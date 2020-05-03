<template>
  <div>
    <div class="col-sm-12 ">
      <h3>
        <b>Explore</b>
      </h3>
    </div>
    <div class="d-flex justify-space-between">
      <div class="col-sm-4 mr-2">
        <v-select
          dense
          :items="states"
          menu-props="auto"
          :label="states[10]"
          hide-details
          prepend-inner-icon="mdi-map"
          single-line
          color="#8634eb"
          outlined
        ></v-select>
      </div>
      <div class="col-sm-8">
        <v-text-field
          dense
          outlined
          color="#8634eb"
          label="Search by categorie"
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    states: [
      "Acre",
      "Alagoas",
      "Amapá",
      "Amazonas",
      "Bahia",
      "Ceará",
      "Distrito Federal",
      "Espírito Santo",
      "Goiás",
      "Maranhão",
      "Mato Grosso",
      "Mato Grosso do Sul",
      "Minas Gerais",
      "Pará",
      "Paraíba",
      "Paraná",
      "Pernambuco",
      "Piauí",
      "Rio de Janeiro",
      "Rio Grande do Norte",
      "Rio Grande do Sul",
      "Rondônia",
      "Roraima",
      "Santa Catarina",
      "São Paulo",
      "Sergipe",
      "Tocantins",
    ],
  }),
};
</script>

<style></style>
