"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ChevronLeft, ChevronRight, ShoppingBag, Heart } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { IMAGE_INVENTORY } from "@/data/images";
import { useShop } from "@/context/ShopContext";

export default function HomePage() {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [emailInput, setEmailInput] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

  // Products to render in Section 04 (Bestsellers)
  const bestsellerProducts = PRODUCTS.slice(0, 5);

  const testimonials = [
    {
      id: 1,
      quote: "The most beautiful rose attar I have ever experienced. Absolutely divine.",
      author: "Aditi Sharma",
      city: "Jaipur",
      rating: 5,
    },
    {
      id: 2,
      quote: "Mehraab fragrances feel like a piece of heritage. Truly exceptional sillage.",
      author: "Karan Malhotra",
      city: "Delhi",
      rating: 5,
    },
    {
      id: 3,
      quote: "The packaging, the fragrance, the entire experience is so thoughtful and luxurious.",
      author: "Sneha Rajput",
      city: "Mumbai",
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#F8F1E7] text-[#1A1615] overflow-x-hidden font-sans">
      {/* ==========================================
          01. ROYAL HERO — PALACE CAMPAIGN COMPOSITION
      ========================================== */}
      <section className="relative h-screen min-h-[760px] flex flex-col justify-end overflow-hidden">
        {/* Background Campaign Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_INVENTORY.heroApproved.url}
            alt={IMAGE_INVENTORY.heroApproved.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.92] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />
        </div>

        {/* Side Vertical Editorial Labels */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col items-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A52]" />
            <span className="writing-mode-vertical text-[10px] tracking-[0.4em] font-mono uppercase text-[#F8F1E7]/80">
              HERITAGE IN A BOTTLE
            </span>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col items-center gap-3">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A52]" />
            <span className="writing-mode-vertical text-[10px] tracking-[0.4em] font-mono uppercase text-[#F8F1E7]/80">
              SCENTS &bull; PLACES &bull; CULTURE &bull; CRAFTSMANSHIP &bull; JAIPUR
            </span>
          </div>
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-24 w-full text-center flex flex-col items-center justify-end space-y-6">
          <div className="space-y-3 max-w-3xl">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#F8F1E7] leading-[1.02] tracking-tight">
              THE ART OF <br />
              <span className="italic font-normal text-[#F8F1E7]">ROYAL FRAGRANCE.</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#F8F1E7]/85 font-light tracking-[0.25em] uppercase font-mono">
              Attars, perfumes &amp; stories from India.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] font-mono uppercase text-[#F8F1E7] hover:text-[#C49A52] transition-colors border-b border-[#F8F1E7]/60 pb-1 font-medium"
            >
              <span>SHOP COLLECTIONS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C49A52]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          02. CATEGORY ARCHES — ARCHITECTURAL FRAMES
      ========================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* ARCH 1: ATTAR */}
          <Link href="/attar" className="group block space-y-4 text-center">
            <div className="relative aspect-[3/4] w-full rounded-t-[140px] sm:rounded-t-[160px] overflow-hidden bg-[#EFE8DC] border border-[#C49A52]/40 p-2 shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
              <div className="relative w-full h-full rounded-t-[132px] sm:rounded-t-[152px] overflow-hidden">
                <Image
                  src={IMAGE_INVENTORY.rosePerfumeBottle.url}
                  alt="Attars Collection"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1615] tracking-wide">
                ATTAR
              </h3>
              <p className="text-[11px] font-light text-[#756B63] font-mono uppercase tracking-wider">
                Pure. Natural. Timeless.
              </p>
              <span className="inline-block text-xs text-[#C49A52] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>

          {/* ARCH 2: EAU DE PARFUM */}
          <Link href="/perfumes" className="group block space-y-4 text-center">
            <div className="relative aspect-[3/4] w-full rounded-t-[140px] sm:rounded-t-[160px] overflow-hidden bg-[#EFE8DC] border border-[#C49A52]/40 p-2 shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
              <div className="relative w-full h-full rounded-t-[132px] sm:rounded-t-[152px] overflow-hidden">
                <Image
                  src={IMAGE_INVENTORY.mehraabEdpProduct.url}
                  alt="Eau de Parfum Collection"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1615] tracking-wide">
                EAU DE PARFUM
              </h3>
              <p className="text-[11px] font-light text-[#756B63] font-mono uppercase tracking-wider">
                Modern. Elegant. Long-Lasting.
              </p>
              <span className="inline-block text-xs text-[#C49A52] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>

          {/* ARCH 3: OUD */}
          <Link href="/oud" className="group block space-y-4 text-center">
            <div className="relative aspect-[3/4] w-full rounded-t-[140px] sm:rounded-t-[160px] overflow-hidden bg-[#EFE8DC] border border-[#C49A52]/40 p-2 shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
              <div className="relative w-full h-full rounded-t-[132px] sm:rounded-t-[152px] overflow-hidden">
                <Image
                  src={IMAGE_INVENTORY.oudhBottle.url}
                  alt="Oud Collection"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1615] tracking-wide">
                OUD
              </h3>
              <p className="text-[11px] font-light text-[#756B63] font-mono uppercase tracking-wider">
                Rare. Rich. Exquisite.
              </p>
              <span className="inline-block text-xs text-[#C49A52] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>

          {/* ARCH 4: GIFTING */}
          <Link href="/gifting" className="group block space-y-4 text-center">
            <div className="relative aspect-[3/4] w-full rounded-t-[140px] sm:rounded-t-[160px] overflow-hidden bg-[#EFE8DC] border border-[#C49A52]/40 p-2 shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
              <div className="relative w-full h-full rounded-t-[132px] sm:rounded-t-[152px] overflow-hidden">
                <Image
                  src={IMAGE_INVENTORY.comboGiftingBox.url}
                  alt="Royal Gifting"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1615] tracking-wide">
                GIFTING
              </h3>
              <p className="text-[11px] font-light text-[#756B63] font-mono uppercase tracking-wider">
                Thoughtful. Royal. Memorable.
              </p>
              <span className="inline-block text-xs text-[#C49A52] group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ==========================================
          03. ROYAL HOUSE EDITORIAL SECTION — 3-PART MAGAZINE SPREAD
      ========================================== */}
      <section className="relative w-full overflow-hidden bg-[#F8F1E7] border-y border-[#C49A52]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          {/* LEFT PORTION (~35%): Blue Rajasthan Architectural Artwork */}
          <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-full overflow-hidden bg-[#17345F]">
            <Image
              src={IMAGE_INVENTORY.splitHeritageStory.url}
              alt="Blue Rajasthan Architectural Illustration"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover object-left filter contrast-[1.03]"
            />
          </div>

          {/* MIDDLE PORTION (~30%): Cream Editorial Text Block */}
          <div className="lg:col-span-4 relative flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-[#F8F1E7] text-[#1A1615]">
            <div className="space-y-6 max-w-md mx-auto">
              <span className="text-xs tracking-[0.35em] text-[#8F304F] uppercase font-mono font-semibold block">
                A LEGACY
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1A1615] leading-[1.08] tracking-tight">
                FAVOURITES <br />
                OF THE ROYAL HOUSE.
              </h2>

              <p className="text-xs sm:text-sm font-light text-[#54463E] leading-relaxed">
                Mehraab is a tribute to India&apos;s royal fragrance traditions, where fine ingredients, craftsmanship and culture come together to create extraordinary scents.
              </p>

              <div className="pt-2">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.25em] font-mono uppercase text-[#1A1615] hover:text-[#B94D70] transition-colors border-b border-[#1A1615]/60 pb-0.5 font-semibold"
                >
                  <span>OUR STORY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C49A52]" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT PORTION (~35%): Continuous Woman & Sandstone Palace Photograph */}
          <div className="lg:col-span-4 relative min-h-[360px] lg:min-h-full overflow-hidden">
            <Image
              src={IMAGE_INVENTORY.splitHeritageStory.url}
              alt="Woman in traditional pink outfit overlooking Rajasthan palace and lake"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover object-right filter contrast-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          04. BESTSELLERS — FAVOURITES OF THE ROYAL HOUSE
      ========================================== */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8F1E7]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-14">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C49A52]/25">
            <div className="space-y-2.5">
              <span className="text-xs sm:text-sm tracking-[0.35em] text-[#C49A52] uppercase font-mono font-medium block">
                BESTSELLERS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1615] tracking-tight leading-tight">
                FAVOURITES OF THE ROYAL HOUSE.
              </h2>
              <p className="text-sm sm:text-base font-light text-[#756B63] max-w-2xl leading-relaxed">
                Our most-loved attars and perfumes, inspired by India&apos;s heritage and crafted for modern connoisseurs.
              </p>
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              <Link
                href="/shop"
                className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#C49A52] hover:text-[#1A1615] transition-colors border-b border-[#C49A52]/50 pb-1 font-medium"
              >
                VIEW ALL &rarr;
              </Link>
              <div className="flex items-center gap-3">
                <button
                  className="w-10 h-10 rounded-full border border-[#C49A52]/40 flex items-center justify-center text-[#1A1615] hover:bg-[#1A1615] hover:text-white transition-colors"
                  aria-label="Previous Products"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 rounded-full border border-[#C49A52]/40 flex items-center justify-center text-[#1A1615] hover:bg-[#1A1615] hover:text-white transition-colors"
                  aria-label="Next Products"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 5 Product Cards Grid — Extra Large Spacious Luxury Sizing */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-7 lg:gap-8">
            {bestsellerProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between p-4 sm:p-6 bg-[#F4ECDF] border border-[#E5DACB] rounded-xl shadow-sm space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    {/* Extra Large Square Image Frame */}
                    <div className="relative aspect-square w-full bg-[#EFE8DC] overflow-hidden rounded-lg">
                      <Link href={`/products/${product.slug}`} className="block relative w-full h-full">
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>

                      {/* Subtle Wishlist Heart Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-3.5 right-3.5 z-10 w-8.5 h-8.5 rounded-full bg-white/85 backdrop-blur-xs flex items-center justify-center text-[#2D2825] hover:text-[#B94D70] hover:bg-white transition-colors shadow-xs"
                        aria-label="Add to wishlist"
                      >
                        <Heart className={`w-4 h-4 stroke-[1.5] ${isWishlisted ? "fill-[#B94D70] text-[#B94D70]" : ""}`} />
                      </button>
                    </div>

                    {/* Product Metadata */}
                    <div className="space-y-1 text-left px-0.5">
                      <Link href={`/products/${product.slug}`} className="hover:text-[#B94D70] transition-colors">
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1C1714] leading-snug">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm font-sans text-[#73675E] font-light">
                        {product.subcategory || product.type || product.category}
                      </p>
                      <p className="font-serif text-lg sm:text-xl font-semibold text-[#1C1714] pt-1">
                        ₹ {product.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* Add to Bag Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 px-4 bg-white/50 hover:bg-[#1C1714] hover:text-[#F8F1E7] border border-[#8C8074]/40 text-xs font-mono uppercase tracking-widest text-[#1C1714] transition-all duration-200 flex items-center justify-between font-semibold rounded-md group/btn mt-2"
                  >
                    <span>ADD TO BAG</span>
                    <ShoppingBag className="w-4 h-4 stroke-[1.5] transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          05. THE ATTAR EDIT — SUBTLE HERITAGE SECTION
      ========================================== */}
      <section className="relative w-full py-24 sm:py-32 lg:py-36 overflow-hidden bg-[#F2DDD6]">
        {/* Background Texture: Dusty Rose Rajasthan Palace Asset */}
        <div
          className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url('/images/ingrediants bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        <div className="relative z-10 max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Content Column (~33% width) */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs sm:text-sm tracking-[0.35em] text-[#8F304F] uppercase font-mono font-semibold block">
                THE ATTAR EDIT
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2B1B17] leading-[1.08] tracking-tight">
                PURE INGREDIENTS. <br />
                EXTRAORDINARY SCENTS.
              </h2>

              <p className="text-sm font-light text-[#4A3B33] leading-relaxed max-w-md pt-1 font-sans">
                From rare florals to precious woods, our attars are crafted using time-honoured techniques and the finest natural ingredients.
              </p>

              <div className="pt-3">
                <Link
                  href="/attar"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm tracking-[0.2em] font-mono uppercase text-[#8F304F] hover:text-[#2B1B17] transition-colors border-b border-[#8F304F]/60 pb-0.5 font-semibold"
                >
                  <span>EXPLORE ATTARS</span>
                  <ArrowRight className="w-4 h-4 text-[#8F304F]" />
                </Link>
              </div>
            </div>

            {/* Right Content Column (~67% width): 4 Extra Large Square Ingredient Cards */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7 lg:gap-8">
              {/* ROSE CARD */}
              <Link href="/attar" className="group block space-y-3 text-left">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EFE8DC] shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.roseIngredient.url}
                    alt="Damask Rose Petals"
                    fill
                    sizes="(max-width: 768px) 50vw, 320px"
                    className="object-cover object-[center_82%] scale-135 filter contrast-[1.05] transition-transform duration-700 group-hover:scale-145"
                  />
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2B1B17] tracking-wider uppercase">
                    ROSE
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-[#5C4A40]">
                    Romantic &amp; Timeless
                  </p>
                  <span className="inline-block text-xs sm:text-sm text-[#8F304F] group-hover:translate-x-1.5 transition-transform pt-0.5">
                    &rarr;
                  </span>
                </div>
              </Link>

              {/* SAFFRON CARD */}
              <Link href="/attar" className="group block space-y-3 text-left">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EFE8DC] shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.kesarIngredient.url}
                    alt="Kashmir Saffron Threads"
                    fill
                    sizes="(max-width: 768px) 50vw, 320px"
                    className="object-cover object-[center_82%] scale-135 filter contrast-[1.05] transition-transform duration-700 group-hover:scale-145"
                  />
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2B1B17] tracking-wider uppercase">
                    SAFFRON
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-[#5C4A40]">
                    Warm &amp; Luxurious
                  </p>
                  <span className="inline-block text-xs sm:text-sm text-[#8F304F] group-hover:translate-x-1.5 transition-transform pt-0.5">
                    &rarr;
                  </span>
                </div>
              </Link>

              {/* OUD CARD */}
              <Link href="/oud" className="group block space-y-3 text-left">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EFE8DC] shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.oudhIngredient.url}
                    alt="Assam Oud Agarwood"
                    fill
                    sizes="(max-width: 768px) 50vw, 320px"
                    className="object-cover object-[center_82%] scale-135 filter contrast-[1.05] transition-transform duration-700 group-hover:scale-145"
                  />
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2B1B17] tracking-wider uppercase">
                    OUD
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-[#5C4A40]">
                    Deep &amp; Mystical
                  </p>
                  <span className="inline-block text-xs sm:text-sm text-[#8F304F] group-hover:translate-x-1.5 transition-transform pt-0.5">
                    &rarr;
                  </span>
                </div>
              </Link>

              {/* SANDALWOOD CARD */}
              <Link href="/attar" className="group block space-y-3 text-left">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EFE8DC] shadow-md transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.sandalwoodIngredient.url}
                    alt="Mysore Sandalwood Logs"
                    fill
                    sizes="(max-width: 768px) 50vw, 320px"
                    className="object-cover object-[center_82%] scale-135 filter contrast-[1.05] transition-transform duration-700 group-hover:scale-145"
                  />
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2B1B17] tracking-wider uppercase">
                    SANDALWOOD
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-[#5C4A40]">
                    Calm &amp; Refined
                  </p>
                  <span className="inline-block text-xs sm:text-sm text-[#8F304F] group-hover:translate-x-1.5 transition-transform pt-0.5">
                    &rarr;
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          06. ROYAL PALETTE — FOUR FRAGRANCE WORLDS CATALOGUE
      ========================================== */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8F1E7] border-y border-[#C49A52]/20">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Block (~33% width) */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs sm:text-sm tracking-[0.35em] text-[#C49A52] uppercase font-mono font-semibold block">
                ROYAL PALETTE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1615] leading-[1.08] tracking-tight">
                FRAGRANCES FOR <br />
                EVERY STORY.
              </h2>
              <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed max-w-md">
                A curated collection of perfumes and attars inspired by India&apos;s colours, traditions and royal landscapes.
              </p>
              <div className="pt-2">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#C49A52] hover:text-[#1A1615] transition-colors border-b border-[#C49A52]/50 pb-0.5 font-semibold"
                >
                  <span>SHOP COLLECTIONS</span>
                  <ArrowRight className="w-4 h-4 text-[#C49A52]" />
                </Link>
              </div>
            </div>

            {/* Right Block (~67% width): 4 Refined Fragrance World Compositions */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
              {/* WORLD 1: THE ROYAL ROSE */}
              <Link href="/attar" className="group block space-y-3">
                <div className="relative aspect-[3/4] w-full bg-[#EFE8DC] overflow-hidden rounded-xl shadow-md border border-[#C49A52]/30 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.rosePerfumeBottle.url}
                    alt="The Royal Rose"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono tracking-[0.2em] text-[#1A1615] uppercase font-semibold group-hover:text-[#B94D70] transition-colors pt-1">
                  <span>THE ROYAL ROSE</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </Link>

              {/* WORLD 2: THE SAPPHIRE OUD */}
              <Link href="/oud" className="group block space-y-3">
                <div className="relative aspect-[3/4] w-full bg-[#EFE8DC] overflow-hidden rounded-xl shadow-md border border-[#C49A52]/30 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.sapphireOudProduct.url}
                    alt="The Sapphire Oud"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono tracking-[0.2em] text-[#1A1615] uppercase font-semibold group-hover:text-[#B94D70] transition-colors pt-1">
                  <span>THE SAPPHIRE OUD</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </Link>

              {/* WORLD 3: THE EMERALD COLLECTION */}
              <Link href="/perfumes" className="group block space-y-3">
                <div className="relative aspect-[3/4] w-full bg-[#EFE8DC] overflow-hidden rounded-xl shadow-md border border-[#C49A52]/30 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.mehraabEdpProduct.url}
                    alt="The Emerald Collection"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono tracking-[0.2em] text-[#1A1615] uppercase font-semibold group-hover:text-[#B94D70] transition-colors pt-1">
                  <span>THE EMERALD</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </Link>

              {/* WORLD 4: THE IVORY MUSK */}
              <Link href="/perfumes" className="group block space-y-3">
                <div className="relative aspect-[3/4] w-full bg-[#EFE8DC] overflow-hidden rounded-xl shadow-md border border-[#C49A52]/30 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <Image
                    src={IMAGE_INVENTORY.ivoryMuskProduct.url}
                    alt="The Ivory Musk"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono tracking-[0.2em] text-[#1A1615] uppercase font-semibold group-hover:text-[#B94D70] transition-colors pt-1">
                  <span>THE IVORY MUSK</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          07. CRAFTSMANSHIP — FULL-BLEED SILK EMERALD SPLIT BANNER
      ========================================== */}
      <section className="relative w-full overflow-hidden bg-[#0F4F42] text-[#F8F1E7]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
          {/* LEFT ~50%: Full-Bleed Craftsmanship Photograph */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full overflow-hidden">
            <Image
              src={IMAGE_INVENTORY.artistBottleFilling.url}
              alt={IMAGE_INVENTORY.artistBottleFilling.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center filter contrast-[1.05]"
            />
          </div>

          {/* RIGHT ~50%: Deep Emerald Background & Editorial Content */}
          <div className="lg:col-span-6 relative flex flex-col justify-between p-8 sm:p-12 lg:p-16 bg-[#0F4F42] overflow-hidden">
            {/* Background Botanical Line Art Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 opacity-25 pointer-events-none border-r border-[#C49A52]/20">
              <div className="h-full w-full bg-[radial-gradient(#C49A52_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* Main Text Content */}
            <div className="relative z-10 space-y-6 max-w-lg my-auto">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-[1.08] tracking-tight text-[#F8F1E7]">
                CRAFTED BY HAND. <br />
                <span className="italic text-[#C49A52] font-normal">MADE TO BE REMEMBERED.</span>
              </h2>

              <p className="text-xs sm:text-sm font-light text-[#F8F1E7]/85 leading-relaxed">
                Our fragrances are meticulously handcrafted by skilled artisans, using traditional methods and the finest ingredients from across India.
              </p>

              {/* 4 Feature Indicators with Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#C49A52]/30 font-mono text-[10px] sm:text-[11px] text-center">
                <div className="space-y-2">
                  <div className="w-5 h-5 mx-auto text-[#C49A52] flex items-center justify-center border border-[#C49A52]/50 rotate-45">
                    <span className="w-1.5 h-1.5 bg-[#C49A52]" />
                  </div>
                  <p className="uppercase tracking-wider text-[#F8F1E7]">NATURAL INGREDIENTS</p>
                </div>

                <div className="space-y-2">
                  <div className="w-5 h-5 mx-auto text-[#C49A52] flex items-center justify-center border border-[#C49A52]/50 rotate-45">
                    <span className="w-1.5 h-1.5 bg-[#C49A52]" />
                  </div>
                  <p className="uppercase tracking-wider text-[#F8F1E7]">TRADITIONAL DISTILLATION</p>
                </div>

                <div className="space-y-2">
                  <div className="w-5 h-5 mx-auto text-[#C49A52] flex items-center justify-center border border-[#C49A52]/50 rotate-45">
                    <span className="w-1.5 h-1.5 bg-[#C49A52]" />
                  </div>
                  <p className="uppercase tracking-wider text-[#F8F1E7]">SMALL BATCH PRODUCTION</p>
                </div>

                <div className="space-y-2">
                  <div className="w-5 h-5 mx-auto text-[#C49A52] flex items-center justify-center border border-[#C49A52]/50 rotate-45">
                    <span className="w-1.5 h-1.5 bg-[#C49A52]" />
                  </div>
                  <p className="uppercase tracking-wider text-[#F8F1E7]">EXCEPTIONAL QUALITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          08. ROYAL GIFTING — MORE THAN A GIFT (3-COLUMN LUXURY SPREAD)
      ========================================== */}
      <section className="py-24 sm:py-32 lg:py-36 bg-[#F8F1E7]">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (~30% width) */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs sm:text-sm tracking-[0.35em] text-[#C49A52] uppercase font-mono font-semibold block">
                ROYAL GIFTING
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1615] leading-[1.08] tracking-tight">
                MORE THAN A GIFT. <br />
                A LASTING IMPRESSION.
              </h2>

              <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed max-w-md">
                Beautifully curated gift sets for celebrations, weddings and special moments. Crafted to make every occasion unforgettable.
              </p>

              <div className="pt-2">
                <Link
                  href="/gifting"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm tracking-[0.25em] font-mono uppercase text-[#1A1615] hover:text-[#B94D70] transition-colors border-b border-[#1A1615] pb-0.5 font-semibold"
                >
                  <span>EXPLORE GIFTING</span>
                  <ArrowRight className="w-4 h-4 text-[#C49A52]" />
                </Link>
              </div>
            </div>

            {/* Center Column (~45% width): Large Visually Prominent Gifting Box Photo */}
            <div className="lg:col-span-5 relative aspect-[4/3] min-h-[380px] lg:min-h-[460px] bg-[#102746] rounded-xl overflow-hidden border border-[#C49A52]/40 shadow-2xl">
              <Image
                src={IMAGE_INVENTORY.comboGiftingBox.url}
                alt="Mehraab Royal Velvet Gift Chest with Gold Embossed Flacons"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center filter contrast-[1.04]"
              />
            </div>

            {/* Right Column (~25% width): Customised Gift Sets Supporting Panel */}
            <div className="lg:col-span-3 space-y-5 p-8 bg-[#EFE8DC] border border-[#C49A52]/35 rounded-xl shadow-sm">
              <span className="text-xs tracking-[0.25em] text-[#C49A52] uppercase font-mono block font-semibold">
                CUSTOMISED GIFT SETS
              </span>
              <p className="text-xs sm:text-sm font-light text-[#6E6359] leading-relaxed">
                Personalise your gifts for a truly memorable experience. Choose custom engravings, signature ribbons, and bespoke fragrance selections.
              </p>
              <div className="pt-2">
                <Link
                  href="/gifting"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-[#1A1615] border-b border-[#1A1615] pb-0.5 font-semibold hover:text-[#B94D70] transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          09. JAIPUR — A CITY OF INSPIRATION
      ========================================== */}
      <section className="relative py-36 sm:py-44 bg-[#1A1615] text-[#F8F1E7] overflow-hidden text-center flex items-center justify-center min-h-[540px]">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={IMAGE_INVENTORY.blueRoyalTheme.url}
            alt="Jaipur Palace and Lake at Sunset"
            fill
            sizes="100vw"
            className="object-cover object-center filter contrast-[1.05]"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono font-medium block">
            JAIPUR
          </span>

          <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#F8F1E7] tracking-tight">
            A CITY OF INSPIRATION.
          </h2>

          <p className="text-sm font-light text-[#F8F1E7]/85 leading-relaxed max-w-xl mx-auto">
            From its majestic palaces to its vibrant bazaars, Jaipur&apos;s rich heritage lives in every Mehraab fragrance.
          </p>

          <div className="pt-4">
            <Link
              href="/our-story"
              className="inline-flex items-center gap-3 text-xs tracking-[0.25em] font-mono uppercase text-[#F8F1E7] hover:text-[#C49A52] transition-colors border-b border-[#F8F1E7]/40 pb-1 font-medium"
            >
              <span>EXPLORE OUR ROOTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C49A52]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          10. CUSTOMER LOVE — SCENTS THAT STAY IN HEARTS
      ========================================== */}
      <section className="py-28 sm:py-36 bg-[#FFF9F1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C49A52]/20">
            <div className="space-y-2">
              <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono font-medium block">
                CUSTOMER LOVE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1A1615]">
                SCENTS THAT STAY IN HEARTS.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="w-8 h-8 rounded-full border border-[#C49A52]/40 flex items-center justify-center text-[#1A1615] hover:bg-[#C49A52]/10 transition-colors"
                aria-label="Previous testimony"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="w-8 h-8 rounded-full border border-[#C49A52]/40 flex items-center justify-center text-[#1A1615] hover:bg-[#C49A52]/10 transition-colors"
                aria-label="Next testimony"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`p-8 bg-[#EFE8DC] border border-[#C49A52]/30 space-y-6 transition-all ${
                  activeTestimonial === idx ? "ring-1 ring-[#C49A52]" : ""
                }`}
              >
                <p className="font-serif text-lg font-light text-[#1A1615] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#C49A52]/20">
                  <div>
                    <h4 className="font-serif text-base font-normal text-[#1A1615]">{t.author}</h4>
                    <p className="text-[11px] font-mono text-[#756B63] uppercase">{t.city}</p>
                  </div>
                  <div className="flex text-[#C49A52] gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          11. FIND YOUR SIGNATURE — FINAL HERITAGE INVITATION
      ========================================== */}
      <section className="relative py-28 sm:py-36 lg:py-40 overflow-hidden bg-[#F2DDD6]">
        {/* Background Texture: Existing Dusty Rose Rajasthan Heritage Asset */}
        <div
          className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url('/images/ingrediants bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#2B1B17] tracking-tight leading-tight">
              FIND YOUR <br />
              SIGNATURE.
            </h2>
            <p className="text-xs sm:text-sm text-[#4A3B33] font-light max-w-md mx-auto leading-relaxed font-sans">
              Join our world of exquisite fragrances, new collections and royal stories from India.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (emailInput) {
                alert("Thank you for subscribing to Mehraab.");
                setEmailInput("");
              }
            }}
            className="space-y-4 max-w-md mx-auto"
          >
            <div className="flex items-center bg-[#FAF4EC] border border-[#8C8074]/40 p-1.5 shadow-sm rounded-md">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 bg-transparent text-xs text-[#1A1615] font-light focus:outline-none placeholder-[#8C8074]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#2B1B17] text-[#F8F1E7] hover:bg-[#8F304F] transition-colors text-xs font-mono font-semibold rounded-sm"
                aria-label="Submit email"
              >
                &rarr;
              </button>
            </div>

            <label className="flex items-center justify-center gap-2 text-[11px] font-light text-[#4A3B33] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#8F304F]"
              />
              <span>I agree to receive updates, offers and stories from Mehraab.</span>
            </label>
          </form>
        </div>
      </section>
    </div>
  );
}
