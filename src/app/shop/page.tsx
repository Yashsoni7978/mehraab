"use client";

import React, { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SlidersHorizontal, ArrowRight } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "ALL";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState<number>(7000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const categories = [
    {
      id: "ATTAR",
      name: "ATTAR",
      subtitle: "Pure Botanical Concentrated Oils",
      image: "/images/gul-e-rooh.jpg",
      href: "/collections/attar",
    },
    {
      id: "EAU DE PARFUM",
      name: "EAU DE PARFUM",
      subtitle: "Modern Royal Spray Formulations",
      image: "/images/mehraab-edp.jpg",
      href: "/collections/perfumes",
    },
    {
      id: "OUD",
      name: "OUD",
      subtitle: "Assam & Cambodian Wild Agarwood",
      image: "/images/oud-e-jaipur.jpg",
      href: "/collections/oud",
    },
    {
      id: "GIFTING",
      name: "GIFTING",
      subtitle: "Velvet Chests & Royal Token Sets",
      image: "/images/combo gifting box.png",
      href: "/collections/gifting",
    },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (activeCategory !== "ALL" && product.category !== activeCategory) {
        return false;
      }
      if (product.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });
  }, [activeCategory, maxPrice, sortBy]);

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-12 bg-[#FFF9F1] border-b border-[#C49A52]/25 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
              THE MEHRAAB COLLECTION
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#17345F] leading-[1.08]">
              Fragrances for every story.
            </h1>
            <p className="text-xs sm:text-sm text-[#756B63] max-w-xl font-light leading-relaxed">
              Hand-distilled in traditional copper stills and hand-aged in pure Mysore sandalwood. Discover our full olfactive repertoire from royal Jaipur.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-[#C49A52]">
              <span className="h-[1px] w-8 bg-[#C49A52]"></span>
              <span>EST. KANNAUJ & JAIPUR</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C49A52]/30 shadow-md">
              <Image
                src="/images/heritage with ingrediants.png"
                alt="Mehraab Fragrance Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center filter contrast-[1.03]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Category Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
            OLFACTIVE CATEGORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#17345F] font-light">
            SHOP BY CATEGORY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative bg-[#FFF9F1] border border-[#C49A52]/25 p-5 text-center space-y-4 hover:border-[#C49A52] transition-all duration-300"
            >
              {/* Arched Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full border border-[#C49A52]/20">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#17345F] group-hover:text-[#C49A52] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-[#756B63] font-light line-clamp-1 italic font-serif">
                  {cat.subtitle}
                </p>
              </div>

              <div className="inline-flex items-center text-[10px] font-mono tracking-[0.2em] text-[#C49A52] uppercase gap-1 group-hover:text-[#17345F]">
                <span>EXPLORE</span>
                <ArrowRight className="w-3 h-3 stroke-[1.4]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto border-t border-[#C49A52]/20 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              ALL FORMULATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17345F] font-light">
              ALL FRAGRANCES
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#C49A52] uppercase tracking-wider text-[10px]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>MAX PRICE: ₹ {maxPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="7000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-28 accent-[#17345F]"
            />

            <div className="flex items-center gap-2 pl-4 border-l border-[#C49A52]/20">
              <span className="text-[#756B63] uppercase tracking-wider text-[10px]">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-[#17345F] font-mono text-xs focus:outline-none cursor-pointer"
              >
                <option value="featured">FEATURED</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 text-[11px] font-mono tracking-[0.18em] uppercase">
          {["ALL", "ATTAR", "EAU DE PARFUM", "OUD", "GIFTING"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 transition-colors whitespace-nowrap border ${
                activeCategory === cat
                  ? "bg-[#17345F] text-[#F8F1E7] border-[#17345F]"
                  : "bg-[#FFF9F1] text-[#17345F] border-[#C49A52]/30 hover:border-[#C49A52]"
              }`}
            >
              {cat === "ALL" ? "ALL FRAGRANCES" : cat}
            </button>
          ))}
        </div>

        {/* Product Grid (4-col Desktop, 3-col Tablet, 2-col Mobile) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4 bg-[#FFF9F1] border border-[#C49A52]/20">
            <p className="font-serif text-2xl font-light text-[#17345F]">No fragrances match your selected criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("ALL");
                setMaxPrice(7000);
              }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-[#C49A52] border-b border-[#C49A52] pb-0.5"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-24 text-center font-serif text-[#17345F]">Loading Mehraab Collection...</div>}>
      <ShopContent />
    </Suspense>
  );
}


