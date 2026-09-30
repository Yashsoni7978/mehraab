"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "HERITAGE", "FRAGRANCE", "INGREDIENTS", "CRAFT", "RAJASTHAN", "GIFTING"];

  const featuredArticle = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0];
  const articlesList = JOURNAL_ARTICLES.filter((a) => {
    if (activeCategory !== "ALL" && a.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F]">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 sm:px-10 lg:px-12 bg-[#FFF9F1] border-b border-[#C49A52]/25 text-center space-y-4">
        <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
          MEHRAAB EDITORIAL PUBLICATION
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#17345F]">
          THE JOURNAL
        </h1>
        <p className="text-xs sm:text-sm text-[#756B63] max-w-xl mx-auto font-light leading-relaxed">
          Essays on Indian fragrance heritage, botanical harvests, royal architecture, and artisanal craft from Jaipur.
        </p>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-[#F8F1E7] border-b border-[#C49A52]/20 sticky top-[116px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-3 overflow-x-auto text-[11px] font-mono tracking-[0.18em] uppercase">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 transition-colors whitespace-nowrap border ${
                activeCategory === cat
                  ? "bg-[#17345F] text-[#F8F1E7] border-[#17345F]"
                  : "bg-[#FFF9F1] text-[#17345F] border-[#C49A52]/30 hover:border-[#C49A52]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 space-y-16">
        {/* Featured Story */}
        {activeCategory === "ALL" && featuredArticle && (
          <Link
            href={`/journal/${featuredArticle.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#FFF9F1] border border-[#C49A52]/30 p-6 sm:p-10 hover:border-[#C49A52] transition-all"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#C49A52]/20">
              <Image
                src={featuredArticle.mainImage}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#C49A52] uppercase">
                  <span>{featuredArticle.category} • FEATURED</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#17345F] group-hover:text-[#C49A52] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs text-[#756B63] font-light leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-mono tracking-[0.2em] text-[#17345F]">
                <span className="text-[#756B63] font-light">{featuredArticle.date}</span>
                <span className="text-[#C49A52] group-hover:text-[#17345F] flex items-center gap-1.5 uppercase">
                  <span>READ ESSAY</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[1.4]" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesList.map((article) => (
            <Link
              key={article.id}
              href={`/journal/${article.slug}`}
              className="group bg-[#FFF9F1] border border-[#C49A52]/25 p-6 flex flex-col justify-between space-y-6 hover:border-[#C49A52] transition-all"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#C49A52]/20">
                  <Image
                    src={article.mainImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex items-center justify-between text-[9.5px] font-mono tracking-[0.25em] text-[#C49A52] uppercase">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl text-[#17345F] group-hover:text-[#C49A52] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#756B63] font-light line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C49A52]/15 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase">
                <span className="text-[#756B63]">{article.date}</span>
                <span className="text-[#C49A52] flex items-center gap-1">
                  <span>READ</span>
                  <ArrowRight className="w-3 h-3 stroke-[1.4]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
