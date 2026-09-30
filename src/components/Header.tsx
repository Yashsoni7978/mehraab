"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, User, ChevronRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";

// Layer 01 — Announcement Bar Component (Rani Pink #B94D70)
const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#B94D70] text-[#F8F1E7] text-[9.5px] sm:text-[10.5px] tracking-[0.25em] font-light uppercase py-2 px-4 flex items-center justify-center select-none z-20 relative min-h-[32px]">
      <span className="flex items-center space-x-2 text-center">
        <span>FREE SHIPPING ON ORDERS ABOVE ₹2000</span>
        <span className="text-[#C49A52] opacity-90 font-normal">|</span>
        <span>WE SHIP WORLDWIDE</span>
      </span>
    </div>
  );
};

// Central MEHRAAB Brand Mark — Architectural Header Extension (Rani Pink #B94D70)
const MehraabCrest: React.FC = () => {
  return (
    <Link
      href="/"
      className="group relative flex flex-col items-center justify-start focus:outline-none"
      aria-label="MEHRAAB Royal Attar & Perfumes"
    >
      {/* Desktop Architectural Center Extension (>= 640px) */}
      <div className="hidden sm:block relative w-[165px] xl:w-[175px] h-[92px] xl:h-[98px] transition-transform duration-300 group-hover:scale-[1.01]">
        {/* SVG Architectural Palace Silhouette merged into upper AnnouncementBar */}
        <svg
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Extension Fill — Rani Pink #B94D70 (Flushes with AnnouncementBar at y=0) */}
          <path
            d="M 12 0 
               L 188 0 
               C 195 0, 197 10, 197 22 
               L 197 45 
               C 197 70, 160 88, 100 98 
               C 40 88, 3 70, 3 45 
               L 3 22 
               C 3 10, 5 0, 12 0 
               Z"
            fill="#B94D70"
          />

          {/* Outer Antique Gold Inlay Outline #C49A52 (Sides & Bottom ONLY — open at y=0 to merge) */}
          <path
            d="M 12 0 
               C 5 0, 3 10, 3 22 
               L 3 45 
               C 3 70, 40 88, 100 98 
               C 160 88, 197 70, 197 45 
               L 197 22 
               C 197 10, 195 0, 188 0"
            stroke="#C49A52"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Inner Decorative Antique Gold Inset Arch Pin-stripe (Sides & Bottom ONLY) */}
          <path
            d="M 17 0 
               C 11 0, 8 11, 8 24 
               L 8 43 
               C 8 65, 42 82, 100 91 
               C 158 82, 192 65, 192 43 
               L 192 24 
               C 192 11, 189 0, 183 0"
            stroke="#C49A52"
            strokeWidth="0.75"
            strokeOpacity="0.55"
            fill="none"
          />
        </svg>

        {/* Extension Content Overlay */}
        <div className="absolute inset-0 pt-2 pb-1.5 px-3 flex flex-col items-center justify-start text-center z-10 pointer-events-none">
          {/* Top Royal Star Motif */}
          <svg className="w-3 h-3 text-[#C49A52] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>

          {/* MEHRAAB Wordmark */}
          <span className="font-serif text-[17px] xl:text-[18px] tracking-[0.24em] font-light text-[#F8F1E7] uppercase leading-tight select-none">
            MEHRAAB
          </span>

          {/* Subtitle Divider Line */}
          <div className="flex items-center space-x-1.5 my-0.5 opacity-90">
            <span className="h-[0.75px] w-3.5 bg-[#C49A52]/70"></span>
            <span className="text-[#C49A52] text-[6px] leading-none">✦</span>
            <span className="h-[0.75px] w-3.5 bg-[#C49A52]/70"></span>
          </div>

          {/* Subtitle */}
          <span className="text-[6.5px] xl:text-[7px] tracking-[0.24em] font-sans font-medium text-[#C49A52] uppercase select-none">
            ROYAL ATTAR &amp; PERFUMES
          </span>
        </div>
      </div>

      {/* Mobile Architectural Center Extension (< 640px) */}
      <div className="sm:hidden relative w-[118px] min-[360px]:w-[124px] h-[70px] min-[360px]:h-[74px]">
        <svg
          viewBox="0 0 140 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M 10 0 
               L 130 0 
               C 135 0, 137 8, 137 18 
               L 137 36 
               C 137 54, 112 69, 70 76 
               C 28 69, 3 54, 3 36 
               L 3 18 
               C 3 8, 5 0, 10 0 
               Z"
            fill="#B94D70"
          />
          <path
            d="M 10 0 
               C 5 0, 3 8, 3 18 
               L 3 36 
               C 3 54, 28 69, 70 76 
               C 112 69, 137 54, 137 36 
               L 137 18 
               C 137 8, 135 0, 130 0"
            stroke="#C49A52"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 14 0 
               C 9 0, 7 9, 7 20 
               L 7 34 
               C 7 50, 29 64, 70 70 
               C 111 64, 133 50, 133 34 
               L 133 20 
               C 133 9, 131 0, 126 0"
            stroke="#C49A52"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            fill="none"
          />
        </svg>

        <div className="absolute inset-0 pt-1.5 px-2 flex flex-col items-center justify-start text-center z-10 pointer-events-none">
          <svg className="w-2.5 h-2.5 text-[#C49A52] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
          </svg>

          <span className="font-serif text-[12.5px] min-[360px]:text-[13.5px] tracking-[0.2em] font-light text-[#F8F1E7] uppercase leading-tight select-none">
            MEHRAAB
          </span>

          <div className="flex items-center space-x-1 my-0.5">
            <span className="h-[0.5px] w-2.5 bg-[#C49A52]/70"></span>
            <span className="text-[#C49A52] text-[5px]">✦</span>
            <span className="h-[0.5px] w-2.5 bg-[#C49A52]/70"></span>
          </div>

          <span className="text-[5.5px] min-[360px]:text-[5.8px] tracking-[0.16em] font-sans font-medium text-[#C49A52] uppercase select-none">
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

  // Active link helper with Baby Pink (#F8DDE5) navbar and Rani Pink (#B94D70) active accents
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

      {/* Layer 02 — Main Baby Pink Navbar (#F8DDE5) */}
      <nav
        className={`bg-[#F8DDE5] border-b border-[#C49A52]/30 text-[#17345F] transition-all duration-300 ${
          isScrolled ? "shadow-md py-0" : "py-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-[52px] sm:h-[58px] flex items-center justify-between relative">
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

            {/* Reserved Center Spacer matching Architectural Extension width */}
            <div className="w-[165px] xl:w-[175px] flex-none h-full" aria-hidden="true" />

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

          {/* Central MEHRAAB Brand Mark (Seamlessly integrated Architectural Extension) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-30 pointer-events-auto">
            <MehraabCrest />
          </div>
        </div>
      </nav>

      {/* Refined Luxury Mobile Navigation Drawer (Baby Pink #F8DDE5 Theme) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F8DDE5] border-b border-[#C49A52]/30 text-[#17345F] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
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



