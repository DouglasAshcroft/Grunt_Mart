/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { user_name: 'Snuffy', address: 'On Base', email: 'snuffy.mil', payment_info: 'STAR Card' },
  ]);
};
