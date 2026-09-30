"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function CollectionsPage() {
  const collections = [
    {
      id: "attar",
      title: "THE ATTAR EDIT",
      subtitle: "Pure Botanical Attar Oils",
      desc: "Traditional concentrated oil formulations aged in pure Mysore sandalwood oil. Zero alcohol, 100% natural, incredibly long-lasting.",
      category: "ATTAR",
      bgImage: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "edp",
      title: "EAU DE PARFUM",
      subtitle: "Modern Royal Perfumes",
      desc: "Contemporary spray formulations blending high-concentration natural extracts with modern sillage. Designed for day & night.",
      category: "EAU DE PARFUM",
      bgImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "oud",
      title: "RARE OUD COLLECTION",
      subtitle: "Assam & Cambodian Agarwood",
      desc: "Majestic, smoked, and deeply regal elixirs harvested from wild-grown agarwood trees, enriched with dark spices and frankincense.",
      category: "OUD",
      bgImage: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "gifting",
      title: "ROYAL GIFTING",
      subtitle: "Curated Box Sets & Presents",
      desc: "Opulent velvet-lined gift chests designed for royal celebrations, weddings, corporate honors, and meaningful personal tokens.",
      category: "GIFTING",
      bgImage: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold">
            MEHRAAB ARCHIVES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#17345F]">
            CURATED COLLECTIONS
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] max-w-md mx-auto italic font-serif">
            Explore the four olfactive pillars of our royal perfume house.
          </p>
        </div>

        <div className="space-y-12">
          {collections.map((col, idx) => (
            <div
              key={col.id}
              className={`flex flex-col lg:flex-row items-center gap-8 bg-[#FFF9F1] border border-[#C49A52]/30 rounded-xl overflow-hidden shadow-soft hover:border-[#C49A52] transition-all p-6 sm:p-10 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-full lg:w-1/2 aspect-[16/10] rounded-lg overflow-hidden border border-[#C49A52]/20">
                <Image src={col.bgImage} alt={col.title} fill className="object-cover" />
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <span className="text-[10px] tracking-[0.3em] text-[#B94D70] uppercase font-bold">
                  {col.subtitle}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#17345F]">
                  {col.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed font-light">
                  {col.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/shop?category=${encodeURIComponent(col.category)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#17345F] text-[#FFF9F1] text-xs font-semibold tracking-[0.2em] uppercase rounded hover:bg-[#B94D70] transition-colors"
                  >
                    <span>EXPLORE COLLECTION</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
