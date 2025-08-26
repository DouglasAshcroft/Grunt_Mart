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
      category: 1,
      mftr: 1,
      rating: 4.7,
      description:
        "The most superior Glock holster with QLS quick-attach fork.",
      price: 303.75,
      picture:
        "https://safariland.com/cdn/shop/products/SAF_6004USN_Tactical-color-multicam-finish-cordura.jpg?v=1678974541&width=600",
      quantity: 10,
      nsn: "1560000068043",
    },

    {
      product_id: 2,
      product_name: "crye plate carrier",
      category: 2,
      mftr: 2,
      rating: 5.0,
      description: "Lightweight, minimalist SPC with AirLite material.",
      price: 279.99,
      picture:
        "https://www.cryeprecision.com/site/crye/items/ALTEK5_100-02-MULTICAM-01.DEFAULT.png?resizeid=5&resizeh=687&resizew=687",
      quantity: 5,
      nsn: "8470016914577",
    },

    {
      product_id: 3,
      product_name: "ronin belt",
      category: 3,
      mftr: 3,
      rating: 5.0,
      description: "Two-layer MOLLE battle belt with stiff inner belt.",
      price: 170.0,
      picture:
        "https://cdn-ibadf.nitrocdn.com/OWivjpGNmgqBAVFmTFvhGqWKAkEPSnNn/assets/images/optimized/rev-fea083d/tacticalhyve.com/wp-content/uploads/2023/03/ronin-senshi-belt-min.jpeg",
      quantity: 12,
      nsn: "8465016984452",
    },

    {
      product_id: 4,
      product_name: "blue force belt",
      category: 3,
      mftr: 4,
      rating: 4.5,
      description: "Lightweight battle belt designed for airborne ops.",
      price: 190.0,
      picture:
        "https://eadn-wc03-8337747.nxedge.io/cdn/media/mf_webp/jpg/media/catalog/product/cache/cc458e893e8ac7b550afa6784dd33ea3/m/u/multicam-battle-belt_chlk-mc_catalog_1.webp",
      quantity: 8,
      nsn: "8465017001293",
    },

    {
      product_id: 5,
      product_name: "smith eye pro",
      category: 4,
      mftr: 5,
      rating: 4.5,
      description:
        "Low-profile ballistic-rated shooting glasses, alternative to Oakley.",
      price: 110.0,
      picture:
        "https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Sites-smith-master-catalog/default/dw5d407d6e/images/hi-res/202328DLD59VP_01.png?sw=700&sh=700&sm=fit",
      quantity: 15,
      nsn: "4240015274051",
    },

    {
      product_id: 6,
      product_name: "range cap",
      category: 5,
      mftr: 6,
      rating: 4.5,
      description: "Baseball-style tactical range cap, hook/loop for patches.",
      price: 24.99,
      picture:
        "https://assets.cat5.com/images/catalog/products/4/2/8/4/5/0-650-condor-flex-tactical-cap-multicam-black.jpg?v=77868",
      quantity: 30,
      nsn: "8415016852045",
    },

    {
      product_id: 7,
      product_name: "rhodesian",
      category: 2,
      mftr: 7,
      rating: 4.8,
      description:
        "Classic Rhodesian-style chest rig, minimalist mag carriage.",
      price: 139.99,
      picture:
        "https://cdn11.bigcommerce.com/s-6nk1jls8uy/images/stencil/1280x1280/products/906/5015/23017LW-5A__96359.1724275135.jpg?c=1?imbypass=on",
      quantity: 6,
      nsn: "8465016998741",
    },

    {
      product_id: 8,
      product_name: "glock mga pouch",
      category: 6,
      mftr: 8,
      rating: 4.9,
      description:
        "Hybrid Kydex/nylon magazine pouch (KYWI = Kydex Wedge Insert) that provides adjustable retention by heating and shaping the insert. Designed for double-stack 9mm/.40/.45 pistol mags.",
      price: 139.99,
      picture:
        "https://cdn11.bigcommerce.com/s-4z9lxo7ou8/images/stencil/50x50/products/346/743/Single_Pistol_Magnet_A__81149.1623448293.jpg?c=1",
      quantity: 12,
      nsn: "1234233454567",
    },

    {
      product_id: 9,
      product_name: "low profile plate carrier",
      category: 2,
      mftr: 9,
      rating: 5.0,
      description:
        "Designed for wear underneath garments or Load Carriage Platforms. The Slick is lightweight, soft, and foldable—ideal for covert wear or storage in your cargo pocket.",
      price: 139.99,
      picture:
        "https://cdn11.bigcommerce.com/s-1sa5ed3aq7/images/stencil/1280x1280/products/3543/8848/1-4-w--side-plates-back__31219.1738065012.jpg?c=1",
      quantity: 14,
      nsn: "1560000068046",
    },

    {
      product_id: 10,
      product_name: "petzl fast rope gloves",
      category: 8,
      mftr: 11,
      rating: 4.9,
      description:
        "heavy duty gloves for fast roping, but are flexible enough for shooting.",
      price: 49.95,
      picture:
        "https://shopmtn.com/cdn/shop/products/Petzl_Cordex_Plus_Gloves2.jpeg?v=1585657306&width=1136",
      quantity: 50,
      nsn: "1560000061212",
    },

    {
      product_id: 11,
      product_name: "retractable keychain leash",
      category: 8,
      mftr: 12,
      rating: 4.6,
      description:
        "This heavy-duty tactical keychain features a 65cm steel wire rope and automatic retracting system that keeps your gear secure and ready at all times.",
      price: 27.99,
      picture:
        "https://militarykart.com/cdn/shop/files/S1b2534af401547c99b25d80c1511b7645_1080x.png?v=1751897081",
      quantity: 50,
      nsn: "1560000061212",
    },
    {
      product_id: 12,
      product_name: "assistant gunner pack kit",
      category: 9,
      mftr: 13,
      rating: 4.9,
      description:
        "A lightweight, durable, heat resistant pack designed to comfortably store 240L tripod, barrels, and ammo.",
      price: 2900.0,
      picture: "https://catoma.com/wp-content/uploads/2018/06/M240_AG_MC.jpg",
      quantity: 3,
      nsn: "1560000061292",
    },

    {
      product_id: 13,
      product_name: "flathead screwdriver",
      category: 8,
      mftr: 14,
      rating: 4.6,
      description:
        "This heavy-duty tactical keychain features a 65cm steel wire rope and automatic retracting system that keeps your gear secure and ready at all times.",
      price: 27.99,
      picture:
        " https://assets.testequity.com/te1/product-images/large/TechniPro-487-768_01_0723.jpg",
      quantity: 50,
      nsn: "1560000061212",
    },

    {
      product_id: 14,
      product_name: "vans hi top sneakers",
      category: 7,
      mftr: 15,
      rating: 5.0,
      description:
        "Classic Vans hi-top rebuilt with GORE-TEX waterproofing, insulation, and rugged outsole for short, everyday movements. X-shoes, 1km movements or less.",
      price: 128.0,
      picture:
        "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1742241999/VN000CVT3PY-HERO/Sk8Hi-Waterproof-Insulated-Shoe.png",
      quantity: 5,
      nsn: "1560003461892",
    },
    {
      product_id: 15,
      product_name: "speed assault 2 gore-tex",
      category: 7,
      mftr: 16,
      rating: 4.4,
      description:
        "Lightweight, versatile high-top tactical boot built on Salomon’s proven trail running chassis. Waterproof GORE-TEX lining with Contagrip outsole. 1km-10km movements.",
      price: 179.95,
      picture:
        "https://www.salomon.com/en-us/shop/media/catalog/product/article_images/L47361400/L47361400_6d46bfeb5d0928abf48bdb135d5644c9.png?width=1280&fit=cover&optimize=low&bg-color=f5f5f5&format=pjpg&canvas=116p%2C144p",
      quantity: 7,
      nsn: "1560223461092",
    },

    {
      product_id: 16,
      product_name: "Altra Trail Running Hi-Tops",
      category: 7,
      mftr: 17,
      rating: 4.9,
      description:
        "Trail running high-top designed for speed over distance. Lightweight, cushioned EGO midsole with waterproof construction and MaxTrac outsole.",
      price: 169.99,
      picture:
        "https://www.blister-prevention.com/cdn/shop/files/AL0A85P8000-HERO_15d0a96c-6f21-48ec-8faf-334280fda3e7.webp?crop=center&height=1200&v=1713857151&width=1200",
      quantity: 12,
      nsn: "1111223463444",
    },

    {
      product_id: 17,
      product_name: "magnetic weapon retention system",
      category: 6,
      mftr: 18,
      rating: 4.9,
      description:
        "The VEL TYE Magnetic Weapon Retention System uses rare earth magnets to secure your weapon in position. It can be used in conjunction with the bungee weapon retention strap and single point sling to create a complete weapon retention rig for your tactical vest.",
      price: 95.0,
      picture:
        "https://gunfightershootingsolutions.com/cdn/shop/files/Magnetic-Weapons-Retention-V2-Edited-3_720x_5130ea3f-4611-4893-9318-0b452f1ece20.webp?v=1694557942&width=700",
      quantity: 8,
      nsn: "1111223463744",
    },

    {
      product_id: 18,
      product_name: "ferro concepts back panel banger",
      category: 6,
      mftr: 19,
      rating: 4.8,
      description:
        "The Back Panel Banger is the upgraded evolution of Ferro's popular Assault Back Panel. Built with the same DNA but new tricks up its sleeve, it features three multi-fit expanding top pockets for storing your essentials, from mags to flashbangs (but sorry, FOG has to stay in the truck). The bottom general-purpose pocket handles mission basics like a med kit, snacks, or even a yo-yo if you’re bold like that.",
      price: 185.0,
      picture:
        "https://www.tacticaldistributors.com/cdn/shop/files/1575558738FERRO_20CONCEPTS_20-_20ADAPT_20BACK_20PANEL_20BANGER_20-_20FCPC_20V5_20-_20MULTICAM_480x480_46b9d219-468b-4c18-86b9-a830b78d2302.webp?v=1721049780&width=5000",
      quantity: 6,
      nsn: "11112234637455",
    },

    {
      product_id: 19,
      product_name: "dangler - raid pouch v3",
      category: 6,
      mftr: 20,
      rating: 4.9,
      description:
        "The Releasable-Abdominally-Integrated-Drop Pouch -or- RAID Pouch is our unique take on the industry standard hanger. However instead of just another box pouch hanging under one’s front plate bag and simply holding items, ours uses a First Spear Tube™ to quickly disconnect from the user. This allows for better access at its contents, laying the pouch next to patients as a medical pouch, hand off the pouch to teammates or simply remove it easily when not needed. The First Spear Tube™ does not just make it easy to remove but also easy to reconnect singlehandedly.",
      price: 120.0,
      picture:
        "https://shaw-concepts.com/cdn/shop/files/RaidV3Hero_MC_1d999780-3d5d-44c5-ab10-fded2f114661.png?v=1703712878&width=2048",
      quantity: 12,
      nsn: "11112234637466",
    },
  ]);
};
