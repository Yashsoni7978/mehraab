"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Send, Check } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function WeddingGiftingPage() {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "100-250 Guests",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Wedding concierge inquiry received!");
  };

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C49A52]" />
            BESPOKE FAVORS &amp; WARDROBES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#17345F]">
            ROYAL WEDDING GIFTING
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed">
            Curate personalized attar favor boxes embossed with your gold monogram or wedding crest for distinguished guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#C49A52]/30 shadow-royal">
            <Image src="/images/royal-gift-box.jpg" alt="Wedding Gift Chest" fill className="object-cover" />
          </div>

          {submitted ? (
            <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-center space-y-4">
              <Check className="w-12 h-12 text-[#176B58] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#17345F]">INQUIRY RECEIVED</h3>
              <p className="text-xs text-[#756B63]">
                Our wedding concierge will contact you within 12 hours with custom catalog pricing and sample box arrangements.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 sm:p-8 rounded-2xl shadow-soft space-y-4 text-xs">
              <h3 className="font-serif text-2xl font-bold text-[#17345F]">WEDDING CONCIERGE INQUIRY</h3>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">FULL NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Bride/Groom or Planner Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17345F] uppercase mb-1">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#17345F] uppercase mb-1">PHONE</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">ESTIMATED QUANTITY</label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none font-semibold"
                >
                  <option value="50-100 Favor Boxes">50-100 Favor Boxes</option>
                  <option value="100-250 Favor Boxes">100-250 Favor Boxes</option>
                  <option value="250-500 Favor Boxes">250-500 Favor Boxes</option>
                  <option value="500+ Grand Wedding">500+ Grand Wedding</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">SPECIAL CUSTOMIZATION REQUESTS</label>
                <textarea
                  placeholder="Custom monogram, fragrance preferences, ribbon colors..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none h-20"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#B94D70] text-[#FFF9F1] text-xs font-semibold tracking-[0.2em] uppercase rounded-lg hover:bg-[#8F304F] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST WEDDING CATALOG &amp; SAMPLES</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
