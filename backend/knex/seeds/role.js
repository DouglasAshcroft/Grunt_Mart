/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('role').del()
  await knex('role').insert([
    { role_id: 1, role_name: 'rowValue1', role_description: 'value' },
  ]);
};
