"use client";

import React from "react";
import Image from "next/image";

interface MehraabImageFrameProps {
  src: string;
  alt: string;
  variant?: "arch" | "editorial" | "jharokha" | "product";
  aspectRatio?: "16:9" | "4:3" | "3:4" | "1:1" | "4:5" | "3:5";
  className?: string;
  priority?: boolean;
  annotation?: string;
  themeColor?: "pink" | "blue" | "emerald" | "ivory" | "gold";
  children?: React.ReactNode;
}

export const MehraabImageFrame: React.FC<MehraabImageFrameProps> = ({
  src,
  alt,
  variant = "product",
  aspectRatio = "3:4",
  className = "",
  priority = false,
  annotation,
  themeColor = "ivory",
  children,
}) => {
  // Map ratio classes
  const ratioClasses = {
    "16:9": "aspect-[16/9]",
    "4:3": "aspect-[4/3]",
    "3:4": "aspect-[3/4]",
    "1:1": "aspect-square",
    "4:5": "aspect-[4/5]",
    "3:5": "aspect-[3/5]",
  }[aspectRatio];

  // Theme studio backgrounds for product variant
  const themeBgClasses = {
    pink: "bg-[#B94D70]/10",
    blue: "bg-[#17345F]/10",
    emerald: "bg-[#176B58]/10",
    ivory: "bg-[#FFF9F1]",
    gold: "bg-[#C49A52]/10",
  }[themeColor];

  /* ----------------------------------------------------
     VARIANT 01: ROYAL ARCH (True architectural arch mask)
  ---------------------------------------------------- */
  if (variant === "arch") {
    return (
      <div className={`relative ${ratioClasses} ${className} group`}>
        {/* SVG Arch Clip Path Mask Container */}
        <div className="relative w-full h-full p-1.5 rounded-[120px_120px_8px_8px] border border-[#C49A52]/40 bg-[#FFF9F1] shadow-soft transition-all duration-500 group-hover:border-[#C49A52] group-hover:shadow-gold">
          <div className="relative w-full h-full rounded-[112px_112px_4px_4px] overflow-hidden bg-[#F8F1E7]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle inner gold rim overlay */}
            <div className="absolute inset-0 border border-[#C49A52]/20 pointer-events-none rounded-[112px_112px_4px_4px]" />
          </div>
        </div>

        {annotation && (
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-semibold tracking-[0.25em] text-[#C49A52] uppercase bg-[#FFF9F1]/90 px-3 py-1 rounded-full border border-[#C49A52]/30 backdrop-blur-sm z-10 pointer-events-none">
            {annotation}
          </span>
        )}
        {children}
      </div>
    );
  }

  /* ----------------------------------------------------
     VARIANT 02: OPEN EDITORIAL (Magazine crop, no borders)
  ---------------------------------------------------- */
  if (variant === "editorial") {
    return (
      <div className={`relative ${ratioClasses} ${className} group overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {annotation && (
          <div className="absolute top-4 left-4 z-10 bg-[#17345F]/90 text-[#FFF9F1] px-3 py-1 text-[10px] tracking-[0.25em] font-semibold uppercase rounded-sm border border-[#C49A52]/30 backdrop-blur-xs">
            {annotation}
          </div>
        )}
        {children}
      </div>
    );
  }

  /* ----------------------------------------------------
     VARIANT 03: JHAROKHA (Indian architectural frame)
  ---------------------------------------------------- */
  if (variant === "jharokha") {
    return (
      <div className={`relative ${ratioClasses} ${className} p-3 bg-[#FFF9F1] border border-[#C49A52]/30 rounded-lg shadow-soft group transition-all duration-500 hover:border-[#C49A52]`}>
        {/* Ornate corner brass accents */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C49A52]" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C49A52]" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C49A52]" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C49A52]" />

        <div className="relative w-full h-full rounded overflow-hidden bg-[#F8F1E7]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {annotation && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-semibold tracking-[0.25em] text-[#17345F] uppercase bg-[#FFF9F1] px-3 py-1 rounded-sm border border-[#C49A52]/40 z-10">
            {annotation}
          </div>
        )}
        {children}
      </div>
    );
  }

  /* ----------------------------------------------------
     VARIANT 04: PRODUCT (Clean studio photography container)
  ---------------------------------------------------- */
  return (
    <div
      className={`relative ${ratioClasses} ${themeBgClasses} ${className} rounded-md overflow-hidden transition-all duration-300 group`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {children}
    </div>
  );
};
