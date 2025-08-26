/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('status').del()
  await knex('status').insert([
    { status_id: 1, status_name: 'Ordered' },
    { status_id: 2, status_name: 'Fullfilled' },
    { status_id: 3, status_name: 'Delivered' }
  ]);
};
