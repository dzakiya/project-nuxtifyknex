//import knex from '../database'; // koneksi db mysql

export default defineEventHandler(async (event) => {
  return 'Dynamic Route'

  //di postman muncul { 
  //"id": "1234"
//   try {
 // const id = getRouterParam(event, 'id')
//     const data = await knex('m_login').where('nip', id).select('*');

//     if (data.length === 0) {
//       return { statusCode: 404, body: { error: 'Data tidak ditemukan.' } };
//     }

//     return { statusCode: 200, body: data[0] };
//   } catch (error) {
//     console.error(error);
//     return { statusCode: 500, body: { error: 'Terjadi kesalahan pada server.' } };
//   }
 });

