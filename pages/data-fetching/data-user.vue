<template>
    <v-card title="Data User SIM RS" flat>
        <template v-slot:text>
            <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                hide-details single-line></v-text-field>
        </template>
    </v-card>
    <br>
    <h3>data user sim rs</h3>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">NIP</th>
                <th class="text-left">Nama Pegawai</th>
                <th class="text-left">NIP</th>
                <th class="text-left">Departemen</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
                <th class="text-left">Roles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in dataUser" :key="item.nip">
                <td>{{ item.nip }}</td>
                <td>{{ item.pwd }}</td>
                <td>{{ item.ses_reg }}</td>
                <td>{{ item.kdperawat }}</td>
                <td>{{ item.kddokter }}</td>
                <td>{{ item.nama_pegawai }}</td>
                <td>{{ item.departemen }}</td>
                <td>{{ item.roles }}</td>
                <td>{{ item.kdunit }}</td>
                <td>{{ item.departemen }}</td>
                <td>{{ item.st_dokter_rajal_eksekutif }}</td>
                <td>{{ item.st_dokter_rajal_reguler }}</td>
                <td>{{ item.st_dokter_rajal_emergency }}</td>
                <td>{{ item.nipb }}</td>
                <td>{{ item.aktif }}</td>
            </tr>
        </tbody>
    </v-table>

</template>

<script>
definePageMeta({
    layout: 'setting'
})

const search = ref('')
const headers = [
    {
align: 'start',
key: 'nip',
sortable: false,
title: 'NIP',
    },
{key: 'nama_pegawai', title:'Nama Pegawai'},
{key: 'departemen', title: 'Departemen'},
{key: 'roles', title: 'Roles'},
]

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