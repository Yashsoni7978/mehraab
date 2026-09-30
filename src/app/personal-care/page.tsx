"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";

export default function PersonalCareCategoryPage() {
  const items = PRODUCTS.filter(p => p.category === "PERSONAL CARE" || p.category === "INCENSE");

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#241C1B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C49A52]" />
            HOME &amp; BODY SANCTUARY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#17345F]">
            PERSONAL CARE &amp; HOME FRAGRANCE
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] max-w-md mx-auto">
            Infuse your personal rituals with hand-rolled incense sticks, body elixirs, and sacred sandalwood ritual accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
