"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function NewArrivalsPage() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew || p.id === "p1" || p.id === "p2" || p.id === "p6");

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 sm:px-10 lg:px-12 bg-[#FFF9F1] border-b border-[#C49A52]/25 text-center space-y-4">
        <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
          NEW HARVEST DISTILLATIONS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#17345F]">
          NEW ARRIVALS
        </h1>
        <p className="text-xs sm:text-sm text-[#756B63] max-w-xl mx-auto font-light leading-relaxed">
          Newly aged attars, fresh monsoon harvest rose extracts, and limited batch agarwood formulations.
        </p>
      </section>

      {/* Product Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono tracking-[0.2em] text-[#C49A52] uppercase">
            {newArrivals.length} RECENT CREATIONS
          </span>
          <Link href="/shop" className="text-xs font-mono tracking-[0.2em] text-[#17345F] hover:text-[#C49A52]">
            VIEW ALL SHOP →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
