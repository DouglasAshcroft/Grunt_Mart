/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    { order_id: 1, user: 'integer of user ID', total: 'decimal to 2 places', order_date: 'date format', status: 'integer of status id' },
  ]);
};
