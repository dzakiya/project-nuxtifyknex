<template>
  <h3>Data dari API eksternal -> http://localhost:7000/buku</h3>
    <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Judul
        </th>
        <th class="text-left">
          Sinopsis
        </th>
        <th class="text-left">
          Penulis
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dataBuku"
        :key="item.id"
      >
        <td>{{ item.judul }}</td>
        <td>{{ item.sinopsis }}</td>
        <td>{{ item.penulis }}</td>
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
        buku: '',
        dataBuku: [],

      }),
      methods: {
        async getDataBuku() {
          await fetch(
            `http://localhost:7000/buku`
          )
            .then(response => response.json())
            .then(buku => {
              this.dataBuku = buku
            }) 
        },
      },
      created() {
        this.getDataBuku()
      },
    }
  </script>
  