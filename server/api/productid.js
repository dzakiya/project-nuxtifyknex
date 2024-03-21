import knex from '../database'; // Assuming your database connection is defined here

  export default defineEventHandler(async (event) => {
    try {
      const id = parseInt(event.params.id);
      const productid = await knex('product').where('product_id', id).select('*');
  
      if (productid.length === 0) {
        return { statusCode: 404, body: { error: 'Data tidak ditemukan.' } };
      }
  
      return { statusCode: 200, body: data[0] };
    } catch (error) {
      console.error(error);
      return { statusCode: 500, body: { error: 'Terjadi kesalahan pada server.' } };
    }
  });

