"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles, ArrowRight, ShieldCheck, Droplet, Clock } from "lucide-react";

export default function AttarCategoryPage() {
  const attars = PRODUCTS.filter(
    (p) => p.category === "ATTAR" || p.type.toLowerCase().includes("attar")
  );

  const ingredients = [
    { name: "Damask Rose", note: "Floral • Velvet • Royal", image: "/images/rose ingrediant.png" },
    { name: "Kashmiri Saffron", note: "Spicy • Golden • Warm", image: "/images/saffron sandal.jpg" },
    { name: "Mysore Sandalwood", note: "Woody • Creamy • Sacred", image: "/images/craftsmanship.jpg" },
    { name: "Assam Agarwood", note: "Dark • Smoked • Regal", image: "/images/oud-e-jaipur.jpg" },
    { name: "Royal Jasmine", note: "Indolic • White Floral", image: "/images/raatraani.jpg" },
  ];

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#17345F] text-[#F8F1E7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
              THE HERITAGE OF KANNAUJ & JAIPUR
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-[1.08]">
              THE ART OF ATTAR.
            </h1>
            <p className="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl font-light leading-relaxed">
              100% alcohol-free botanical perfume oils distilled in traditional copper degs and aged in pure Mysore sandalwood oil. An intimate scent ritual born in royal Rajasthan.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs font-mono tracking-[0.2em] text-[#C49A52]">
              <span className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-[#C49A52]" />
                <span>100% NATURAL</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C49A52]" />
                <span>12+ HR LONGEVITY</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C49A52]/40 shadow-xl">
              <Image
                src="/images/gul-e-rooh.jpg"
                alt="The Art of Attar - Mehraab Royal Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover filter contrast-[1.03]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Story Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
            BOTANICAL ESSENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#17345F]">
            SACRED BOTANICAL HARVEST
          </h2>
          <p className="text-xs text-[#756B63] max-w-md mx-auto font-light italic font-serif">
            Distilled using centuries-old hydro-distillation and aged in copper vessels.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="bg-[#FFF9F1] border border-[#C49A52]/25 p-4 text-center space-y-3 hover:border-[#C49A52] transition-colors"
            >
              <div className="relative aspect-square w-full overflow-hidden border border-[#C49A52]/20">
                <Image src={ing.image} alt={ing.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-base text-[#17345F] font-normal">{ing.name}</h3>
                <p className="text-[10px] text-[#C49A52] font-mono tracking-wider">{ing.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="py-16 bg-[#FFF9F1] border-y border-[#C49A52]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 space-y-2 text-center">
            <h3 className="font-serif text-xl font-normal text-[#17345F]">COPPER DEG DISTILLATION</h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Flowers are harvested at dawn and distilled over wood fires in traditional Kannauj stills.
            </p>
          </div>
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 space-y-2 text-center">
            <h3 className="font-serif text-xl font-normal text-[#17345F]">MYSORE SANDALWOOD BASE</h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Every drop is absorbed into pure sandalwood oil, maturing into a creamy, velvety finish.
            </p>
          </div>
          <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/30 space-y-2 text-center">
            <h3 className="font-serif text-xl font-normal text-[#17345F]">GLASS WAND APPLICATION</h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Applied directly to pulse points, collarbones, and hair edges using crystal glass dipsticks.
            </p>
          </div>
        </div>
      </section>

      {/* Attars Catalogue */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              CURATED ESSENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17345F] font-light">
              ALL BOTANICAL ATTARS ({attars.length})
            </h2>
          </div>

          <Link
            href="/shop?category=ATTAR"
            className="text-xs font-mono tracking-[0.2em] text-[#C49A52] hover:text-[#17345F] uppercase flex items-center gap-1.5"
          >
            <span>FILTER ATTARS</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[1.4]" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {attars.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#FFF9F1] border-t border-[#C49A52]/25">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              KNOWLEDGE & RITUALS
            </span>
            <h2 className="font-serif text-3xl text-[#17345F] font-light">ATTAR FREQUENT QUESTIONS</h2>
          </div>

          <div className="space-y-4 text-xs font-light text-[#756B63]">
            <div className="p-5 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-1">
              <h4 className="font-serif text-base text-[#17345F] font-medium">How is Attar different from Western perfume spray?</h4>
              <p>Attar is 100% pure oil without ethanol or synthetic solvents. It sits intimate to the skin, lasts longer, and matures beautifully as it reacts with body heat.</p>
            </div>
            <div className="p-5 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-1">
              <h4 className="font-serif text-base text-[#17345F] font-medium">How do I apply pure attar?</h4>
              <p>Dab a tiny drop using the glass wand onto your wrists, behind earlobes, or onto fabric seams. Avoid rubbing wrists together so the top notes unfold naturally.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

