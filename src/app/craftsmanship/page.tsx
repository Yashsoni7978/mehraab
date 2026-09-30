"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Droplets, Flame, Award } from "lucide-react";

export default function CraftsmanshipPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#17345F] text-[#F8F1E7] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono">
            ROYAL HERITAGE DISTILLATION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-tight">
            CRAFTED BY HAND. <br />
            <span className="italic text-[#C49A52]">MADE TO BE REMEMBERED.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl mx-auto font-light leading-relaxed">
            From dawn blossom gathering in Rajasthan to copper hydro-distillation in Kannauj and hand-bottling in crystal flacons.
          </p>
        </div>
      </section>

      {/* Main Process Narrative */}
      <section className="py-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#C49A52]/30 shadow-md">
            <Image
              src="/images/artist bottle filling.png"
              alt="Indian Master Perfumer hand-filling flacons"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover filter contrast-[1.03]"
            />
          </div>

          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              THE FOUR PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#17345F]">
              TRADITIONAL DEG-BHAPKA METHOD
            </h2>
            <div className="space-y-4 text-xs text-[#756B63] leading-relaxed">
              <div className="p-5 bg-[#FFF9F1] border border-[#C49A52]/25 space-y-1">
                <h4 className="font-serif font-medium text-base text-[#17345F]">1. HARVESTING AT DAWN</h4>
                <p>Damask roses and night jasmines are hand-picked at dawn before the sun dissipates fragile essential aroma oils.</p>
              </div>
              <div className="p-5 bg-[#FFF9F1] border border-[#C49A52]/25 space-y-1">
                <h4 className="font-serif font-medium text-base text-[#17345F]">2. COPPER STILL DISTILLATION</h4>
                <p>Fresh petals are submerged in copper degs sealed with clay mud and heated gently over wood fires.</p>
              </div>
              <div className="p-5 bg-[#FFF9F1] border border-[#C49A52]/25 space-y-1">
                <h4 className="font-serif font-medium text-base text-[#17345F]">3. SANDALWOOD BINDING</h4>
                <p>Aromatic vapors pass through bamboo pipes into receivers containing pure Mysore sandalwood oil.</p>
              </div>
              <div className="p-5 bg-[#FFF9F1] border border-[#C49A52]/25 space-y-1">
                <h4 className="font-serif font-medium text-base text-[#17345F]">4. JAIPUR VAULT AGING</h4>
                <p>Attars are aged in camel-leather kuppi containers under Rajasthan sunlight to mature into deep complexity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Visual Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#FFF9F1] border border-[#C49A52]/30 p-8 sm:p-12">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              RIGOROUS QUALITY
            </span>
            <h3 className="font-serif text-3xl font-light text-[#17345F]">
              HAND-BOTTLING & SEALING
            </h3>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              Every single bottle of MEHRAAB attar is hand-poured using glass pipettes into gold-trimmed crystal flacons, inspected for clarity, and sealed with custom engraved brass caps.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#17345F] hover:text-[#C49A52]"
              >
                <span>EXPLORE HANDCRAFTED CREATIONS</span>
                <ArrowRight className="w-4 h-4 stroke-[1.4]" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#C49A52]/20">
            <Image
              src="/images/craftsmanship.jpg"
              alt="Copper deg distillation stills"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

