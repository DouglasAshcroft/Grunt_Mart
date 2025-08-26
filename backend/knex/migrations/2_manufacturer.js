/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('manufacturer', table => {
    table.increments('mftr_id');
    table.string('mftr_name');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //return knex.schema.dropTableIfExists('manufacturer');
};
