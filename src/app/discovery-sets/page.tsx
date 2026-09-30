"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles, Gift } from "lucide-react";

export default function DiscoverySetsCategoryPage() {
  const sets = PRODUCTS.filter(p => p.category === "DISCOVERY SETS" || p.name.toLowerCase().includes("discovery"));

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#241C1B] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C49A52]" />
            SAMPLING &amp; WARDROBES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#17345F]">
            ROYAL DISCOVERY SETS
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] max-w-md mx-auto">
            Explore 5 iconic attar vials at home. Every discovery set includes a voucher redeemable on your full bottle order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
