"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { ProductCard } from "@/components/ProductCard";
import { Heart, ArrowRight } from "lucide-react";

export default function AccountWishlistPage() {
  const { wishlist, toggleWishlist } = useShop();

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#F8F1E7] min-h-screen pt-32 pb-24 text-[#17345F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono">
            SAVED CREATIONS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#17345F]">
            YOUR WISHLIST ({wishlistProducts.length})
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] max-w-md mx-auto font-light leading-relaxed">
            Your saved royal fragrance selections preserved for future acquisitions.
          </p>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="bg-[#FFF9F1] border border-[#C49A52]/25 p-16 text-center space-y-4 max-w-xl mx-auto">
            <Heart className="w-10 h-10 text-[#C49A52] mx-auto stroke-[1.4]" />
            <h2 className="font-serif text-2xl text-[#17345F] font-light">Your Wishlist is Empty</h2>
            <p className="text-xs text-[#756B63] font-light">
              Explore our master collection and click the heart icon on any flacon to save it here.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#17345F] text-[#F8F1E7] text-xs font-mono tracking-[0.2em] uppercase hover:bg-[#C49A52] hover:text-[#17345F] transition-colors"
              >
                <span>EXPLORE FRAGRANCES</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.4]" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
