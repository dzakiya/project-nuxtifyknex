<template>
    <h3>data user sim rs</h3>
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
            v-for="item in dataUser"
            :key="item.nip"
          >
            <td>{{ item.nama_pegawai }}</td>
            <td>{{ item.departemen }}</td>
            <td>{{ item.roles }}</td>
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
            userSimRS: '',
            dataUser: [],
    
          }),
          methods: {
            async getDataUser() {
              await fetch(
                `/api/user`
              )
                .then(response => response.json())
                .then(userSimRS => {
                  this.dataUser = userSimRS
                }) 
            },
          },
          created() {
            this.getDataUser()
          },
        }
      </script>
      