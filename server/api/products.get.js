import knex from '../koneksi'; // koneksi db mysql

export default defineEventHandler(async (event) => {
  //GET All Data 
  try {
    const products = await knex('product').select('*');
    return products; // Return data products
  } catch (error) {
    console.error('Error fetching products:', error);
    // Handle errors appropriately (e.g., return a custom error response)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
});