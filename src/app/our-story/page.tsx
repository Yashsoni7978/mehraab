"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Droplets, Compass } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Editorial Hero Header */}
      <section className="relative pt-32 pb-20 bg-[#17345F] text-[#F8F1E7] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono">
            OUR STORY & HERITAGE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F8F1E7] leading-tight">
            THE ART OF ROYAL PERFUMERY
          </h1>
          <p className="text-xs sm:text-sm font-serif italic text-[#C49A52] max-w-xl mx-auto font-light">
            A contemporary tribute to India&apos;s century-old fragrance archives and Rajasthan&apos;s regal traditions.
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              THE INSPIRATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#17345F]">
              BORN IN THE PINK CITY
            </h2>
            <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed">
              Mehraab was founded with a singular vision: to elevate India&apos;s authentic attar traditions into the world of contemporary luxury fragrance. Inspired by the architectural archways (mehraabs) of Rajasthan&apos;s royal palaces, our creations serve as gateways to olfactory memories.
            </p>
            <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed">
              Each flacon captures the soul of Jaipur—sun-warmed sandstone courtyards, velvet Damask rose petals, golden Kashmir saffron, and pure Mysore sandalwood.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-[#C49A52]/30 shadow-md">
            <Image
              src="/images/heritage with ingrediants.png"
              alt="Mehraab Jaipur Heritage & Royal Ingredients"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter contrast-[1.03]"
            />
          </div>
        </div>

        {/* Full-width Visual Section */}
        <div className="relative aspect-[16/7] w-full overflow-hidden border border-[#C49A52]/30 my-16">
          <Image
            src="/images/artist bottle filling.png"
            alt="Master Perfumer filling crystal flacons"
            fill
            sizes="100vw"
            className="object-cover filter contrast-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17345F]/80 via-transparent to-transparent flex items-end p-8 sm:p-12">
            <span className="font-serif text-2xl sm:text-4xl text-[#F8F1E7] font-light italic">
              &ldquo;In every drop lies the memory of a thousand blossoms.&rdquo;
            </span>
          </div>
        </div>

        {/* Artisanal Deg-Bhapka Distillation */}
        <div id="craft" className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
              THE CRAFT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#17345F]">
              TRADITIONAL HYDRO-DISTILLATION
            </h2>
            <p className="text-xs text-[#756B63] font-light leading-relaxed">
              We preserve ancient <em>deg-bhapka</em> copper still distillation methods where flower blossoms are harvested at dawn and gently boiled over wood fires into pure sandalwood oil receivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs">
            <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-2">
              <Droplets className="w-5 h-5 text-[#C49A52] mx-auto" />
              <h4 className="font-serif text-lg font-normal text-[#17345F]">DAWN HARVEST</h4>
              <p className="text-[#756B63] font-light">Rose and jasmine blossoms gathered at first dawn light to retain peak essential oil potency.</p>
            </div>

            <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-2">
              <Sparkles className="w-5 h-5 text-[#C49A52] mx-auto" />
              <h4 className="font-serif text-lg font-normal text-[#17345F]">COPPER DEG STILLS</h4>
              <p className="text-[#756B63] font-light">Natural steam vapors travel through bamboo pipes into sandalwood oil receivers without synthetic solvents.</p>
            </div>

            <div className="p-6 bg-[#F8F1E7] border border-[#C49A52]/20 space-y-2">
              <Compass className="w-5 h-5 text-[#C49A52] mx-auto" />
              <h4 className="font-serif text-lg font-normal text-[#17345F]">MATURATION</h4>
              <p className="text-[#756B63] font-light">Aged in camel leather kuppi containers under Rajasthan sunlight to harmonize natural scent notes.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#17345F] text-[#F8F1E7] hover:bg-[#C49A52] hover:text-[#17345F] text-xs font-mono tracking-[0.2em] uppercase transition-colors"
          >
            <span>EXPERIENCE THE COLLECTION</span>
            <ArrowRight className="w-4 h-4 stroke-[1.4]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

