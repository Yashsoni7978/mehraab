"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IngredientsPage() {
  const ingredientsList = [
    {
      id: "rose",
      name: "DAMASK ROSE (GULAB)",
      character: "Velvet • Floral • Royal • Luminous",
      origin: "Kannauj & Pushkar Valley, Rajasthan",
      role: "Forms the heart note of Gul-e-Rooh and signature royal bouquets. Hydro-distilled into Mysore sandalwood for intense longevity.",
      image: "/images/rose ingrediant.png",
      colorTheme: "#8F304F",
    },
    {
      id: "saffron",
      name: "KASHMIRI SAFFRON (KESAR)",
      character: "Warm • Golden • Honeyed • Leather",
      origin: "Pampore, Kashmir",
      role: "Brings radiant golden warmth, subtle leather nuance, and gourmand spiciness to our Saffron Sandal and royal evening blends.",
      image: "/images/saffron sandal.jpg",
      colorTheme: "#C49A52",
    },
    {
      id: "oud",
      name: "ASSAM AGARWOOD (OUD)",
      character: "Dark • Smoked • Resinous • Precious",
      origin: "Upper Assam Wild Groves",
      role: "Harvested from infected Aquilaria heartwood, aged over 15 years to produce deep smoked woody sillage in Oud-e-Jaipur.",
      image: "/images/oud-e-jaipur.jpg",
      colorTheme: "#17345F",
    },
    {
      id: "sandalwood",
      name: "MYSORE SANDALWOOD (CHANDAN)",
      character: "Creamy • Sacred • Milky • Woody",
      origin: "Karnataka Forests & Jaipur Vaults",
      role: "The sacred fixative receiver for all traditional attars. Binds volatile floral vapors into long-lasting skin-deep warmth.",
      image: "/images/craftsmanship.jpg",
      colorTheme: "#C49A52",
    },
    {
      id: "jasmine",
      name: "NIGHT-BLOOMING JASMINE (RAATRAANI)",
      character: "Indolic • White Floral • Hypnotic",
      origin: "Rajasthan Palace Gardens",
      role: "Picked strictly under moonlight, imparting intoxicating nocturnal white-floral elegance to Raatraani attar.",
      image: "/images/raatraani.jpg",
      colorTheme: "#17345F",
    },
  ];

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#17345F] text-[#F8F1E7] text-center space-y-4">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono">
            ROYAL BOTANICAL CATALOGUE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F8F1E7] leading-tight">
            THE FIVE SACRED BOTANICALS
          </h1>
          <p className="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl mx-auto font-light leading-relaxed">
            The foundation of Indian royal perfumery: hand-gathered flowers, rare spices, and ancient aged resins.
          </p>
        </div>
      </section>

      {/* Ingredient Showcase Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24">
        {ingredientsList.map((item, idx) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
                BOTANICAL PROFILE 0{idx + 1}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#17345F]">
                {item.name}
              </h2>

              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#C49A52] font-mono block">
                    SCENT CHARACTERISTICS
                  </span>
                  <p className="font-serif text-lg text-[#17345F] italic">{item.character}</p>
                </div>

                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#C49A52] font-mono block">
                    ORIGIN & HARVEST
                  </span>
                  <p className="text-xs text-[#756B63] font-light">{item.origin}</p>
                </div>

                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#C49A52] font-mono block">
                    ROLE IN MEHRAAB CREATIONS
                  </span>
                  <p className="text-xs text-[#756B63] font-light leading-relaxed">{item.role}</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#17345F] hover:text-[#C49A52]"
                >
                  <span>DISCOVER FRAGRANCES WITH THIS ESSENCE</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1.4]" />
                </Link>
              </div>
            </div>

            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative aspect-square w-full overflow-hidden border border-[#C49A52]/30 shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter contrast-[1.03]"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
