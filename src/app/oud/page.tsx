"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Flame, Shield, Award } from "lucide-react";

export default function OudCategoryPage() {
  const ouds = PRODUCTS.filter(
    (p) => p.category === "OUD" || p.fragranceFamily === "OUD" || p.name.toLowerCase().includes("oud")
  );

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Category Hero */}
      <section className="relative pt-32 pb-20 bg-[#17345F] text-[#F8F1E7] overflow-hidden border-b border-[#C49A52]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
              ASSAM & CAMBODIAN AGARWOOD
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-[1.08]">
              DARK. RARE. DISTINCT.
            </h1>
            <p className="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl font-light leading-relaxed">
              Wild-harvested agarwood resins aged across decades, steeped in smoked frankincense, Taif rose, and dark amber. An unmistakable olfactive signature for true royal connoisseurs.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs font-mono tracking-[0.2em] text-[#C49A52]">
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C49A52]" />
                <span>SMOKED RESINS</span>
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C49A52]" />
                <span>AGED 15+ YEARS</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C49A52]/40 shadow-xl">
              <Image
                src="/images/oud-e-jaipur.jpg"
                alt="Mehraab Rare Oud Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover filter contrast-[1.04]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scent Profile & Craft Narrative */}
      <section className="py-16 bg-[#FFF9F1] border-b border-[#C49A52]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 space-y-2 text-center">
            <h3 className="font-serif text-xl font-normal text-[#17345F]">WILD ASSAM ORIGIN</h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Ethically harvested from naturally resinous Aquilaria trees in the old forests of Assam.
            </p>
          </div>
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 space-y-2 text-center">
            <h3 className="font-serif text-xl font-normal text-[#17345F]">DEEP LEATHER & BARK</h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Enriched with birch tar, sweet saffron, and dark labdanum amber for intense depth.
            </p>
          </div>
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 space-y-2 text-center">
            <h3 className="font-serif text-xl font-normal text-[#17345F]">ROYAL CONNOISSEUR</h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Formulated for major formal evening gatherings, winter galas, and momentous celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              RARE AGARWOOD VAULT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17345F] font-light mt-1">
              OUD CREATIONS ({ouds.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {ouds.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

