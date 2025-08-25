/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      product_id: 1, product_name: 'string',
      category: 'integer of category id', rating: 'decimal', description: 'string',
      price: 'decimal to 2 places', picture: 'string for link', quantity: 'integer',
      nsn: 'integer', mftr: 'integer of manufacturer id'
    },

  ]);
};
