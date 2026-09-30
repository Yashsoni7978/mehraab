"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, ShoppingBag } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export default function GiftingPage() {
  const { addToCart } = useShop();

  // Custom Gift Set Selection State (Pick 3 attars)
  const attarProducts = PRODUCTS.filter((p) => p.category === "ATTAR" || p.category === "OUD");
  const [selectedAttars, setSelectedAttars] = useState<Product[]>([attarProducts[0], attarProducts[1], attarProducts[2]]);

  const toggleAttarSelection = (prod: Product) => {
    if (selectedAttars.some((p) => p.id === prod.id)) {
      if (selectedAttars.length > 1) {
        setSelectedAttars(selectedAttars.filter((p) => p.id !== prod.id));
      }
    } else {
      if (selectedAttars.length < 3) {
        setSelectedAttars([...selectedAttars, prod]);
      }
    }
  };

  const giftSetPrice = 5999;

  const handleAddCustomBox = () => {
    // Create a custom gift set item
    const customGiftSetProduct: Product = {
      id: `custom-box-${Date.now()}`,
      slug: "royal-gifting-chest",
      name: `Custom Jaipur Box (${selectedAttars.map((a) => a.name).join(", ")})`,
      type: "Custom Gift Set",
      category: "GIFTING",
      fragranceFamily: "FLORAL",
      gender: "Unisex",
      occasion: "Festive",
      price: giftSetPrice,
      sku: `MEH-GIFT-CUST-${Date.now()}`,
      barcode: "890432109999",
      stock: 50,
      reservedQuantity: 0,
      lowStockThreshold: 5,
      weight: "1.20 kg",
      dimensions: "24 x 18 x 10 cm",
      mainImage: "/images/royal-gift-box.jpg",
      secondaryImage: "/images/gul-e-rooh.jpg",
      gallery: ["/images/royal-gift-box.jpg"],
      variants: [{ size: "3 x 12ml Attar Set", price: giftSetPrice, sku: `MEH-GIFT-CUST-${Date.now()}`, stock: 50 }],
      sizeOptions: ["3 x 12ml Attar Set"],
      defaultSize: "3 x 12ml Attar Set",
      rating: 5.0,
      reviewsCount: 1,
      shortDescription: "Custom curated 3-piece attar set in velvet royal box.",
      description: `Personalized gift box containing: ${selectedAttars.map((a) => a.name).join(", ")}.`,
      notes: { top: ["Custom Selection"], heart: ["Royal Fragrance"], base: ["Jaipur Craft"] },
      ingredients: ["3 x 12ml Pure Attar Bottles"],
      concentration: "100% Pure Attar Oil",
      longevity: "16+ Hours",
      sillage: "Royal Sillage",
      application: "Glass Wand",
      benefits: ["Bespoke curation"],
      howToWear: "Apply on pulse points.",
      warnings: "Store flat.",
      shippingInformation: "Ships in royal box.",
      returnEligibility: "Eligible for return if un-opened.",
      tags: ["custom", "gift"],
      collections: ["Royal Gifting"],
      inStock: true,
      colorTheme: "gold",
      seoTitle: "Custom Jaipur Gift Chest | MEHRAAB",
      seoDescription: "Custom curated 3-piece attar set in royal blue velvet box.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    addToCart(customGiftSetProduct);
  };

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold">
            ROYAL GIFTING SERVICE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#17345F]">
            MORE THAN A GIFT. <br />
            <span className="text-[#B94D70]">A LASTING IMPRESSION.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed">
            Thoughtfully curated fragrance sets presented in handcrafted silk and velvet gift chests, complete with personalized royal calligraphy gift notes.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 rounded-lg text-center space-y-2 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-[#17345F]">ROYAL WEDDINGS</h3>
            <p className="text-xs text-[#756B63]">Customized bride & groom attar favors with gold embossed crests.</p>
          </div>
          <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 rounded-lg text-center space-y-2 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-[#17345F]">FESTIVE CELEBRATIONS</h3>
            <p className="text-xs text-[#756B63]">Diwali, Eid, and New Year royal fragrance hampers.</p>
          </div>
          <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 rounded-lg text-center space-y-2 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-[#17345F]">CORPORATE HONORS</h3>
            <p className="text-xs text-[#756B63]">Bespoke executive gift boxes for valued partners and guests.</p>
          </div>
          <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 rounded-lg text-center space-y-2 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-[#17345F]">PERSONAL TOKENS</h3>
            <p className="text-xs text-[#756B63]">Anniversary and birthday fragrance sets engraved with initials.</p>
          </div>
        </div>

        {/* Custom Gift Set Builder Interactive Section */}
        <div className="bg-[#FFF9F1] border border-[#C49A52]/40 rounded-xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="bg-[#17345F] text-[#DDBD78] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C49A52]" />
              INTERACTIVE BUILDER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#17345F] mt-2">
              CREATE YOUR CUSTOM GIFT BOX
            </h2>
            <p className="text-xs text-[#756B63]">
              Select exactly 3 concentrated attars (12ml each) to be nested inside your royal blue velvet presentation chest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {attarProducts.map((attar) => {
              const isSelected = selectedAttars.some((p) => p.id === attar.id);
              return (
                <button
                  key={attar.id}
                  onClick={() => toggleAttarSelection(attar)}
                  className={`p-4 rounded-lg border text-center transition-all flex flex-col justify-between relative ${
                    isSelected
                      ? "bg-[#17345F] text-[#FFF9F1] border-[#17345F] shadow-md"
                      : "bg-[#F8F1E7] border-[#C49A52]/30 text-[#241C1B] hover:border-[#C49A52]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#C49A52] text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}

                  <div className="relative aspect-square w-full rounded overflow-hidden mb-3 bg-white">
                    <Image src={attar.mainImage} alt={attar.name} fill className="object-cover" />
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold">{attar.name}</h4>
                    <p className={`text-[10px] ${isSelected ? "text-[#DDBD78]" : "text-[#756B63]"}`}>
                      {attar.type}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Builder Summary & Add CTA */}
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs text-[#756B63] uppercase font-semibold">YOUR SELECTION ({selectedAttars.length}/3):</span>
              <p className="font-serif text-lg font-bold text-[#17345F] mt-0.5">
                {selectedAttars.map((a) => a.name).join(" • ")}
              </p>
            </div>

            <div className="flex items-center gap-6 w-full sm:w-auto">
              <div className="text-right">
                <span className="text-[10px] text-[#756B63] uppercase block">TOTAL GIFT BOX</span>
                <span className="font-serif text-2xl font-bold text-[#241C1B]">
                  ₹ {giftSetPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={handleAddCustomBox}
                className="flex-1 sm:flex-none py-3.5 px-8 bg-[#B94D70] text-[#FFF9F1] text-xs font-semibold tracking-[0.2em] uppercase rounded hover:bg-[#8F304F] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD BOX TO BAG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
