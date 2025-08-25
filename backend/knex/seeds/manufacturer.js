/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('manufacturer').del()
  await knex('manufacturer').insert([
    { mftr_id: 1, mnfr_name: 'rowValue1' },
  ]);
};
