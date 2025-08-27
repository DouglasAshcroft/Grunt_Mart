/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('role').del()
  await knex('role').insert([
    { role_name: 'infantry', role_description: 'value' },
    { role_name: 'PSD', role_description: 'Protective Security Detail' },
    { role_name: 'Machine Gunner', role_description: 'value' },
    { role_name: 'grenadier', role_description: 'value' },
    { role_name: 'team leader', role_description: 'value' },
  ]);
};
