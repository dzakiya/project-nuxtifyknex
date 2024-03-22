<template>
    <v-card title="Data User SIM RS" flat>
        <template v-slot:text>
            <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                hide-details single-line></v-text-field>
        </template>
      <v-data-table
        :headers="headers"
        :search="search"
        loading="isLoading" 
      >
        <tr v-for="item in dataUserRS" :key="item.nip">
          <td>{{ item.nip}}</td>
          <td>{{ item.nama_pegawai}}</td>
          <td>{{ item.departemen }}</td>
          <td>{{ item.roles }}</td>
        </tr>
      </v-data-table>
 </v-card>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const search = ref('');
  const dataUserRS = ref([]);
  const isLoading = ref(false);
  const headers = [
  {
align: 'start',
key: 'nip',
sortable: false,
title: 'NIP',
    },
{key: 'nama_pegawai', title:'Nama Pegawai', value: 'nama_pegawai'},
{key: 'departemen', title: 'Departemen', value: 'departemen'},
{key: 'roles', title: 'Roles', value: 'roles'},
  ];
  
  async function fetchData() {
    isLoading.value = true;
    try {
      const response = await fetch('/api/user'); // Use the API route
      dataUserRS.value = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors for user feedback (e.g., display error message)
    } finally {
      isLoading.value = false;
    }
  }
  
  fetchData(); // Fetch data on component mount
  
  </script>