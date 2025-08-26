/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    { order_id: 1, user: 1, total: 150.00, order_date: '2025-08-24', status: 1 },
  ]);
};
