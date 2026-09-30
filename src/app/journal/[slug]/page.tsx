"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/data/journal";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

interface JournalPageProps {
  params: {
    slug: string;
  };
}

export default function JournalArticlePage({ params }: JournalPageProps) {
  const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug || a.id === params.slug);

  if (!article) {
    return (
      <div className="py-32 text-center space-y-4 bg-[#F8F1E7] min-h-screen">
        <h1 className="font-serif text-4xl text-[#17345F] font-light">Article Not Found</h1>
        <Link href="/journal" className="text-xs font-mono uppercase tracking-wider text-[#C49A52] border-b border-[#C49A52]">
          Return to Journal
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) =>
    article.relatedProductSlugs?.includes(p.slug) || article.relatedProductSlugs?.includes(p.id)
  );

  return (
    <div className="bg-[#F8F1E7] min-h-screen pt-32 pb-24 text-[#17345F]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#C49A52] hover:text-[#17345F]"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[1.4]" />
          <span>BACK TO JOURNAL</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C49A52]">
            {article.category}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#17345F] leading-tight">
            {article.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#756B63] max-w-2xl mx-auto font-light">
            {article.subtitle}
          </p>

          <div className="pt-4 flex items-center justify-center gap-6 text-[10px] font-mono tracking-[0.2em] text-[#C49A52] uppercase">
            <span className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-[#C49A52]" />
              <span>{article.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#C49A52]" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C49A52]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#C49A52]/30 shadow-md">
          <Image
            src={article.mainImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover filter contrast-[1.03]"
          />
        </div>

        {/* Body Paragraphs */}
        <div className="prose max-w-none text-xs sm:text-sm text-[#756B63] leading-relaxed font-light space-y-6 pt-4">
          {article.content.map((paragraph, index) => (
            <p key={index} className="first-letter:text-4xl first-letter:font-serif first-letter:font-normal first-letter:text-[#17345F] first-letter:mr-2 first-letter:float-left">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-[#C49A52]/25 space-y-8">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C49A52] uppercase">
                FEATURED IN THIS ESSAY
              </span>
              <h3 className="font-serif text-2xl text-[#17345F] font-light">RELATED FRAGRANCES</h3>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
