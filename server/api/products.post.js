 //import knex from '../database'; // koneksi db mysql

// export default defineEventHandler(async (event) => {
//   const body = await useBody(event);

//   // Validasi data
//   if (!body.product_name || !body.product_price) {
//     return sendError(event, 'Nama produk dan harga harus diisi.');
//   }

//   // Buat object data untuk INSERT
//   const data = {
//     product_name: body.product_name,
//     product_price: body.product_price,
//   };

//   // Query INSERT dengan Knex
//   try {
//     const [product] = await knex('product').insert(data, '*');
//     return sendSuccess(event, product, 'Produk berhasil ditambahkan.');
//   } catch (error) {
//     return sendError(event, error.message);
//   }
// });

export default defineEventHandler((event) => {
  // handle POST requests for the `api/foo` endpoint
  return 'post api'
})