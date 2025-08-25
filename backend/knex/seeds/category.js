/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    { category_id: 1, category_name: 'holsters', category_description: 'some info' },
    { category_id: 2, category_name: 'plate carriers', category_description: 'some info' },
    { category_id: 3, category_name: 'belts', category_description: 'some info' },
    { category_id: 4, category_name: 'eye protection', category_description: 'some info' },
    { category_id: 5, category_name: 'headgear', category_description: 'some info' },
    { category_id: 6, category_name: 'pouches', category_description: 'some info' },
    { category_id: 7, category_name: 'footwear', category_description: 'some info' },
    { category_id: 8, category_name: 'accessories', category_description: 'some info' },
  ]);
};
