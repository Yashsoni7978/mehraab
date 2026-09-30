"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const inWish = isInWishlist(product.id);

  return (
    <div
      className="group flex flex-col justify-between bg-[#FFF9F1] border border-[#C49A52]/20 p-4 transition-all duration-300 hover:border-[#C49A52] hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-3">
        {/* Dominant Image Container with Arch/Framing */}
        <div className="relative aspect-[3/4] w-full bg-[#F4ECDF] overflow-hidden">
          <Link href={`/products/${product.slug}`} className="block relative w-full h-full">
            <Image
              src={isHovered && product.secondaryImage ? product.secondaryImage : product.mainImage}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
            />
          </Link>

          {/* Wishlist Heart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-[#F8F1E7]/90 backdrop-blur-xs flex items-center justify-center text-[#17345F] hover:text-[#8F304F] transition-colors shadow-xs"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-3.5 h-3.5 stroke-[1.4] ${inWish ? "fill-[#8F304F] text-[#8F304F]" : ""}`} />
          </button>
        </div>

        {/* Product Details */}
        <div className="space-y-1 text-left pt-1">
          <div className="flex items-center justify-between text-[9.5px] tracking-[0.25em] text-[#C49A52] font-mono uppercase">
            <span>{product.category}</span>
            <span>{product.defaultSize || "12ml"}</span>
          </div>

          <Link href={`/products/${product.slug}`} className="block group-hover:text-[#C49A52] transition-colors">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#17345F] leading-tight">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#756B63] font-light line-clamp-1 italic font-serif">
            {product.shortDescription || product.type}
          </p>

          <p className="font-serif text-base font-medium text-[#17345F] pt-1">
            ₹ {product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-3 border-t border-[#C49A52]/15 flex items-center justify-between gap-2">
        <button
          onClick={() => addToCart(product)}
          className="py-1.5 px-3 bg-[#17345F] text-[#F8F1E7] hover:bg-[#C49A52] hover:text-[#17345F] text-[10px] font-mono tracking-[0.2em] uppercase transition-colors duration-200 flex items-center gap-1.5"
        >
          <span>ADD TO BAG</span>
          <ShoppingBag className="w-3 h-3 stroke-[1.4]" />
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="text-[10px] font-mono tracking-[0.2em] text-[#C49A52] hover:text-[#17345F] transition-colors flex items-center gap-1 uppercase"
        >
          <span>DISCOVER</span>
          <ArrowRight className="w-3 h-3 stroke-[1.4]" />
        </Link>
      </div>
    </div>
  );
};


