/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('role').del()
  await knex('role').insert([
    { role_id: 1, role_name: 'infantry', role_description: 'value' },
    { role_id: 2, role_name: 'PSD', role_description: 'Protective Security Detail' },
    { role_id: 3, role_name: 'Machine Gunner', role_description: 'value' },
    { role_id: 4, role_name: 'grenadier', role_description: 'value' },
    { role_id: 5, role_name: 'team leader', role_description: 'value' },
  ]);
};
