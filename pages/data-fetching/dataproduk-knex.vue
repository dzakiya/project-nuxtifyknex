<template>
<h3>Data dari http://localhost:3001/api/products di folder server/api/products.js</h3>
    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          ID Produk
        </th>
        <th class="text-left">
          Nama Produk
        </th>
        <th class="text-left">
          Harga
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dataProdukKnex"
        :key="item.product_name"
      >
        <td>{{ item.product_id }}</td>
        <td>{{ item.product_name }}</td>
        <td>{{ item.product_price }}</td>
      </tr>
    </tbody>
  </v-table>
   
  </template>
  
  <script>
definePageMeta({
    layout :'setting'
})


    export default {
      data: () => ({
        produkKnex: '',
        dataProdukKnex: [],

      }),
      methods: {
        async getDataKnex() {
          await fetch(
            `/api/products`
          )
            .then(response => response.json())
            .then(products => {
              this.dataProdukKnex = products
            }) 
        },
      },
      created() {
        this.getDataKnex()
      },
    }
  </script>
  