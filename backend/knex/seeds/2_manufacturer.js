/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("manufacturer").del();
  await knex("manufacturer").insert([
    { mftr_name: "safariland" },
    { mftr_name: "crye_precision" },
    { mftr_name: "ronin tactics" },
    { mftr_name: "blue force gear" },
    { mftr_name: "smith optics" },
    { mftr_name: "condor" },
    { mftr_name: "tactical tailor" },
    { mftr_name: "esstac" },
    { mftr_name: "firstspear" },
    { mftr_name: "militarykart" },
    { mftr_name: "petzl" },
    { mftr_name: "militarykart" },
    { mftr_name: "catoma" },
    { mftr_name: "techni-pro" },
    { mftr_name: "vans" },
    { mftr_name: "salomon" },
    { mftr_name: "altra" },
    { mftr_name: "gunfightershootingsolutions" },
    { mftr_name: "ferro concepts" },
    { mftr_name: "shaw concepts" }

  ]);
};
