/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      product_name: "safariland glock holster",
      category: 1,
      role: "infantry",
      mftr: 1,
      rating: 4.7,
      description:
        "The most superior Glock holster with QLS quick-attach fork.",
      price: 303.75,
      picture:
        "https://safariland.com/cdn/shop/products/SAF_6004USN_Tactical-color-multicam-finish-cordura.jpg?v=1678974541&width=600",
      quantity: 10,
      nsn: 1560000068043,
    },

    {
      product_id: 2,
      product_name: "crye plate carrier",
      category: 2,
      role: "infantry",
      mftr: "crye precision",
      rating: 5.0,
      description: "Lightweight, minimalist SPC with AirLite material.",
      price: 279.99,
      picture:
        "https://www.cryeprecision.com/site/crye/items/ALTEK5_100-02-MULTICAM-01.DEFAULT.png?resizeid=5&resizeh=687&resizew=687",
      quantity: 5,
      nsn: 8470016914577,
    },

    {
      product_id: 3,
      product_name: "ronin belt",
      category: 3,
      role: "infantry",
      mftr: "ronin tactics",
      rating: 5.0,
      description: "Two-layer MOLLE battle belt with stiff inner belt.",
      price: 170.0,
      picture:
        "https://cdn-ibadf.nitrocdn.com/OWivjpGNmgqBAVFmTFvhGqWKAkEPSnNn/assets/images/optimized/rev-fea083d/tacticalhyve.com/wp-content/uploads/2023/03/ronin-senshi-belt-min.jpeg",
      quantity: 12,
      nsn: 8465016984452,
    },

    {
      product_id: 4,
      product_name: "blue force belt",
      category: 3,
      role: "infantry",
      mftr: "blue force gear",
      rating: 4.5,
      description: "Lightweight battle belt designed for airborne ops.",
      price: 190.0,
      picture:
        "https://eadn-wc03-8337747.nxedge.io/cdn/media/mf_webp/jpg/media/catalog/product/cache/cc458e893e8ac7b550afa6784dd33ea3/m/u/multicam-battle-belt_chlk-mc_catalog_1.webp",
      quantity: 8,
      nsn: 8465017001293,
    },

    {
      product_id: 5,
      product_name: "smith eye pro",
      category: 4,
      role: "infantry",
      mftr: "smith optics",
      rating: 4.5,
      description:
        "Low-profile ballistic-rated shooting glasses, alternative to Oakley.",
      price: 110.0,
      picture:
        "https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Sites-smith-master-catalog/default/dw5d407d6e/images/hi-res/202328DLD59VP_01.png?sw=700&sh=700&sm=fit",
      quantity: 15,
      nsn: 4240015274051,
    },

    {
      product_id: 6,
      product_name: "range cap",
      category: 5,
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
      category: 2,
      role: "infantry",
      mftr: "tactical tailor",
      rating: 4.8,
      description:
        "Classic Rhodesian-style chest rig, minimalist mag carriage.",
      price: 139.99,
      picture:
        "https://cdn11.bigcommerce.com/s-6nk1jls8uy/images/stencil/1280x1280/products/906/5015/23017LW-5A__96359.1724275135.jpg?c=1?imbypass=on",
      quantity: 6,
      nsn: 8465016998741,
    },

    {
      product_id: 8,
      product_name: "glock mga pouch",
      category: 6,
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
      category: 2,
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
      product_name: "petzl fast rope gloves",
      category: 8,
      role: "infantry",
      mftr: "petzl",
      rating: 4.9,
      description:
        "heavy duty gloves for fast roping, but are flexible enough for shooting.",
      price: 49.95,
      picture:
        "data:image/jpeg;base64,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",
      quantity: 50,
      nsn: 1560000061212,
    },

    {
      product_id: 11,
      product_name: "retractable keychain leash",
      category: 8,
      role: "machine gunner",
      mftr: "militarykart",
      rating: 4.6,
      description:
        "This heavy-duty tactical keychain features a 65cm steel wire rope and automatic retracting system that keeps your gear secure and ready at all times.",
      price: 27.99,
      picture:
        "https://militarykart.com/cdn/shop/files/S1b2534af401547c99b25d80c1511b7645_1080x.png?v=1751897081",
      quantity: 50,
      nsn: 1560000061212,
    },
    {
      product_id: 12,
      product_name: "assistant gunner pack kit",
      category: "packs",
      role: "machine gunner",
      mftr: "catoma",
      rating: 4.9,
      description:
        "A lightweight, durable, heat resistant pack designed to comfortably store 240L tripod, barrels, and ammo.",
      price: 2900.0,
      picture: "https://catoma.com/wp-content/uploads/2018/06/M240_AG_MC.jpg",
      quantity: 3,
      nsn: 1560000061292,
    },

    {
      product_id: 13,
      product_name: "flathead screwdriver",
      category: 8,
      role: "machine gunner",
      mftr: "techni-pro",
      rating: 4.6,
      description:
        "This heavy-duty tactical keychain features a 65cm steel wire rope and automatic retracting system that keeps your gear secure and ready at all times.",
      price: 27.99,
      picture:
        " https://assets.testequity.com/te1/product-images/large/TechniPro-487-768_01_0723.jpg",
      quantity: 50,
      nsn: 1560000061212,
    },

    {
      product_id: 14,
      product_name: "vans hi top sneakers",
      category: 7,
      role: "infantry",
      mftr: "vans",
      rating: 5.0,
      description:
        "Classic Vans hi-top rebuilt with GORE-TEX waterproofing, insulation, and rugged outsole for short, everyday movements. X-shoes, 1km movements or less.",
      price: 128.0,
      picture:
        "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1742241999/VN000CVT3PY-HERO/Sk8Hi-Waterproof-Insulated-Shoe.png",
      quantity: 5,
      nsn: 1560003461892,
    },
    {
      product_id: 15,
      product_name: "speed assault 2 gore-tex",
      category: 7,
      role: "grenadier",
      mftr: "salomon",
      rating: 4.4,
      description:
        "Lightweight, versatile high-top tactical boot built on Salomon’s proven trail running chassis. Waterproof GORE-TEX lining with Contagrip outsole. 1km-10km movements.",
      price: 179.95,
      picture:
        "https://www.salomon.com/en-us/shop/media/catalog/product/article_images/L47361400/L47361400_6d46bfeb5d0928abf48bdb135d5644c9.png?width=1280&fit=cover&optimize=low&bg-color=f5f5f5&format=pjpg&canvas=116p%2C144p",
      quantity: 7,
      nsn: 1560223461092,
    },

    {
      product_id: 16,
      product_name: "Altra Trail Running Hi-Tops",
      category: 7,
      role: "infantry",
      mftr: "altra",
      rating: 4.9,
      description:
        "Trail running high-top designed for speed over distance. Lightweight, cushioned EGO midsole with waterproof construction and MaxTrac outsole.",
      price: 169.99,
      picture:
        "https://www.blister-prevention.com/cdn/shop/files/AL0A85P8000-HERO_15d0a96c-6f21-48ec-8faf-334280fda3e7.webp?crop=center&height=1200&v=1713857151&width=1200",
      quantity: 12,
      nsn: 1111223463444,
    },

    {
      product_id: 17,
      product_name: "magnetic weapon retention system",
      category: 6,
      role: "team leader",
      mftr: "gunfightershootingsolutions",
      rating: 4.9,
      description:
        "The VEL TYE Magnetic Weapon Retention System uses rare earth magnets to secure your weapon in position. It can be used in conjunction with the bungee weapon retention strap and single point sling to create a complete weapon retention rig for your tactical vest.",
      price: 95.0,
      picture:
        "https://gunfightershootingsolutions.com/cdn/shop/files/Magnetic-Weapons-Retention-V2-Edited-3_720x_5130ea3f-4611-4893-9318-0b452f1ece20.webp?v=1694557942&width=700",
      quantity: 8,
      nsn: 1111223463744,
    },

    {
      product_id: 18,
      product_name: "ferro concepts back panel banger",
      category: 6,
      role: "team leader",
      mftr: "ferro concepts",
      rating: 4.8,
      description:
        "The Back Panel Banger is the upgraded evolution of Ferro's popular Assault Back Panel. Built with the same DNA but new tricks up its sleeve, it features three multi-fit expanding top pockets for storing your essentials, from mags to flashbangs (but sorry, FOG has to stay in the truck). The bottom general-purpose pocket handles mission basics like a med kit, snacks, or even a yo-yo if you’re bold like that.",
      price: 185.0,
      picture:
        "https://www.tacticaldistributors.com/cdn/shop/files/1575558738FERRO_20CONCEPTS_20-_20ADAPT_20BACK_20PANEL_20BANGER_20-_20FCPC_20V5_20-_20MULTICAM_480x480_46b9d219-468b-4c18-86b9-a830b78d2302.webp?v=1721049780&width=5000",
      quantity: 6,
      nsn: 11112234637455,
    },

    {
      product_id: 19,
      product_name: "dangler - raid pouch v3",
      category: 6,
      role: "team leader",
      mftr: "shaw concepts",
      rating: 4.9,
      description:
        "The Releasable-Abdominally-Integrated-Drop Pouch -or- RAID Pouch is our unique take on the industry standard hanger. However instead of just another box pouch hanging under one’s front plate bag and simply holding items, ours uses a First Spear Tube™ to quickly disconnect from the user. This allows for better access at its contents, laying the pouch next to patients as a medical pouch, hand off the pouch to teammates or simply remove it easily when not needed. The First Spear Tube™ does not just make it easy to remove but also easy to reconnect singlehandedly.",
      price: 120.0,
      picture:
        "https://shaw-concepts.com/cdn/shop/files/RaidV3Hero_MC_1d999780-3d5d-44c5-ab10-fded2f114661.png?v=1703712878&width=2048",
      quantity: 12,
      nsn: 11112234637466,
    },
  ]);
};
