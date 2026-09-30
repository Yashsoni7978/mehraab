export interface ProductVariant {
  size: string;
  price: number;
  compareAtPrice?: number;
  sku: string;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  type: string; // e.g. "Pure Rose Attar", "Eau de Parfum", "Aged Oud Decanter"
  category: "ATTAR" | "EAU DE PARFUM" | "OUD" | "PERFUME OILS" | "MUSK" | "GIFTING" | "DISCOVERY SETS" | "PERSONAL CARE" | "INCENSE";
  subcategory?: string;
  fragranceFamily: "FLORAL" | "WOODY" | "SPICY" | "FRESH" | "MUSKY" | "OUD" | "ORIENTAL";
  gender: "Unisex" | "Feminine" | "Masculine";
  occasion: "Everyday" | "Evening" | "Wedding" | "Festive" | "Royal Occasions";
  price: number;
  compareAtPrice?: number;
  shortDescription?: string;
  description?: string;
  sku: string;
  barcode: string;
  stock: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  weight: string;
  dimensions: string;
  mainImage: string;
  secondaryImage: string;
  gallery: string[];
  variants: ProductVariant[];
  sizeOptions: string[];
  defaultSize: string;
  ingredients: string[];
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  concentration: string;
  longevity: string;
  sillage: string;
  application: string;
  benefits: string[];
  howToWear: string;
  warnings: string;
  shippingInformation: string;
  returnEligibility: string;
  tags: string[];
  collections: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  isRoyalHouse?: boolean;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  colorTheme: "pink" | "blue" | "emerald" | "ivory" | "gold";
  seoTitle: string;
  seoDescription: string;
  createdAt: string;
  updatedAt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "gul-e-rooh",
    name: "Gul-e-Rooh",
    type: "Damask Rose Attar",
    category: "ATTAR",
    subcategory: "Rose Attar",
    fragranceFamily: "FLORAL",
    gender: "Unisex",
    occasion: "Royal Occasions",
    price: 2499,
    compareAtPrice: 2999,
    shortDescription: "Pure distilled Damask Rose attar aged in creamy Mysore sandalwood oil.",
    description: "Gul-e-Rooh ('Flower of the Soul') is the crown jewel of royal Indian perfumery. Extracted using traditional hydro-distillation in Kannauj and hand-aged in Jaipur, this exquisite attar weaves velvet red rose petals with warm Mysore sandalwood into a timeless sillage.",
    sku: "MEH-ATT-GUL-12",
    barcode: "890432100101",
    stock: 45,
    reservedQuantity: 2,
    lowStockThreshold: 5,
    weight: "0.25 kg",
    dimensions: "6 x 6 x 14 cm",
    mainImage: "/images/gul-e-rooh.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/gul-e-rooh.jpg",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
      "/images/craftsmanship.jpg"
    ],
    sizeOptions: ["6ml Concentrated Oil", "12ml Concentrated Oil", "24ml Royal Crystal Bottle"],
    defaultSize: "12ml Concentrated Oil",
    variants: [
      { size: "6ml Concentrated Oil", price: 1499, compareAtPrice: 1799, sku: "MEH-ATT-GUL-06", stock: 25 },
      { size: "12ml Concentrated Oil", price: 2499, compareAtPrice: 2999, sku: "MEH-ATT-GUL-12", stock: 45 },
      { size: "24ml Royal Crystal Bottle", price: 4299, compareAtPrice: 4999, sku: "MEH-ATT-GUL-24", stock: 12 }
    ],
    notes: {
      top: ["Kashmir Rose Petals", "Crimson Saffron", "Pink Pepper"],
      heart: ["Damask Rose Absolute", "Night-Blooming Jasmine", "Geranium"],
      base: ["Aged Mysore Sandalwood", "Golden Amber", "Soft Silk Musk"]
    },
    ingredients: ["Rosa Damascena Flower Extract", "Santalum Album (Sandalwood) Seed Oil", "Natural Botanical Essences"],
    concentration: "Pure Concentrated Attar Oil (100% Non-Alcoholic)",
    longevity: "16+ Hours on Skin / 48 Hours on Fabric",
    sillage: "Enveloping Royal Aura",
    application: "Glass Wand Pulse Applicator",
    benefits: ["100% Free of Synthetic Alcohol", "Hand-aged in Jaipur Sandstone Cellars", "Skin Soothing Botanical Blend"],
    howToWear: "Apply a drop using the glass applicator onto pulse points—wrists, behind earlobes, and base of the neck. Allow warmth to release the royal floral heart.",
    warnings: "For external use only. Store in a cool dark place away from direct sunlight.",
    shippingInformation: "Ships in signature Mehraab cushioned gold-embossed box within 24 hours.",
    returnEligibility: "Eligible for 7-day return if seal is unbroken.",
    tags: ["rose", "attar", "bestseller", "jaipur", "royal", "unisex"],
    collections: ["Royal Classics", "Kannauj Hydro-Distillation"],
    isBestseller: true,
    isRoyalHouse: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 128,
    colorTheme: "pink",
    seoTitle: "Gul-e-Rooh Pure Damask Rose Attar | MEHRAAB Jaipur",
    seoDescription: "Discover Gul-e-Rooh pure Damask rose attar distilled in Kannauj and hand-aged in Mysore sandalwood oil by MEHRAAB Royal Fragrances.",
    createdAt: "2026-01-15T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p2",
    slug: "mehraab-eau-de-parfum",
    name: "Mehraab",
    type: "Eau de Parfum",
    category: "EAU DE PARFUM",
    subcategory: "Eau de Parfum",
    fragranceFamily: "SPICY",
    gender: "Unisex",
    occasion: "Evening",
    price: 3999,
    compareAtPrice: 4500,
    shortDescription: "Signature royal fragrance with Kashmir saffron, Jaipur rose & amber.",
    description: "Our signature namesake creation captures golden hour over Jaipur's pink sandstone palaces. Intoxicating Kashmir saffron opens into an opulent heart of royal rose and orange blossom, finishing with warm cedarwood and sensual cashmere musk.",
    sku: "MEH-EDP-SIG-100",
    barcode: "890432100102",
    stock: 60,
    reservedQuantity: 4,
    lowStockThreshold: 10,
    weight: "0.45 kg",
    dimensions: "8 x 8 x 16 cm",
    mainImage: "/images/mehraab-edp.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/mehraab-edp.jpg",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
      "/images/hero-approved.jpg"
    ],
    sizeOptions: ["50ml EDP Spray", "100ml EDP Spray", "100ml Deluxe Gold Edition"],
    defaultSize: "100ml EDP Spray",
    variants: [
      { size: "50ml EDP Spray", price: 2799, compareAtPrice: 3200, sku: "MEH-EDP-SIG-50", stock: 30 },
      { size: "100ml EDP Spray", price: 3999, compareAtPrice: 4500, sku: "MEH-EDP-SIG-100", stock: 60 },
      { size: "100ml Deluxe Gold Edition", price: 5499, compareAtPrice: 6000, sku: "MEH-EDP-SIG-GOLD", stock: 15 }
    ],
    notes: {
      top: ["Kashmir Saffron", "Cardamom Pods", "Orange Blossom"],
      heart: ["Royal Pink Rose", "Night Jasmine", "Spiced Nutmeg"],
      base: ["Mysore Sandalwood", "Golden Amber", "Cashmere Musk"]
    },
    ingredients: ["Alcohol Denat.", "Parfum (Fragrance)", "Aqua (Water)", "Saffron Extract", "Rose Oil", "Linalool", "Limonene"],
    concentration: "Eau de Parfum (25% Extrait Strength)",
    longevity: "10-14 Hours",
    sillage: "Strong Radiance & Trail",
    application: "Micro-mist Precision Atomizer",
    benefits: ["Hand-crafted formulation", "Includes 2 complimentary 2ml discovery vials", "Luxury heavy glass bottle"],
    howToWear: "Spray generously on skin and clothing from 6 inches away. Focus on pulse points for all-day sillage.",
    warnings: "Flammable until dry. Keep away from heat and open flame.",
    shippingInformation: "Ships with complimentary sample kit in gold embossed sleeve.",
    returnEligibility: "Eligible for 7-day return.",
    tags: ["signature", "saffron", "edp", "bestseller", "unisex"],
    collections: ["House Signatures", "Jaipur Palace Collection"],
    isBestseller: true,
    isRoyalHouse: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 210,
    colorTheme: "pink",
    seoTitle: "Mehraab Signature Eau de Parfum | Royal Kashmir Saffron & Amber",
    seoDescription: "Experience Mehraab Signature Eau de Parfum blending Kashmir Saffron, Jaipur Rose and warm Mysore Sandalwood.",
    createdAt: "2026-01-10T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p3",
    slug: "saffron-sandal",
    name: "Saffron Sandal",
    type: "Infused Attar",
    category: "ATTAR",
    subcategory: "Premium Attar",
    fragranceFamily: "WOODY",
    gender: "Unisex",
    occasion: "Everyday",
    price: 2999,
    compareAtPrice: 3499,
    shortDescription: "Warm Kashmir saffron hand-infused into rare Mysore sandalwood oil.",
    description: "A royal formulation crafted for intimate gatherings and evening celebrations. Sun-dried golden saffron stigmas slowly steep in pure sandalwood oil, delivering a velvety, spicy-woody depth.",
    sku: "MEH-ATT-SAF-12",
    barcode: "890432100103",
    stock: 32,
    reservedQuantity: 0,
    lowStockThreshold: 5,
    weight: "0.22 kg",
    dimensions: "5 x 5 x 12 cm",
    mainImage: "/images/saffron-sandal.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/saffron-sandal.jpg",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
    ],
    sizeOptions: ["6ml Concentrated Oil", "12ml Concentrated Oil"],
    defaultSize: "12ml Concentrated Oil",
    variants: [
      { size: "6ml Concentrated Oil", price: 1799, compareAtPrice: 2000, sku: "MEH-ATT-SAF-06", stock: 15 },
      { size: "12ml Concentrated Oil", price: 2999, compareAtPrice: 3499, sku: "MEH-ATT-SAF-12", stock: 32 }
    ],
    notes: {
      top: ["Crimson Saffron Threads", "Golden Amber", "Coriander"],
      heart: ["Warm Nutmeg", "Cardamom", "Rosewood"],
      base: ["Pure Mysore Sandalwood", "Benzoin Resin", "Vetiver"]
    },
    ingredients: ["Santalum Album Oil", "Crocus Sativus (Saffron) Extract", "Natural Essential Oils"],
    concentration: "Pure Attar Oil (100% Non-Alcoholic)",
    longevity: "14+ Hours",
    sillage: "Warm & Calming",
    application: "Glass Applicator Wand",
    benefits: ["Real Pampore Saffron Threads", "Pure Mysore Sandalwood Base", "Calming Aromatherapeutic Profile"],
    howToWear: "Dab gently onto palm, rub hands together, and smooth over hair or collar edges for an ethereal fragrance aura.",
    warnings: "Store away from high temperatures.",
    shippingInformation: "Ships worldwide in royal gold padded box.",
    returnEligibility: "Eligible for 7-day return.",
    tags: ["saffron", "sandalwood", "attar", "woody"],
    collections: ["Kannauj Hydro-Distillation", "Spice & Wood"],
    isBestseller: true,
    inStock: true,
    rating: 4.8,
    reviewsCount: 94,
    colorTheme: "gold",
    seoTitle: "Saffron Sandal Pure Attar Oil | Kashmir Saffron & Mysore Sandalwood",
    seoDescription: "Buy Saffron Sandal pure concentrated attar oil. Sun-dried Kashmir saffron steeped in genuine Mysore sandalwood oil.",
    createdAt: "2026-02-01T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p4",
    slug: "raatraani",
    name: "Raatraani",
    type: "Eau de Parfum",
    category: "EAU DE PARFUM",
    subcategory: "Eau de Parfum",
    fragranceFamily: "FLORAL",
    gender: "Feminine",
    occasion: "Evening",
    price: 3499,
    compareAtPrice: 3800,
    shortDescription: "Intoxicating night-blooming jasmine, white lily & tuberose.",
    description: "Inspired by the serene moonlit gardens of Jaipur havelis, Raatraani evokes the enchantment of white blossoms opening under starry night skies. Radiant, narcotic, and exquisitely elegant.",
    sku: "MEH-EDP-RAA-100",
    barcode: "890432100104",
    stock: 28,
    reservedQuantity: 1,
    lowStockThreshold: 4,
    weight: "0.40 kg",
    dimensions: "7 x 7 x 15 cm",
    mainImage: "/images/raatraani.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/raatraani.jpg",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800"
    ],
    sizeOptions: ["50ml EDP Spray", "100ml EDP Spray"],
    defaultSize: "100ml EDP Spray",
    variants: [
      { size: "50ml EDP Spray", price: 2399, compareAtPrice: 2700, sku: "MEH-EDP-RAA-50", stock: 14 },
      { size: "100ml EDP Spray", price: 3499, compareAtPrice: 3800, sku: "MEH-EDP-RAA-100", stock: 28 }
    ],
    notes: {
      top: ["Morning Dew Accord", "Green Violet Leaf", "Mandarin Zest"],
      heart: ["Night-Blooming Jasmine", "Royal Tuberose", "White Lily"],
      base: ["Soft Sandalwood", "Vanilla Orchid", "White Amber"]
    },
    ingredients: ["Alcohol Denat.", "Parfum (Fragrance)", "Aqua", "Jasmine Grandiflorum Extract", "Benzyl Salicylate", "Geraniol"],
    concentration: "Eau de Parfum (22% Extrait)",
    longevity: "8-12 Hours",
    sillage: "Intoxicating Nocturnal Trail",
    application: "Fine Spray",
    benefits: ["Authentic Night Jasmine absolute", "Sophisticated moonlit botanical scent"],
    howToWear: "Spray light clouds around shoulders and hair for an intoxicating nocturnal trail.",
    warnings: "Keep away from flame.",
    shippingInformation: "Ships in midnight blue velvet box.",
    returnEligibility: "Eligible for 7-day return.",
    tags: ["jasmine", "night-blooming", "floral", "edp"],
    collections: ["Nocturne Florals", "Jaipur Gardens"],
    isBestseller: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 86,
    colorTheme: "blue",
    seoTitle: "Raatraani Eau de Parfum | Night Blooming Jasmine & White Lily",
    seoDescription: "Raatraani EDP captures the intoxicating night-blooming jasmine flowers of Jaipur royal courtyards.",
    createdAt: "2026-02-14T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p5",
    slug: "oud-e-jaipur",
    name: "Oud-e-Jaipur",
    type: "Rare Oud Decanter",
    category: "OUD",
    subcategory: "Oud Attar",
    fragranceFamily: "OUD",
    gender: "Unisex",
    occasion: "Royal Occasions",
    price: 4999,
    compareAtPrice: 5500,
    shortDescription: "Rare Assam agarwood oud enriched with smoked spices & amber.",
    description: "A regal fragrance created for true connoisseurs. Wild-harvested Assam agarwood is aged for seven years before being combined with smoked leather, cardamom, and dark rose absolute.",
    sku: "MEH-OUD-JAI-12",
    barcode: "890432100105",
    stock: 18,
    reservedQuantity: 0,
    lowStockThreshold: 3,
    weight: "0.35 kg",
    dimensions: "7 x 7 x 15 cm",
    mainImage: "/images/oud-e-jaipur.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/oud-e-jaipur.jpg",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
    ],
    sizeOptions: ["6ml Concentrated Oil", "12ml Concentrated Oil", "24ml Brass Decanter"],
    defaultSize: "12ml Concentrated Oil",
    variants: [
      { size: "6ml Concentrated Oil", price: 2899, compareAtPrice: 3200, sku: "MEH-OUD-JAI-06", stock: 10 },
      { size: "12ml Concentrated Oil", price: 4989, compareAtPrice: 5500, sku: "MEH-OUD-JAI-12", stock: 18 },
      { size: "24ml Brass Decanter", price: 8499, compareAtPrice: 9500, sku: "MEH-OUD-JAI-24", stock: 5 }
    ],
    notes: {
      top: ["Black Cardamom", "Pink Pepper", "Calabrian Bergamot"],
      heart: ["Aged Assam Oud", "Taif Rose Absolute", "Incense Smoke"],
      base: ["Smoked Leather Accord", "Haitian Vetiver", "Golden Amber"]
    },
    ingredients: ["Aquilaria Agallocha (Oud) Wood Oil", "Rosa Damascena Flower Oil", "Spiced Botanical Extracts"],
    concentration: "Pure Aged Oud Resin Oil (100% Non-Alcoholic)",
    longevity: "24+ Hours on Skin / Days on Garments",
    sillage: "Regal & Majestic",
    application: "Solid Brass Dip Rod",
    benefits: ["7-Year Aged Wild Assam Agarwood", "Includes velvet keepsake pouch", "Collector edition brass bottle"],
    howToWear: "Apply a small touch on collar points and wrists. Excellent for layering with floral attars like Gul-e-Rooh.",
    warnings: "Highly potent concentrated oil. Use sparingly.",
    shippingInformation: "Ships in hand-carved wooden brass inlaid box.",
    returnEligibility: "Eligible for return if seal unbroken.",
    tags: ["oud", "agarwood", "royal", "bestseller", "decanter"],
    collections: ["Royal Oud Vault", "Assam Heritage"],
    isBestseller: true,
    isRoyalHouse: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 142,
    colorTheme: "emerald",
    seoTitle: "Oud-e-Jaipur Aged Assam Agarwood Attar | MEHRAAB Luxury",
    seoDescription: "Oud-e-Jaipur features 7-year aged wild Assam agarwood oud enriched with Taif rose and smoked incense.",
    createdAt: "2026-01-20T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p6",
    slug: "ivory-musk",
    name: "Ivory Musk",
    type: "Eau de Parfum",
    category: "MUSK",
    subcategory: "Pure Musk Collection",
    fragranceFamily: "MUSKY",
    gender: "Unisex",
    occasion: "Everyday",
    price: 3250,
    compareAtPrice: 3600,
    shortDescription: "Clean, serene white musk with subtle iris & fresh bergamot.",
    description: "Pure, tranquil, and modern. Ivory Musk honors the serene white marble courtyards of Rajsamand and Amer Fort. Soft cotton blossoms blend seamlessly with velvety iris and clean white musk.",
    sku: "MEH-EDP-IVO-100",
    barcode: "890432100106",
    stock: 40,
    reservedQuantity: 0,
    lowStockThreshold: 6,
    weight: "0.38 kg",
    dimensions: "7 x 7 x 14 cm",
    mainImage: "/images/ivory-musk.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/ivory-musk.jpg",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800"
    ],
    sizeOptions: ["50ml EDP Spray", "100ml EDP Spray"],
    defaultSize: "100ml EDP Spray",
    variants: [
      { size: "50ml EDP Spray", price: 2199, compareAtPrice: 2500, sku: "MEH-EDP-IVO-50", stock: 20 },
      { size: "100ml EDP Spray", price: 3250, compareAtPrice: 3600, sku: "MEH-EDP-IVO-100", stock: 40 }
    ],
    notes: {
      top: ["White Tea Accord", "Calabrian Bergamot", "Pear Blossom"],
      heart: ["Florentine Iris", "White Cotton Blossom", "Lily of the Valley"],
      base: ["Pure White Musk", "Himalayan Cedarwood", "Clean Amber"]
    },
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Musk Accord", "Linalool", "Citronellol"],
    concentration: "Eau de Parfum (20% Extrait)",
    longevity: "10+ Hours",
    sillage: "Clean & Serene Sillage",
    application: "Fine Spray",
    benefits: ["Ethical botanical white musk", "Clean non-intrusive luxury scent"],
    howToWear: "Perfect as an everyday luxury signature. Spray after bathing onto warm skin.",
    warnings: "External use only.",
    shippingInformation: "Ships in ivory textured box with gold foil lettering.",
    returnEligibility: "Eligible for 7-day return.",
    tags: ["musk", "white-musk", "clean", "everyday"],
    collections: ["Pure Musk Vault", "Ivory Marble Series"],
    isNew: true,
    inStock: true,
    rating: 4.7,
    reviewsCount: 65,
    colorTheme: "ivory",
    seoTitle: "Ivory Musk Eau de Parfum | White Musk & Florentine Iris",
    seoDescription: "Ivory Musk by MEHRAAB combines pure botanical white musk with iris and white tea accord for serene luxury.",
    createdAt: "2026-03-01T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p7",
    slug: "sapphire-oud",
    name: "Sapphire Oud",
    type: "Eau de Parfum",
    category: "OUD",
    subcategory: "Cambodian Oud",
    fragranceFamily: "OUD",
    gender: "Unisex",
    occasion: "Evening",
    price: 5499,
    compareAtPrice: 6200,
    shortDescription: "Deep Cambodian agarwood, frankincense, dark patchouli & amber.",
    description: "An intoxicating nocturnal potion inspired by Rajasthan's deep starry skies. Cambodian agarwood resins are balanced with sweet frankincense, dark patchouli, and spicy crushed pepper.",
    sku: "MEH-EDP-SAP-100",
    barcode: "890432100107",
    stock: 22,
    reservedQuantity: 1,
    lowStockThreshold: 4,
    weight: "0.48 kg",
    dimensions: "8 x 8 x 16 cm",
    mainImage: "/images/sapphire-oud.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/sapphire-oud.jpg",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800"
    ],
    sizeOptions: ["50ml EDP Spray", "100ml EDP Spray"],
    defaultSize: "100ml EDP Spray",
    variants: [
      { size: "50ml EDP Spray", price: 3699, compareAtPrice: 4200, sku: "MEH-EDP-SAP-50", stock: 10 },
      { size: "100ml EDP Spray", price: 5499, compareAtPrice: 6200, sku: "MEH-EDP-SAP-100", stock: 22 }
    ],
    notes: {
      top: ["Ceylon Cinnamon", "Crushed Black Pepper", "Bergamot"],
      heart: ["Cambodian Oud Resin", "Dark Patchouli", "Frankincense"],
      base: ["Ambergris Accord", "Smoked Benzoin", "Aged Sandalwood"]
    },
    ingredients: ["Alcohol Denat.", "Parfum", "Oud Extract", "Frankincense Resin", "Aqua"],
    concentration: "Eau de Parfum (28% Extrait)",
    longevity: "14-18 Hours",
    sillage: "Hypnotic Nocturnal Projection",
    application: "Fine Spray",
    benefits: ["Rare Cambodian Agarwood resin", "Hand-blown sapphire blue crystal glass"],
    howToWear: "Spray twice on collarbones and jacket lapels for an undeniable royal aura.",
    warnings: "Flammable.",
    shippingInformation: "Ships in royal blue velvet box.",
    returnEligibility: "Eligible for 7-day return.",
    tags: ["oud", "sapphire", "dark", "nocturnal"],
    collections: ["Royal Oud Vault", "Jewel Collection"],
    isNew: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 52,
    colorTheme: "blue",
    seoTitle: "Sapphire Oud Eau de Parfum | Cambodian Oud & Frankincense",
    seoDescription: "Sapphire Oud EDP features rare Cambodian agarwood, incense smoke and dark patchouli in a sapphire crystal bottle.",
    createdAt: "2026-03-10T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p8",
    slug: "royal-gifting-chest",
    name: "The Royal Jaipur Gift Box",
    type: "Luxury Gift Set",
    category: "GIFTING",
    subcategory: "Royal Chests",
    fragranceFamily: "ORIENTAL",
    gender: "Unisex",
    occasion: "Festive",
    price: 6499,
    compareAtPrice: 7500,
    shortDescription: "Curated 4-piece attar set presented in a royal blue velvet box.",
    description: "The epitome of royal Indian gifting. Houses four 12ml concentrated attar bottles (Gul-e-Rooh, Saffron Sandal, Oud-e-Jaipur, and Ivory Musk) in an ornate gold-embossed silk box with velvet cushioning.",
    sku: "MEH-GIFT-JAI-CHEST",
    barcode: "890432100108",
    stock: 35,
    reservedQuantity: 2,
    lowStockThreshold: 5,
    weight: "1.20 kg",
    dimensions: "24 x 18 x 10 cm",
    mainImage: "/images/royal-gift-box.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/royal-gift-box.jpg",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800"
    ],
    sizeOptions: ["4 x 12ml Attar Set"],
    defaultSize: "4 x 12ml Attar Set",
    variants: [
      { size: "4 x 12ml Attar Set", price: 6499, compareAtPrice: 7500, sku: "MEH-GIFT-JAI-CHEST", stock: 35 }
    ],
    notes: {
      top: ["Kashmir Rose", "Pampore Saffron", "Cardamom"],
      heart: ["Jasmine Absolute", "Taif Rose", "Assam Oud"],
      base: ["Mysore Sandalwood", "White Musk", "Golden Amber"]
    },
    ingredients: ["Includes 4 x 12ml Concentrated Attar Bottles (Gul-e-Rooh, Saffron Sandal, Oud-e-Jaipur, Ivory Musk)"],
    concentration: "100% Pure Concentrated Attar Oils",
    longevity: "16+ Hours",
    sillage: "Varies per Attar",
    application: "Glass Wand",
    benefits: ["Handmade royal blue velvet box", "Includes custom calligraphy gift note", "Comprehensive royal fragrance wardrobe"],
    howToWear: "Indulge in fragrance wardrobe layering or gift to distinguished hosts.",
    warnings: "Store flat in dry environment.",
    shippingInformation: "Ships in protective outer box with silk ribbon decoration.",
    returnEligibility: "Returnable if un-opened.",
    tags: ["gift", "gift-set", "bestseller", "wedding", "festive"],
    collections: ["Royal Gifting Vault", "Jaipur Heritage"],
    isBestseller: true,
    inStock: true,
    rating: 5.0,
    reviewsCount: 118,
    colorTheme: "gold",
    seoTitle: "The Royal Jaipur Gift Box | 4-Piece Luxury Attar Chest",
    seoDescription: "The ultimate luxury gift box containing 4 signature 12ml MEHRAAB attars in a handcrafted gold-embossed royal blue velvet chest.",
    createdAt: "2026-01-05T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p9",
    slug: "discovery-set-attar",
    name: "Royal Attar Discovery Set",
    type: "Discovery Set",
    category: "DISCOVERY SETS",
    subcategory: "Sampler Sets",
    fragranceFamily: "FLORAL",
    gender: "Unisex",
    occasion: "Everyday",
    price: 1899,
    compareAtPrice: 2200,
    shortDescription: "5 iconic 3ml attar sample vials with ₹500 full-bottle voucher.",
    description: "Sample the signature scents of MEHRAAB at home. Includes 5 concentrated 3ml attar vials in a gold embossed presentation sleeve.",
    sku: "MEH-DISC-ATT-5",
    barcode: "890432100109",
    stock: 50,
    reservedQuantity: 0,
    lowStockThreshold: 10,
    weight: "0.30 kg",
    dimensions: "18 x 12 x 4 cm",
    mainImage: "/images/royal-gift-box.jpg",
    secondaryImage: "/images/gul-e-rooh.jpg",
    gallery: [
      "/images/royal-gift-box.jpg",
      "/images/gul-e-rooh.jpg"
    ],
    sizeOptions: ["5 x 3ml Discovery Vials"],
    defaultSize: "5 x 3ml Discovery Vials",
    variants: [
      { size: "5 x 3ml Discovery Vials", price: 1899, compareAtPrice: 2200, sku: "MEH-DISC-ATT-5", stock: 50 }
    ],
    notes: {
      top: ["Rose", "Saffron", "Jasmine", "Cardamom"],
      heart: ["Damask Rose", "Night Blossom", "Agarwood"],
      base: ["Sandalwood", "Amber", "Musk"]
    },
    ingredients: ["5 x 3ml pure concentrated attar samples including Gul-e-Rooh, Saffron Sandal, Oud-e-Jaipur, Ivory Musk, Mitti Royale"],
    concentration: "100% Pure Attar Oil",
    longevity: "12+ Hours",
    sillage: "Intimate",
    application: "Glass Applicators",
    benefits: ["Includes ₹500 voucher redeemable on your full bottle purchase", "Explore 5 iconic fragrances"],
    howToWear: "Test each attar on clean skin across different days to discover your signature scent profile.",
    warnings: "External use only.",
    shippingInformation: "Ships in compact gold foil sleeve.",
    returnEligibility: "Non-returnable item once opened.",
    tags: ["discovery", "samples", "attar", "trial"],
    collections: ["Discovery & Sampling"],
    inStock: true,
    rating: 4.8,
    reviewsCount: 72,
    colorTheme: "gold",
    seoTitle: "Royal Attar Discovery Set | 5 Iconic 3ml Samples with Voucher",
    seoDescription: "Try MEHRAAB's 5 iconic attar creations with our Royal Discovery Set. Comes with a ₹500 coupon for your full bottle.",
    createdAt: "2026-02-20T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  },
  {
    id: "p10",
    slug: "mitti-royale",
    name: "Mitti Royale",
    type: "Petrichor Attar",
    category: "ATTAR",
    subcategory: "Terracotta Attar",
    fragranceFamily: "FRESH",
    gender: "Unisex",
    occasion: "Everyday",
    price: 2799,
    compareAtPrice: 3100,
    shortDescription: "Baked terracotta petrichor attar capturing monsoon rain on soil.",
    description: "Authentic Kannauj baked soil distillate capturing the exact smell of first monsoon rain on parched Indian earth, distilled into pure sandalwood oil.",
    sku: "MEH-ATT-MIT-12",
    barcode: "890432100110",
    stock: 25,
    reservedQuantity: 0,
    lowStockThreshold: 4,
    weight: "0.24 kg",
    dimensions: "6 x 6 x 12 cm",
    mainImage: "/images/saffron-sandal.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "/images/saffron-sandal.jpg"
    ],
    sizeOptions: ["6ml Concentrated Oil", "12ml Concentrated Oil"],
    defaultSize: "12ml Concentrated Oil",
    variants: [
      { size: "6ml Concentrated Oil", price: 1699, compareAtPrice: 1900, sku: "MEH-ATT-MIT-06", stock: 12 },
      { size: "12ml Concentrated Oil", price: 2799, compareAtPrice: 3100, sku: "MEH-ATT-MIT-12", stock: 25 }
    ],
    notes: {
      top: ["Baked Earth Petrichor", "Raindrop Accord", "Vetiver Root"],
      heart: ["Sun-baked Terracotta Clay", "Fresh Grass", "White Lotus"],
      base: ["Pure Mysore Sandalwood", "Clean Amber"]
    },
    ingredients: ["Baked Terracotta Distillate", "Santalum Album Seed Oil"],
    concentration: "Pure Attar Oil (100% Non-Alcoholic)",
    longevity: "10-12 Hours",
    sillage: "Nostalgic Grounding Aura",
    application: "Glass Wand",
    benefits: ["Authentic Kannauj baked soil distillate", "Captures the exact aroma of first monsoon rain on parched Indian earth"],
    howToWear: "Apply to wrists during warm days or quiet moments for deep mental clarity.",
    warnings: "Store in cool environment.",
    shippingInformation: "Ships in clay-inspired warm ivory box.",
    returnEligibility: "Eligible for 7-day return.",
    tags: ["mitti", "petrichor", "monsoon", "attar", "fresh"],
    collections: ["Kannauj Hydro-Distillation", "Earth & Rain"],
    isBestseller: true,
    inStock: true,
    rating: 4.9,
    reviewsCount: 104,
    colorTheme: "ivory",
    seoTitle: "Mitti Royale Monsoon Petrichor Attar | The Smell of Rain on Earth",
    seoDescription: "Mitti Royale captures the intoxicating aroma of first monsoon rain on warm Indian soil, distilled in Kannauj.",
    createdAt: "2026-02-10T00:00:00Z",
    updatedAt: "2026-09-28T00:00:00Z"
  }
];

export const FRAGRANCE_FAMILIES = [
  { id: "ALL", name: "All Fragrances" },
  { id: "ATTAR", name: "Pure Attar" },
  { id: "EAU DE PARFUM", name: "Eau de Parfum" },
  { id: "OUD", name: "Oud Collection" },
  { id: "MUSK", name: "Pure Musk" },
  { id: "GIFTING", name: "Royal Gifting" },
  { id: "DISCOVERY SETS", name: "Discovery Sets" }
];
