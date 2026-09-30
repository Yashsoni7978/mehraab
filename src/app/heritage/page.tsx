"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeritagePage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#17345F] text-[#F8F1E7] text-center space-y-4">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono">
            ROYAL RAJASTHAN ARCHIVES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-tight">
            HERITAGE OF THE ROYAL COURTS
          </h1>
          <p className="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl mx-auto font-light leading-relaxed">
            Centuries of scent rituals in Jaipur, Amber, and Kannauj—where fragrance was woven into court etiquette, poetry, and royal architecture.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              THE MEHRAAB SYMBOL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#17345F]">
              ARCHITECTURAL HARMONY
            </h2>
            <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed">
              In Rajput and Mughal architecture, the <em>mehraab</em> (ornamental arch) represents a sacred threshold—a gateway separating the outer courtyard from the intimate royal inner sanctum.
            </p>
            <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed">
              In perfumery, our fragrances serve the exact same purpose: a sensory threshold transporting the wearer into moments of serenity, grace, and regal grandeur.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C49A52]/30 shadow-md">
              <Image
                src="/images/heritage with ingrediants.png"
                alt="Mehraab Royal Heritage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter contrast-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* Historical Court Rituals */}
        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] tracking-[0.3em] text-[#8F304F] uppercase font-mono">
              COURT PERFUMERY RITUALS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#17345F]">
              THE FRAGRANT ROYAL DAY
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs">
            <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#17345F]">MORNING ITRA-DAN</h4>
              <p className="text-[#756B63] font-light">Silver and crystal vials of rose and kewra attar offered to court guests as tokens of honor.</p>
            </div>
            <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#17345F]">PALACE FOUNTAINS</h4>
              <p className="text-[#756B63] font-light">Court fountains infused with rose water to cool afternoon breezes passing into jharokha balconies.</p>
            </div>
            <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#17345F]">EVENING OUD INCENSE</h4>
              <p className="text-[#756B63] font-light">Smoked agarwood and frankincense burned in brass censers as dusk descended over Jaipur fortress walls.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#17345F] text-[#F8F1E7] hover:bg-[#C49A52] hover:text-[#17345F] text-xs font-mono tracking-[0.2em] uppercase transition-colors"
          >
            <span>EXPLORE ROYAL HERITAGE COLLECTION</span>
            <ArrowRight className="w-4 h-4 stroke-[1.4]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
