/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('products', table => {
    table.increments('product_id');
    table.string('product_name');
    table.integer('category');
    table.foreign('category').references('category.category_id');
    table.decimal('rating');
    table.text('description');
    table.decimal('price', { precision: 2 });
    table.text('picture');
    table.integer('quantity');
    table.string('nsn');
    table.integer('mftr');
    table.foreign('mftr').references('manufacturer.mftr_id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //return knex.schema.dropTableIfExists('products');
};
