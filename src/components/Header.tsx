"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, User, ChevronRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";

// Layer 01 — Announcement Bar Component
const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#17345F] border-b border-[#C49A52]/40 text-[#F8F1E7] text-[9.5px] sm:text-[10.5px] tracking-[0.25em] font-light uppercase py-2 px-4 flex items-center justify-center select-none z-20 relative min-h-[32px]">
      <span className="flex items-center space-x-2 text-center">
        <span>FREE SHIPPING ON ORDERS ABOVE ₹2000</span>
        <span className="text-[#C49A52] opacity-80 font-normal">|</span>
        <span>WE SHIP WORLDWIDE</span>
      </span>
    </div>
  );
};

// Central MEHRAAB Brand Mark — Architectural Crest Plaque Component
const MehraabCrest: React.FC = () => {
  return (
    <Link
      href="/"
      className="group relative flex flex-col items-center justify-start focus:outline-none"
      aria-label="MEHRAAB Royal Attar & Perfumes"
    >
      {/* Desktop Crest (>= 640px) */}
      <div className="hidden sm:block relative w-[230px] h-[142px] filter drop-shadow-[0_6px_12px_rgba(23,52,95,0.18)] transition-transform duration-300 group-hover:scale-[1.01]">
        {/* SVG Architectural Mughal/Rajput Arch Silhouette */}
        <svg
          viewBox="0 0 230 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Plaque Fill — Deep Royal Blue #17345F */}
          <path
            d="M 0 0 
               L 230 0 
               L 230 70 
               C 230 94, 212 110, 180 121 
               C 150 132, 130 140, 115 142 
               C 100 140, 80 132, 50 121 
               C 18 110, 0 94, 0 70 
               Z"
            fill="#17345F"
          />

          {/* Outer Antique Gold Border Line #C49A52 */}
          <path
            d="M 0 0 
               L 230 0 
               L 230 70 
               C 230 94, 212 110, 180 121 
               C 150 132, 130 140, 115 142 
               C 100 140, 80 132, 50 121 
               C 18 110, 0 94, 0 70 
               Z"
            stroke="#C49A52"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Inner Decorative Antique Gold Inset Arch Pin-stripe */}
          <path
            d="M 6 0 
               L 224 0 
               L 224 68 
               C 224 90, 207 105, 176 115 
               C 147 125, 127 133, 115 135 
               C 103 133, 83 125, 54 115 
               C 23 105, 6 90, 6 68 
               Z"
            stroke="#C49A52"
            strokeWidth="0.75"
            strokeOpacity="0.55"
            fill="none"
          />
        </svg>

        {/* Plaque Content Overlay */}
        <div className="absolute inset-0 pt-3 pb-2 px-3 flex flex-col items-center justify-start text-center z-10 pointer-events-none">
          {/* Top Royal Star Motif */}
          <svg className="w-3.5 h-3.5 text-[#C49A52] mb-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>

          {/* MEHRAAB Wordmark */}
          <span className="font-serif text-[22px] tracking-[0.28em] font-light text-[#F8F1E7] uppercase leading-tight select-none">
            MEHRAAB
          </span>

          {/* Subtitle Divider Line */}
          <div className="flex items-center space-x-1.5 my-1.5 opacity-90">
            <span className="h-[0.75px] w-5 bg-[#C49A52]/60"></span>
            <span className="text-[#C49A52] text-[7px] leading-none">✦</span>
            <span className="h-[0.75px] w-5 bg-[#C49A52]/60"></span>
          </div>

          {/* Subtitle */}
          <span className="text-[8px] tracking-[0.32em] font-sans font-medium text-[#C49A52] uppercase select-none">
            ROYAL ATTAR & PERFUMES
          </span>
        </div>
      </div>

      {/* Mobile Crest (< 640px) */}
      <div className="sm:hidden relative w-[155px] h-[98px] filter drop-shadow-[0_4px_8px_rgba(23,52,95,0.18)]">
        <svg
          viewBox="0 0 155 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M 0 0 
               L 155 0 
               L 155 52 
               C 155 68, 141 79, 120 86 
               C 100 93, 86 97, 77.5 98 
               C 69 97, 55 93, 35 86 
               C 14 79, 0 68, 0 52 
               Z"
            fill="#17345F"
          />
          <path
            d="M 0 0 
               L 155 0 
               L 155 52 
               C 155 68, 141 79, 120 86 
               C 100 93, 86 97, 77.5 98 
               C 69 97, 55 93, 35 86 
               C 14 79, 0 68, 0 52 
               Z"
            stroke="#C49A52"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 4 0 
               L 151 0 
               L 151 50 
               C 151 65, 137 76, 117 83 
               C 98 90, 85 93, 77.5 94 
               C 70 93, 57 90, 38 83 
               C 18 76, 4 65, 4 50 
               Z"
            stroke="#C49A52"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>

        <div className="absolute inset-0 pt-2 px-2 flex flex-col items-center justify-start text-center z-10 pointer-events-none">
          <svg className="w-2.5 h-2.5 text-[#C49A52] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>

          <span className="font-serif text-[15px] tracking-[0.24em] font-light text-[#F8F1E7] uppercase leading-tight select-none">
            MEHRAAB
          </span>

          <div className="flex items-center space-x-1 my-0.5">
            <span className="h-[0.5px] w-3 bg-[#C49A52]/60"></span>
            <span className="text-[#C49A52] text-[6px]">✦</span>
            <span className="h-[0.5px] w-3 bg-[#C49A52]/60"></span>
          </div>

          <span className="text-[6.5px] tracking-[0.22em] font-sans font-medium text-[#C49A52] uppercase select-none">
            ROYAL ATTAR & PERFUMES
          </span>
        </div>
      </div>
    </Link>
  );
};

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return null;
  }

  // Active link helper
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `relative py-1 transition-colors duration-200 hover:text-[#C49A52] ${
      isActive ? "text-[#17345F] font-semibold" : "text-[#17345F]/90"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C49A52] after:transition-transform after:duration-300 ${
      isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Layer 01 — Announcement Bar */}
      <AnnouncementBar />

      {/* Layer 02 — Main Navigation */}
      <nav
        className={`bg-[#F8F1E7] border-b border-[#C49A52]/25 text-[#17345F] transition-all duration-300 ${
          isScrolled ? "shadow-md py-0" : "py-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] sm:h-[84px] flex items-center justify-between relative">
          {/* Desktop Navigation Layout (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-between w-full h-full">
            {/* Left Navigation Group */}
            <div className="flex-1 flex items-center justify-end pr-6 xl:pr-10 space-x-5 lg:space-x-6 xl:space-x-8 text-[10.5px] xl:text-[11.5px] tracking-[0.2em] font-medium uppercase text-[#17345F]">
              <Link href="/" className={getLinkClass("/")}>
                HOME
              </Link>
              <Link href="/attar" className={getLinkClass("/attar")}>
                ATTAR
              </Link>
              <Link href="/perfumes" className={getLinkClass("/perfumes")}>
                PERFUMES
              </Link>
              <Link href="/collections" className={getLinkClass("/collections")}>
                COLLECTIONS
              </Link>
            </div>

            {/* Reserved Center Spacer matching Crest Plaque width */}
            <div className="w-[220px] xl:w-[240px] flex-none h-full" aria-hidden="true" />

            {/* Right Navigation Group & Utility Icons */}
            <div className="flex-1 flex items-center justify-start pl-6 xl:pl-10 space-x-5 lg:space-x-6 xl:space-x-8">
              <div className="flex items-center space-x-5 lg:space-x-6 xl:space-x-8 text-[10.5px] xl:text-[11.5px] tracking-[0.2em] font-medium uppercase text-[#17345F]">
                <Link href="/gifting" className={getLinkClass("/gifting")}>
                  GIFTING
                </Link>
                <Link href="/our-story" className={getLinkClass("/our-story")}>
                  OUR STORY
                </Link>
                <Link href="/journal" className={getLinkClass("/journal")}>
                  JOURNAL
                </Link>
              </div>

              {/* Subtle Vertical Divider */}
              <span className="h-4 w-[1px] bg-[#C49A52]/35 flex-none"></span>

              {/* Utility Icons */}
              <div className="flex items-center space-x-3.5 xl:space-x-5 text-[#17345F] flex-none">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1 hover:text-[#C49A52] transition-colors focus:outline-none"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 stroke-[1.3]" />
                </button>

                <Link
                  href="/account"
                  className="p-1 hover:text-[#C49A52] transition-colors focus:outline-none"
                  aria-label="Account"
                >
                  <User className="w-4 h-4 stroke-[1.3]" />
                </Link>

                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className="p-1 hover:text-[#C49A52] transition-colors focus:outline-none relative"
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4 stroke-[1.3]" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#8F304F] text-[#F8F1E7] text-[8px] flex items-center justify-center font-mono font-semibold">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-1 hover:text-[#C49A52] transition-colors focus:outline-none relative"
                  aria-label="Shopping Bag"
                >
                  <ShoppingBag className="w-4 h-4 stroke-[1.3]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#17345F] text-[#F8F1E7] text-[8px] flex items-center justify-center font-mono font-semibold border border-[#C49A52]/40">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Bar Layout (< 1024px) */}
          <div className="lg:hidden flex items-center justify-between w-full h-full">
            {/* Mobile Left Group: Hamburger Toggle + Search */}
            <div className="flex items-center space-x-3 text-[#17345F]">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 hover:text-[#C49A52] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[1.4]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[1.4]" />
                )}
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-1 hover:text-[#C49A52] transition-colors focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-4 h-4 stroke-[1.4]" />
              </button>
            </div>

            {/* Mobile Right Group: Wishlist + Bag Icons */}
            <div className="flex items-center space-x-3 text-[#17345F]">
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="p-1 hover:text-[#C49A52] transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 stroke-[1.4]" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#8F304F] text-[#F8F1E7] text-[8px] flex items-center justify-center font-mono font-semibold">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1 hover:text-[#C49A52] transition-colors relative"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.4]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#17345F] text-[#F8F1E7] text-[8px] flex items-center justify-center font-mono font-semibold border border-[#C49A52]/40">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Central MEHRAAB Brand Mark (Crest Plaque extending downward) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-auto">
            <MehraabCrest />
          </div>
        </div>
      </nav>

      {/* Refined Luxury Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F8F1E7] border-b border-[#C49A52]/30 text-[#17345F] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col space-y-1 divide-y divide-[#C49A52]/15 text-xs tracking-[0.22em] uppercase font-medium">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>HOME</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/attar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>ATTAR</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/perfumes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>PERFUMES</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/collections"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>COLLECTIONS</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/gifting"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>GIFTING</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/our-story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>OUR STORY</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/journal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>JOURNAL</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#C49A52] transition-colors"
            >
              <span>MY ACCOUNT</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C49A52]/70" />
            </Link>
          </nav>

          <div className="pt-3 text-center border-t border-[#C49A52]/20">
            <span className="text-[9px] tracking-[0.3em] font-serif text-[#C49A52] uppercase block">
              MEHRAAB • ROYAL ATTAR & PERFUMES
            </span>
            <span className="text-[8px] tracking-[0.2em] text-[#17345F]/70 font-mono mt-0.5 block">
              Crafted with Heritage in Rajasthan
            </span>
          </div>
        </div>
      )}
    </header>
  );
};


