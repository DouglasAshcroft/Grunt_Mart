/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('orders', table => {
    table.increments('order_id');
    table.integer('user');
    table.foreign('user').references('users.user_id');
    table.decimal('total', { precision: 2 });
    table.date('order_date');
    table.integer('status');
    table.foreign('status').references('status.status_id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //return knex.schema.dropTableIfExists('orders');
};
