/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("manufacturer").del();
  await knex("manufacturer").insert([
    { mftr_id: 1, mftr_name: "safariland" },
    { mftr_id: 2, mftr_name: "crye_precision" },
    { mftr_id: 3, mftr_name: "ronin tactics" },
    { mftr_id: 4, mftr_name: "blue force gear" },
    { mftr_id: 5, mftr_name: "smith optics" },
    { mftr_id: 6, mftr_name: "condor" },
    { mftr_id: 7, mftr_name: "tactical tailor" },
    { mftr_id: 8, mftr_name: "esstac" },
    { mftr_id: 9, mftr_name: "firstspear" },
    { mftr_id: 10, mftr_name: "militarykart" }

  ]);
};
