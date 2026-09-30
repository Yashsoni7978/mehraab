// MEHRAAB CENTRALIZED IMAGE INVENTORY
// Comprehensive asset registry for all local generated brand images in /images

export interface ImageAsset {
  id: string;
  filename: string;
  url: string;
  category: "hero" | "category" | "product" | "ingredient" | "craft" | "heritage" | "gifting" | "editorial";
  purpose: string;
  alt: string;
  dominantTone: "warm-ivory" | "royal-pink" | "deep-rose" | "royal-blue" | "silk-emerald" | "antique-gold" | "dark-ink";
  recommendedSection: string;
  recommendedAspect: "16:9" | "4:3" | "3:4" | "1:1" | "4:5" | "2:3";
}

export const IMAGE_INVENTORY: Record<string, ImageAsset> = {
  heroApproved: {
    id: "hero-approved",
    filename: "hero-approved.jpg",
    url: "/images/hero-approved.jpg",
    category: "hero",
    purpose: "Homepage Main Royal Campaign Hero",
    alt: "Mehraab Royal Attar & Perfumes - Palace balcony campaign photograph",
    dominantTone: "royal-pink",
    recommendedSection: "Homepage Hero",
    recommendedAspect: "16:9",
  },

  heritageWithIngredients: {
    id: "heritage-with-ingredients",
    filename: "heritage with ingrediants.png",
    url: "/images/heritage with ingrediants.png",
    category: "heritage",
    purpose: "Royal House & Heritage Editorial Section",
    alt: "Mehraab Royal Heritage with traditional attar ingredients & Jaipur architecture",
    dominantTone: "antique-gold",
    recommendedSection: "The Royal House / Heritage Section",
    recommendedAspect: "16:9",
  },

  artistBottleFilling: {
    id: "artist-bottle-filling",
    filename: "artist bottle filling.png",
    url: "/images/artist bottle filling.png",
    category: "craft",
    purpose: "Artisan Craftsmanship & Deg Distillation Feature",
    alt: "Indian Master Perfumer hand-filling crystal attar flacons in sandalwood oil",
    dominantTone: "silk-emerald",
    recommendedSection: "Made By Hand / Craftsmanship Section",
    recommendedAspect: "16:9",
  },

  craftsmanshipArtisan: {
    id: "craftsmanship-artisan",
    filename: "craftsmanship.jpg",
    url: "/images/craftsmanship.jpg",
    category: "craft",
    purpose: "Craftsmanship Still Life Archive",
    alt: "Handcrafted copper degs and pure attar distillation apparatus",
    dominantTone: "silk-emerald",
    recommendedSection: "Craftsmanship Page & Detail",
    recommendedAspect: "4:3",
  },

  comboGiftingBox: {
    id: "combo-gifting-box",
    filename: "combo gifting box.png",
    url: "/images/combo gifting box.png",
    category: "gifting",
    purpose: "Royal Gifting Campaign Hero",
    alt: "Mehraab Velvet Gift Chest with gold-embossed attar flacons & calligraphy card",
    dominantTone: "royal-blue",
    recommendedSection: "Gifting Section & Custom Gift Chest Builder",
    recommendedAspect: "16:9",
  },

  royalGiftBox: {
    id: "royal-gift-box",
    filename: "royal-gift-box.jpg",
    url: "/images/royal-gift-box.jpg",
    category: "gifting",
    purpose: "Gifting Secondary Spotlight",
    alt: "Mehraab Royal Jaipur Blue & Gold Velvet Presentation Box",
    dominantTone: "royal-blue",
    recommendedSection: "Gifting Product Detail & Cards",
    recommendedAspect: "3:4",
  },

  roseIngredient: {
    id: "rose-ingredient",
    filename: "rose ingrediant.png",
    url: "/images/rose ingrediant.png",
    category: "ingredient",
    purpose: "The Royal Rose Botanical Feature",
    alt: "Fresh Damask Rose petals & Kannauj attar distillation harvest",
    dominantTone: "royal-pink",
    recommendedSection: "Ingredients Archive & The Royal Rose Collection",
    recommendedAspect: "1:1",
  },

  kesarIngredient: {
    id: "kesar-ingredient",
    filename: "kesar ingrediant.png",
    url: "/images/kesar ingrediant.png",
    category: "ingredient",
    purpose: "Kashmir Saffron Botanical Feature",
    alt: "Pure Kashmir crimson saffron stigmas on Jaipur brass plate",
    dominantTone: "antique-gold",
    recommendedSection: "Ingredients Archive & Saffron Sandal Collection",
    recommendedAspect: "1:1",
  },

  oudhIngredient: {
    id: "oudh-ingredient",
    filename: "oudh.png",
    url: "/images/oudh.png",
    category: "ingredient",
    purpose: "Assam Oud & Agarwood Feature",
    alt: "Aged Assam Agarwood resin chips & pure Oud essence",
    dominantTone: "silk-emerald",
    recommendedSection: "The Oud House & Botanical Archive",
    recommendedAspect: "1:1",
  },

  sandalwoodIngredient: {
    id: "sandalwood-ingredient",
    filename: "scandalwood.png",
    url: "/images/scandalwood.png",
    category: "ingredient",
    purpose: "Mysore Sandalwood Feature",
    alt: "Pure Mysore Sandalwood logs & golden aromatic oil",
    dominantTone: "warm-ivory",
    recommendedSection: "Ingredients Archive & Ivory Musk World",
    recommendedAspect: "1:1",
  },

  whiteJasmine: {
    id: "white-jasmine",
    filename: "white jasmine.png",
    url: "/images/white jasmine.png",
    category: "ingredient",
    purpose: "Night Jasmine Bloom Feature",
    alt: "Night-blooming Madurai white jasmine blossoms",
    dominantTone: "royal-blue",
    recommendedSection: "White Jasmine Olfactive World",
    recommendedAspect: "1:1",
  },

  greenJasmine: {
    id: "green-jasmine",
    filename: "green jasmine.png",
    url: "/images/green jasmine.png",
    category: "ingredient",
    purpose: "Fresh Green Jasmine & Botanical Leaf Feature",
    alt: "Fresh green jasmine leaves with morning dew droplets",
    dominantTone: "silk-emerald",
    recommendedSection: "Botanical Harvest & Emerald Collection",
    recommendedAspect: "1:1",
  },

  goldIngredients: {
    id: "gold-ingredients",
    filename: "gold ingrediants.png",
    url: "/images/gold ingrediants.png",
    category: "ingredient",
    purpose: "Royal Amber & Spice Still Life",
    alt: "Golden spices, Kashmir saffron, and amber resins",
    dominantTone: "antique-gold",
    recommendedSection: "Botanical Alchemy Overview",
    recommendedAspect: "4:3",
  },

  whiteIngredients: {
    id: "white-ingredients",
    filename: "white ingrediants.png",
    url: "/images/white ingrediants.png",
    category: "ingredient",
    purpose: "Ivory Musk & Sandalwood Still Life",
    alt: "Pure white musk, white lotus petals, and sandalwood cream",
    dominantTone: "warm-ivory",
    recommendedSection: "Ivory Musk World & Fragrance Finder",
    recommendedAspect: "4:3",
  },

  darkPerfumeBottle: {
    id: "dark-perfume-bottle",
    filename: "dark perfume bottle.png",
    url: "/images/dark perfume bottle.png",
    category: "product",
    purpose: "Night & Oud Fragrance World Campaign",
    alt: "Mehraab Dark Emerald & Brass Royal Flacon in shadow light",
    dominantTone: "dark-ink",
    recommendedSection: "Oud House & Night Fragrances Feature",
    recommendedAspect: "3:4",
  },

  oudhBottle: {
    id: "oudh-bottle",
    filename: "oudh bottle.png",
    url: "/images/oudh bottle.png",
    category: "product",
    purpose: "Assam Oud Flacon Feature",
    alt: "Mehraab Assam Oud Flacon with carved brass cap and amber oil",
    dominantTone: "silk-emerald",
    recommendedSection: "Oud Collection & Product Pages",
    recommendedAspect: "3:4",
  },

  rosePerfumeBottle: {
    id: "rose-perfume-bottle",
    filename: "rose perfume bottle.png",
    url: "/images/rose perfume bottle.png",
    category: "product",
    purpose: "Royal Rose EDP Campaign Feature",
    alt: "Mehraab Gul-e-Rooh Rose Eau de Parfum flacon with fresh roses",
    dominantTone: "royal-pink",
    recommendedSection: "The Royal Rose World & EDP Catalog",
    recommendedAspect: "3:4",
  },

  blueRoyalTheme: {
    id: "blue-royal-theme",
    filename: "blue.png",
    url: "/images/blue.png",
    category: "editorial",
    purpose: "Sapphire Oud & Royal Blue Atmosphere",
    alt: "Royal Jaipur Deep Sapphire Blue architectural courtyard",
    dominantTone: "royal-blue",
    recommendedSection: "Sapphire Oud World & Jaipur Story",
    recommendedAspect: "16:9",
  },

  gulERoohProduct: {
    id: "gul-e-rooh-product",
    filename: "gul-e-rooh.jpg",
    url: "/images/gul-e-rooh.jpg",
    category: "product",
    purpose: "Gul-e-Rooh Canonical Product Photo",
    alt: "Gul-e-Rooh Pure Rose Attar in crystal decanter with gold cap",
    dominantTone: "royal-pink",
    recommendedSection: "Product Detail & Catalog",
    recommendedAspect: "3:4",
  },

  mehraabEdpProduct: {
    id: "mehraab-edp-product",
    filename: "mehraab-edp.jpg",
    url: "/images/mehraab-edp.jpg",
    category: "product",
    purpose: "Mehraab Signature EDP Canonical Photo",
    alt: "Mehraab Royal Eau de Parfum 100ml flacon",
    dominantTone: "silk-emerald",
    recommendedSection: "EDP Page & Catalog",
    recommendedAspect: "3:4",
  },

  saffronSandalProduct: {
    id: "saffron-sandal-product",
    filename: "saffron-sandal.jpg",
    url: "/images/saffron-sandal.jpg",
    category: "product",
    purpose: "Saffron Sandal Attar Canonical Photo",
    alt: "Saffron Sandal Pure Attar decanter",
    dominantTone: "antique-gold",
    recommendedSection: "Attar Page & Catalog",
    recommendedAspect: "3:4",
  },

  raatraaniProduct: {
    id: "raatraani-product",
    filename: "raatraani.jpg",
    url: "/images/raatraani.jpg",
    category: "product",
    purpose: "Raatrani Attar Canonical Photo",
    alt: "Raatrani Night-Blooming Jasmine Attar decanter",
    dominantTone: "royal-blue",
    recommendedSection: "Attar Page & Catalog",
    recommendedAspect: "3:4",
  },

  oudEJaipurProduct: {
    id: "oud-e-jaipur-product",
    filename: "oud-e-jaipur.jpg",
    url: "/images/oud-e-jaipur.jpg",
    category: "product",
    purpose: "Oud-e-Jaipur Attar Canonical Photo",
    alt: "Oud-e-Jaipur Aged Assam Oud Attar",
    dominantTone: "silk-emerald",
    recommendedSection: "Oud Page & Catalog",
    recommendedAspect: "3:4",
  },

  ivoryMuskProduct: {
    id: "ivory-musk-product",
    filename: "ivory-musk.jpg",
    url: "/images/ivory-musk.jpg",
    category: "product",
    purpose: "Ivory Musk EDP Canonical Photo",
    alt: "Ivory Musk Royal Eau de Parfum flacon",
    dominantTone: "warm-ivory",
    recommendedSection: "Perfumes Page & Catalog",
    recommendedAspect: "3:4",
  },

  sapphireOudProduct: {
    id: "sapphire-oud-product",
    filename: "sapphire-oud.jpg",
    url: "/images/sapphire-oud.jpg",
    category: "product",
    purpose: "Sapphire Oud EDP Canonical Photo",
    alt: "Sapphire Oud Royal Eau de Parfum flacon",
    dominantTone: "royal-blue",
    recommendedSection: "Oud Page & Catalog",
    recommendedAspect: "3:4",
  },

  dustyRoseBackground: {
    id: "dusty-rose-background",
    filename: "ChatGPT Image Sep 29, 2026, 04_20_41 PM.png",
    url: "/images/ChatGPT Image Sep 29, 2026, 04_20_41 PM.png",
    category: "editorial",
    purpose: "The Attar Edit Section Full Background",
    alt: "Mehraab Attar Edit - Dusty Rose Rajasthan Palace background with delicate gold botanical line art",
    dominantTone: "royal-pink",
    recommendedSection: "Homepage Section 01: The Attar Edit",
    recommendedAspect: "16:9",
  },

  splitHeritageStory: {
    id: "split-heritage-story",
    filename: "split story bg.png",
    url: "/images/split story bg.png",
    category: "heritage",
    purpose: "Mehraab Brand Story Split Artwork",
    alt: "Mehraab Heritage Story - Blue Jaipur pavilion illustration and sandstone balcony with royal woman overlooking palace",
    dominantTone: "royal-blue",
    recommendedSection: "Homepage Section 03: Brand Story",
    recommendedAspect: "16:9",
  },

  ingredientsBg: {
    id: "ingredients-bg",
    filename: "ingrediants bg.png",
    url: "/images/ingrediants bg.png",
    category: "editorial",
    purpose: "The Attar Edit Section Background",
    alt: "Mehraab Ingredients Dusty Rose Botanical Heritage Background",
    dominantTone: "royal-pink",
    recommendedSection: "Homepage Section 05: The Attar Edit",
    recommendedAspect: "16:9",
  },
};

// Legacy compatibility helper object
export const MEHRAAB_IMAGES = {
  hero: IMAGE_INVENTORY.heroApproved,
  products: {
    gulERooh: IMAGE_INVENTORY.gulERoohProduct.url,
    mehraabEdp: IMAGE_INVENTORY.mehraabEdpProduct.url,
    saffronSandal: IMAGE_INVENTORY.saffronSandalProduct.url,
    raatraani: IMAGE_INVENTORY.raatraaniProduct.url,
    oudEJaipur: IMAGE_INVENTORY.oudEJaipurProduct.url,
    ivoryMusk: IMAGE_INVENTORY.ivoryMuskProduct.url,
    sapphireOud: IMAGE_INVENTORY.sapphireOudProduct.url,
    royalGiftBox: IMAGE_INVENTORY.royalGiftBox.url,
    craftsmanship: IMAGE_INVENTORY.craftsmanshipArtisan.url,
    roseBottle: IMAGE_INVENTORY.rosePerfumeBottle.url,
    darkBottle: IMAGE_INVENTORY.darkPerfumeBottle.url,
    oudBottle: IMAGE_INVENTORY.oudhBottle.url,
  },
  categories: {
    attar: IMAGE_INVENTORY.rosePerfumeBottle,
    edp: IMAGE_INVENTORY.mehraabEdpProduct,
    oud: IMAGE_INVENTORY.oudhBottle,
    incense: IMAGE_INVENTORY.kesarIngredient,
    gifting: IMAGE_INVENTORY.comboGiftingBox,
  },
  ingredients: {
    rose: IMAGE_INVENTORY.roseIngredient,
    saffron: IMAGE_INVENTORY.kesarIngredient,
    oud: IMAGE_INVENTORY.oudhIngredient,
    sandalwood: IMAGE_INVENTORY.sandalwoodIngredient,
    jasmine: IMAGE_INVENTORY.whiteJasmine,
    greenJasmine: IMAGE_INVENTORY.greenJasmine,
    goldIngredients: IMAGE_INVENTORY.goldIngredients,
    whiteIngredients: IMAGE_INVENTORY.whiteIngredients,
  },
  craftsmanship: {
    artisanHands: IMAGE_INVENTORY.artistBottleFilling,
    apparatus: IMAGE_INVENTORY.craftsmanshipArtisan,
  },
  heritage: {
    jaipurPalace: IMAGE_INVENTORY.heritageWithIngredients,
    blueCourtyard: IMAGE_INVENTORY.blueRoyalTheme,
  },
};

