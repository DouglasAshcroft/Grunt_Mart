/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      product_id: 1,
      product_name: "safariland glock holster",
      category_name: 1,
      role: "infantry",
      mftr: 1,
      rating: 4.7,
      description: "The most superior Glock holster with QLS quick-attach fork.",
      price: 194.5,
      picture:
        "https://safariland.com/products/6354rdso-als-holster-w-qls19-fork?part-number=6354RD[…]paignid=18076866959&gbraid=0AAAAAD2lf3yiOLRUZvZSJk25r35GgIVYp",
      quantity: 7,
      nsn: 1560000068043,
    },

    {
      product_id: 2,
      product_name: "crye plate carrier",
      category_name: 2,
      role: "infantry",
      mftr: "crye precision",
      rating: 5.0,
      description: "Lightweight, minimalist SPC with AirLite material.",
      price: 279.99,
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cryeprecision.com%2FAirLite-SP[…]fe&opi=89978449&ved=0CBYQjRxqFwoTCICQ9euan48DFQAAAAAdAAAAABAE",
      quantity: 10,
      nsn: 8470016914577,
    },

    {
      product_id: 3,
      product_name: "ronin belt",
      category_name: 3,
      role: "infantry",
      mftr: "ronin tactics",
      rating: 5.0,
      description: "Two-layer MOLLE battle belt with stiff inner belt.",
      price: 170.0,
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ronintactics.com%2Fstore%2Fp27[…]fe&opi=89978449&ved=0CBYQjRxqFwoTCIC__5qbn48DFQAAAAAdAAAAABAE",
      quantity: 12,
      nsn: 8465016984452,
    },

    {
      product_id: 4,
      product_name: "blue force belt",
      category_name: 3,
      role: "infantry",
      mftr: "blue force gear",
      rating: 4.5,
      description: "Lightweight battle belt designed for airborne ops.",
      price: 190.0,
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hcctac.com%2Fproducts%2Fchlk-b[…]fe&opi=89978449&ved=0CBYQjRxqFwoTCJDhqK6bn48DFQAAAAAdAAAAABAE",
      quantity: 8,
      nsn: 8465017001293,
    },

    {
      product_id: 5,
      product_name: "smith eye pro",
      category_name: 4,
      role: "infantry",
      mftr: "smith optics",
      rating: 4.5,
      description:
        "Low-profile ballistic-rated shooting glasses, alternative to Oakley.",
      price: 110.0,
      picture:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fus.amazon.com%2FSmith-Optics-Elite[…]fe&opi=89978449&ved=0CBYQjRxqFwoTCOjY3c2bn48DFQAAAAAdAAAAABAE",
      quantity: 15,
      nsn: 4240015274051,
    },

    {
      product_id: 6,
      product_name: "range cap",
      category_name: 5,
      role: "infantry",
      mftr: "condor",
      rating: 4.5,
      description: "Baseball-style tactical range cap, hook/loop for patches.",
      price: 24.99,
      picture:
        "https://assets.cat5.com/images/catalog/products/4/2/8/4/5/0-650-condor-flex-tactical-cap-multicam-black.jpg?v=77868",
      quantity: 30,
      nsn: 8415016852045,
    },

    {
      product_id: 7,
      product_name: "rhodesian",
      category_name: 2,
      role: "infantry",
      mftr: "tactical tailor",
      rating: 4.8,
      description: "Classic Rhodesian-style chest rig, minimalist mag carriage.",
      price: 139.99,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrjOfJvQU56_PDmSKmM4r4JUcSSj69OS75kzRWr5N3Mg5_olcTFCB6479Y0Y7y0JlJpM&usqp=CAU",
      quantity: 6,
      nsn: 8465016998741,
    },

    {
      product_id: 8,
      product_name: "glock mga pouch",
      category_name: 6,
      role: "infantry",
      mftr: "esstac",
      rating: 4.9,
      description:
        "Hybrid Kydex/nylon magazine pouch (KYWI = Kydex Wedge Insert) that provides adjustable retention by heating and shaping the insert. Designed for double-stack 9mm/.40/.45 pistol mags.",
      price: 139.99,
      picture:
        "https://cdn11.bigcommerce.com/s-4z9lxo7ou8/images/stencil/50x50/products/346/743/Single_Pistol_Magnet_A__81149.1623448293.jpg?c=1",
      quantity: 12,
      nsn: 1234233454567,
    },

    {
      product_id: 9,
      product_name: "low profile plate carrier",
      category_name: 2,
      role: "protective security detail (psd)",
      mftr: "firstspear",
      rating: 5.0,
      description:
        "Designed for wear underneath garments or Load Carriage Platforms. The Slick is lightweight, soft, and foldable—ideal for covert wear or storage in your cargo pocket.",
      price: 139.99,
      picture:
        "https://cdn11.bigcommerce.com/s-1sa5ed3aq7/images/stencil/1280x1280/products/3543/8848/1-4-w--side-plates-back__31219.1738065012.jpg?c=1",
      quantity: 14,
      nsn: 1560000068046,
    },

    {
      product_id: 10,
      product_name: "retractable keychain leash",
      category_name: 8,
      role: "machine gunner",
      mftr: "militarykart",
      rating: 4.6,
      description:
        "This heavy-duty tactical keychain features a 65cm steel wire rope and automatic retracting system that keeps your gear secure and ready at all times.",
      price: 27.99,
      picture:
        " https://cdn11.bigcommerce.com/s-1sa5ed3aq7/images/stencil/1280x1280/products/3543/8848/1-4-w--side-plates-back__31219.1738065012.jpg?c=1",
      quantity: 50,
      nsn: 1560000061212,
    },

    {
      product_id: 11,
      product_name: "retractable keychain leash",
      category_name: 8,
      role: "machine gunner",
      mftr: "militarykart",
      rating: 4.6,
      description:
        "This heavy-duty tactical keychain features a 65cm steel wire rope and automatic retracting system that keeps your gear secure and ready at all times.",
      price: 27.99,
      picture:
        " https://cdn11.bigcommerce.com/s-1sa5ed3aq7/images/stencil/1280x1280/products/3543/8848/1-4-w--side-plates-back__31219.1738065012.jpg?c=1",
      quantity: 50,
      nsn: 1560000061212,
    },
  ]);
};

