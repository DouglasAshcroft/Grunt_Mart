/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert([
    { category_id: 1, category_name: 'rowValue1', category_description: 'some info' },
  ]);
};
