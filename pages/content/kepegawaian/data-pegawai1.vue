<template>
  <v-card class="mx-auto">
    <v-card-title>DATA USER SIMRS</v-card-title>

    <v-data-table :headers="headers" :items="dataUser" :paginations="50">
      <template v-slot:[`item.actions`]> </template>
    </v-data-table>
  </v-card>
</template>
<script>
definePageMeta({
  layout: "default",
});

export default {
  data: () => ({
    itemsPerPage: 7,
    userSimRS: "",
    dataUser: [],
  }),
  methods: {
    async getDataUser() {
      await fetch(`/api/user`)
        .then((response) => response.json())
        .then((userSimRS) => {
          this.dataUser = userSimRS;
        });
    },
  },
  created() {
    this.getDataUser();
  },
};
</script>