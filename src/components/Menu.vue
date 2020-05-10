<template>
  <div>
    <v-list>
      <v-list-item link :to="item.route" v-for="item in menu" :key="item.id">
        <v-list-item-avatar>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <b> {{ item.name }}</b>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    menu: Array,
  },
};
</script>

<style></style>
