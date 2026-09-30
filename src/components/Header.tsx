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

// Central MEHRAAB Brand Mark — Royal Architectural Plaque Component
const MehraabCrest: React.FC = () => {
  return (
    <Link
      href="/"
      className="group relative flex flex-col items-center justify-start focus:outline-none"
      aria-label="MEHRAAB Royal Attar & Perfumes"
    >
      {/* Desktop Architectural Center Plaque (>= 640px) */}
      <div className="hidden sm:block relative w-[190px] xl:w-[200px] h-[148px] filter drop-shadow-[0_6px_14px_rgba(23,52,95,0.22)] transition-transform duration-300 group-hover:scale-[1.01]">
        {/* SVG Architectural Palace Jharokha Silhouette */}
        <svg
          viewBox="0 0 200 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Plaque Fill — Deep Royal Blue #17345F */}
          <path
            d="M 45 0 
               L 155 0 
               C 168 0, 180 8, 184 20 
               C 187 27, 188 35, 188 45 
               L 188 92 
               C 188 114, 168 128, 138 136 
               C 120 141, 108 145, 100 150 
               C 92 145, 80 141, 62 136 
               C 32 128, 12 114, 12 92 
               L 12 45 
               C 12 35, 13 27, 16 20 
               C 20 8, 32 0, 45 0 
               Z"
            fill="#17345F"
          />

          {/* Outer Antique Gold Architectural Outline #C49A52 */}
          <path
            d="M 45 0 
               L 155 0 
               C 168 0, 180 8, 184 20 
               C 187 27, 188 35, 188 45 
               L 188 92 
               C 188 114, 168 128, 138 136 
               C 120 141, 108 145, 100 150 
               C 92 145, 80 141, 62 136 
               C 32 128, 12 114, 12 92 
               L 12 45 
               C 12 35, 13 27, 16 20 
               C 20 8, 32 0, 45 0 
               Z"
            stroke="#C49A52"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Inner Decorative Antique Gold Inset Arch Pin-stripe */}
          <path
            d="M 49 4 
               L 151 4 
               C 162 4, 173 11, 177 22 
               C 180 28, 181 35, 181 44 
               L 181 89 
               C 181 109, 163 122, 135 130 
               C 118 135, 107 139, 100 143 
               C 93 139, 82 135, 65 130 
               C 37 122, 19 109, 19 89 
               L 19 44 
               C 19 35, 20 28, 23 22 
               C 27 11, 38 4, 49 4 
               Z"
            stroke="#C49A52"
            strokeWidth="0.75"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>

        {/* Plaque Content Overlay */}
        <div className="absolute inset-0 pt-3.5 pb-3 px-4 flex flex-col items-center justify-start text-center z-10 pointer-events-none">
          {/* Top Royal Star Motif */}
          <svg className="w-3.5 h-3.5 text-[#C49A52] mb-1.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>

          {/* MEHRAAB Wordmark */}
          <span className="font-serif text-[20px] xl:text-[21px] tracking-[0.26em] font-light text-[#F8F1E7] uppercase leading-tight select-none">
            MEHRAAB
          </span>

          {/* Subtitle Divider Line */}
          <div className="flex items-center space-x-1.5 my-1 opacity-90">
            <span className="h-[0.75px] w-4 bg-[#C49A52]/60"></span>
            <span className="text-[#C49A52] text-[6.5px] leading-none">✦</span>
            <span className="h-[0.75px] w-4 bg-[#C49A52]/60"></span>
          </div>

          {/* Subtitle */}
          <span className="text-[7.5px] tracking-[0.28em] font-sans font-medium text-[#C49A52] uppercase select-none">
            ROYAL ATTAR &amp; PERFUMES
          </span>
        </div>
      </div>

      {/* Mobile Architectural Center Plaque (< 640px) */}
      <div className="sm:hidden relative w-[130px] min-[360px]:w-[140px] h-[104px] min-[360px]:h-[110px] filter drop-shadow-[0_4px_10px_rgba(23,52,95,0.2)]">
        <svg
          viewBox="0 0 140 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M 32 0 
               L 108 0 
               C 117 0, 126 6, 129 14 
               C 131 19, 132 25, 132 32 
               L 132 66 
               C 132 82, 118 92, 97 98 
               C 84 102, 76 105, 70 108 
               C 64 105, 56 102, 43 98 
               C 22 92, 8 82, 8 66 
               L 8 32 
               C 8 25, 9 19, 11 14 
               C 14 6, 23 0, 32 0 
               Z"
            fill="#17345F"
          />
          <path
            d="M 32 0 
               L 108 0 
               C 117 0, 126 6, 129 14 
               C 131 19, 132 25, 132 32 
               L 132 66 
               C 132 82, 118 92, 97 98 
               C 84 102, 76 105, 70 108 
               C 64 105, 56 102, 43 98 
               C 22 92, 8 82, 8 66 
               L 8 32 
               C 8 25, 9 19, 11 14 
               C 14 6, 23 0, 32 0 
               Z"
            stroke="#C49A52"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 35 3 
               L 105 3 
               C 113 3, 121 8, 124 15 
               C 126 20, 127 25, 127 32 
               L 127 64 
               C 127 78, 114 87, 94 93 
               C 82 96, 75 99, 70 102 
               C 65 99, 58 96, 46 93 
               C 26 87, 13 78, 13 64 
               L 13 32 
               C 13 25, 14 20, 16 15 
               C 19 8, 27 3, 35 3 
               Z"
            stroke="#C49A52"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>

        <div className="absolute inset-0 pt-2.5 px-2 flex flex-col items-center justify-start text-center z-10 pointer-events-none">
          <svg className="w-2.5 h-2.5 text-[#C49A52] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>

          <span className="font-serif text-[14px] min-[360px]:text-[15px] tracking-[0.22em] font-light text-[#F8F1E7] uppercase leading-tight select-none">
            MEHRAAB
          </span>

          <div className="flex items-center space-x-1 my-0.5">
            <span className="h-[0.5px] w-3 bg-[#C49A52]/60"></span>
            <span className="text-[#C49A52] text-[5.5px]">✦</span>
            <span className="h-[0.5px] w-3 bg-[#C49A52]/60"></span>
          </div>

          <span className="text-[6px] min-[360px]:text-[6.5px] tracking-[0.2em] font-sans font-medium text-[#C49A52] uppercase select-none">
            ROYAL ATTAR &amp; PERFUMES
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

  // Active link helper with Soft Rani Pink background theme
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `relative py-1 transition-colors duration-200 hover:text-[#B94D70] ${
      isActive ? "text-[#B94D70] font-semibold" : "text-[#17345F]"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#B94D70] after:transition-transform after:duration-300 ${
      isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Layer 01 — Announcement Bar */}
      <AnnouncementBar />

      {/* Layer 02 — Main Soft Rani Pink Navbar (#F6DDE3) */}
      <nav
        className={`bg-[#F6DDE3] border-b border-[#C49A52]/30 text-[#17345F] transition-all duration-300 ${
          isScrolled ? "shadow-md py-0" : "py-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[78px] sm:h-[86px] flex items-center justify-between relative">
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

            {/* Reserved Center Spacer matching Architectural Plaque width */}
            <div className="w-[190px] xl:w-[200px] flex-none h-full" aria-hidden="true" />

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
              <span className="h-4 w-[1px] bg-[#C49A52]/40 flex-none"></span>

              {/* Utility Icons */}
              <div className="flex items-center space-x-3.5 xl:space-x-5 text-[#17345F] flex-none">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1 hover:text-[#B94D70] transition-colors focus:outline-none"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 stroke-[1.4]" />
                </button>

                <Link
                  href="/account"
                  className="p-1 hover:text-[#B94D70] transition-colors focus:outline-none"
                  aria-label="Account"
                >
                  <User className="w-4 h-4 stroke-[1.4]" />
                </Link>

                <button
                  onClick={() => setIsWishlistOpen(true)}
                  className="p-1 hover:text-[#B94D70] transition-colors focus:outline-none relative"
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4 stroke-[1.4]" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#B94D70] text-[#F8F1E7] text-[8px] flex items-center justify-center font-mono font-semibold">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="p-1 hover:text-[#B94D70] transition-colors focus:outline-none relative"
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
          </div>

          {/* Mobile Navigation Bar Layout (< 1024px) */}
          <div className="lg:hidden flex items-center justify-between w-full h-full">
            {/* Mobile Left Group: Hamburger Toggle + Search */}
            <div className="flex items-center space-x-3 text-[#17345F]">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 hover:text-[#B94D70] transition-colors focus:outline-none"
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
                className="p-1 hover:text-[#B94D70] transition-colors focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-4 h-4 stroke-[1.4]" />
              </button>
            </div>

            {/* Mobile Right Group: Wishlist + Bag Icons */}
            <div className="flex items-center space-x-3 text-[#17345F]">
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="p-1 hover:text-[#B94D70] transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 stroke-[1.4]" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#B94D70] text-[#F8F1E7] text-[8px] flex items-center justify-center font-mono font-semibold">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1 hover:text-[#B94D70] transition-colors relative"
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

          {/* Central MEHRAAB Brand Mark (Architectural Plaque mounted over navbar) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-auto">
            <MehraabCrest />
          </div>
        </div>
      </nav>

      {/* Refined Luxury Mobile Navigation Drawer (Soft Rani Pink Theme) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F6DDE3] border-b border-[#C49A52]/30 text-[#17345F] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col space-y-1 divide-y divide-[#C49A52]/20 text-xs tracking-[0.22em] uppercase font-medium">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>HOME</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/attar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>ATTAR</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/perfumes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>PERFUMES</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/collections"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>COLLECTIONS</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/gifting"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>GIFTING</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/our-story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>OUR STORY</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/journal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>JOURNAL</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 hover:text-[#B94D70] transition-colors"
            >
              <span>MY ACCOUNT</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B94D70]" />
            </Link>
          </nav>

          <div className="pt-3 text-center border-t border-[#C49A52]/20">
            <span className="text-[9px] tracking-[0.3em] font-serif text-[#17345F] uppercase block font-semibold">
              MEHRAAB • ROYAL ATTAR &amp; PERFUMES
            </span>
            <span className="text-[8px] tracking-[0.2em] text-[#B94D70] font-mono mt-0.5 block font-medium">
              Crafted with Heritage in Rajasthan
            </span>
          </div>
        </div>
      )}
    </header>
  );
};



