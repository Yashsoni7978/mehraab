"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showToast("Welcome to the MEHRAAB Fragrance House.");
    setEmail("");
  };

  return (
    <footer className="bg-[#F8F1E7] text-[#1A1615] border-t border-[#C49A52]/20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        {/* Top Wordmark & Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#C49A52]/20 gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-[0.2em] text-[#1A1615] uppercase">
              MEHRAAB
            </h2>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C49A52] mt-2 font-mono">
              THE ART OF ROYAL FRAGRANCE &bull; JAIPUR
            </p>
          </div>
          <p className="text-sm font-light text-[#756B63] max-w-md leading-relaxed">
            A contemporary Indian luxury fragrance house honoring century-old attar distillation, botanical pure oils, and royal Jaipur heritage.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-light tracking-wider">
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C49A52] font-mono">COLLECTIONS</h4>
            <ul className="space-y-2.5 text-[#1A1615]">
              <li><Link href="/attar" className="hover:opacity-60 transition-opacity">Pure Botanical Attars</Link></li>
              <li><Link href="/perfumes" className="hover:opacity-60 transition-opacity">Eau de Parfum</Link></li>
              <li><Link href="/oud" className="hover:opacity-60 transition-opacity">Assam Oud & Woods</Link></li>
              <li><Link href="/gifting" className="hover:opacity-60 transition-opacity">Custom Jaipur Gift Chests</Link></li>
              <li><Link href="/shop" className="hover:opacity-60 transition-opacity">Master Catalogue</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C49A52] font-mono">THE HOUSE</h4>
            <ul className="space-y-2.5 text-[#1A1615]">
              <li><Link href="/our-story" className="hover:opacity-60 transition-opacity">Our Jaipur Story</Link></li>
              <li><Link href="/craftsmanship" className="hover:opacity-60 transition-opacity">Hydro-Distillation Artistry</Link></li>
              <li><Link href="/journal" className="hover:opacity-60 transition-opacity">Editorial Fragrance Journal</Link></li>
              <li><Link href="/wedding-gifting" className="hover:opacity-60 transition-opacity">Bespoke Wedding Gifting</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C49A52] font-mono">CLIENT SERVICES</h4>
            <ul className="space-y-2.5 text-[#1A1615]">
              <li><Link href="/account" className="hover:opacity-60 transition-opacity">Track Order</Link></li>
              <li><Link href="/returns" className="hover:opacity-60 transition-opacity">Returns & Pickups</Link></li>
              <li><Link href="/shipping-policy" className="hover:opacity-60 transition-opacity">Shipping & Complimentary Delivery</Link></li>
              <li><Link href="/contact" className="hover:opacity-60 transition-opacity">Concierge Inquiry</Link></li>
              <li><Link href="/admin" className="hover:opacity-60 transition-opacity opacity-70">Admin Access</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#C49A52] font-mono">FRAGRANCE JOURNAL</h4>
            <p className="text-xs text-[#756B63] leading-relaxed">
              Receive private scent invitations, seasonal harvests, and limited release announcements.
            </p>
            {subscribed ? (
              <p className="text-xs text-[#176B58] flex items-center gap-1.5 pt-1">
                <Check className="w-3.5 h-3.5" /> Subscribed to private updates.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center border-b border-[#1A1615] pb-1 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs placeholder-[#756B63] focus:outline-none"
                />
                <button type="submit" className="p-1 hover:opacity-60 transition-opacity" aria-label="Subscribe">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-[#C49A52]/20 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.2em] text-[#756B63] space-y-4 sm:space-y-0 uppercase font-mono">
          <p>&copy; {new Date().getFullYear()} MEHRAAB FRAGRANCES. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#1A1615]">PRIVACY</Link>
            <Link href="/terms" className="hover:text-[#1A1615]">TERMS</Link>
            <span>JAIPUR &bull; KANNAUJ &bull; MYSORE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

