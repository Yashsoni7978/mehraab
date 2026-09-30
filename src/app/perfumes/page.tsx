"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles, ArrowRight, Sun, Moon, Compass } from "lucide-react";

export default function PerfumesCategoryPage() {
  const edps = PRODUCTS.filter(
    (p) => p.category === "EAU DE PARFUM" || p.type.includes("Eau de Parfum")
  );

  const [activeFilter, setActiveFilter] = useState<"ALL" | "DAY" | "EVENING" | "UNISEX">("ALL");

  const filteredEdps = edps.filter((p) => {
    if (activeFilter === "DAY") return p.occasion === "Everyday" || p.fragranceFamily === "FRESH" || p.fragranceFamily === "FLORAL";
    if (activeFilter === "EVENING") return p.occasion === "Evening" || p.occasion === "Royal Occasions" || p.fragranceFamily === "SPICY" || p.fragranceFamily === "OUD";
    if (activeFilter === "UNISEX") return p.gender === "Unisex";
    return true;
  });

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Category Hero */}
      <section className="relative pt-32 pb-20 bg-[#102746] text-[#F8F1E7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
              HIGH-CONCENTRATION EXTRAIT
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-[1.08]">
              A MODERN ROYAL FRAGRANCE.
            </h1>
            <p className="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl font-light leading-relaxed">
              Radiant modern fine fragrances blending rare Indian florals, wild spices, and precious agarwood extracts into high-concentration extrait spray formulations.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs font-mono tracking-[0.2em] text-[#C49A52]">
              <span className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#C49A52]" />
                <span>DAY & NIGHT EDITIONS</span>
              </span>
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C49A52]" />
                <span>UNISEX SILVAGE</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C49A52]/40 shadow-xl">
              <Image
                src="/images/mehraab-edp.jpg"
                alt="Mehraab Eau de Parfum Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover filter contrast-[1.03]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#FFF9F1] border-b border-[#C49A52]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-wrap items-center justify-center gap-4 text-xs font-mono tracking-[0.2em] uppercase">
          {[
            { id: "ALL", label: "ALL PERFUMES" },
            { id: "DAY", label: "DAY TIME FRAGRANCES" },
            { id: "EVENING", label: "EVENING & ROYAL OCCASIONS" },
            { id: "UNISEX", label: "UNISEX EDITIONS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 transition-colors border ${
                activeFilter === tab.id
                  ? "bg-[#17345F] text-[#F8F1E7] border-[#17345F]"
                  : "bg-[#F8F1E7] text-[#17345F] border-[#C49A52]/30 hover:border-[#C49A52]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Collection Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              PARFUM ARCHIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17345F] font-light mt-1">
              EAU DE PARFUM CREATIONS ({filteredEdps.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredEdps.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

