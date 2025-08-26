/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('category', table => {
    table.increments('category_id');
    table.string('category_name');
    table.string('category_description');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //return knex.schema.dropTableIfExists('category');
};
