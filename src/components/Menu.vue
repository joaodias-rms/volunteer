<template>
  <div>
    <v-list>
      <v-list-item link :to="item.route" v-for="item in menu" :key="item.id">
        <b> {{item.name}}</b>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

export default {
    props:{
        menu: Array
    }
};
</script>

<style>

</style>
