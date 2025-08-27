/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("category").del();
  await knex("category").insert([
    {
      category_name: "holsters",
      category_description: "some info",
    },
    {
      category_name: "plate carriers",
      category_description: "some info",
    },
    {
      category_name: "belts",
      category_description: "some info",
    },
    {
      category_name: "eye protection",
      category_description: "some info",
    },
    {
      category_name: "headgear",
      category_description: "some info",
    },
    {
      category_name: "pouches",
      category_description: "some info",
    },
    {
      category_name: "footwear",
      category_description: "some info",
    },
    {
      category_name: "accessories",
      category_description: "some info",
    },
    {
      category_name: "packs",
      category_description: "some info",
    },
  ]);
};
