"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Send, Check } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CorporateGiftingPage() {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    quantity: "50-100 Units",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Corporate gifting inquiry received!");
  };

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C49A52]" />
            EXECUTIVE GIFTS &amp; PARTNER HONORS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#17345F]">
            CORPORATE GIFTING
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] leading-relaxed">
            Distinguished fragrance gift boxes featuring custom logo embossing, bespoke attar curations, and executive velvet presentation chests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#C49A52]/30 shadow-royal">
            <Image src="/images/royal-gift-box.jpg" alt="Corporate Executive Gift Box" fill className="object-cover" />
          </div>

          {submitted ? (
            <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-center space-y-4">
              <Check className="w-12 h-12 text-[#176B58] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#17345F]">CORPORATE INQUIRY SENT</h3>
              <p className="text-xs text-[#756B63]">
                Our corporate relations desk will issue a formal quotation and sample set within 12 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 sm:p-8 rounded-2xl shadow-soft space-y-4 text-xs">
              <h3 className="font-serif text-2xl font-bold text-[#17345F]">CORPORATE CONCIERGE</h3>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">COMPANY NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Enterprises"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#17345F] uppercase mb-1">CONTACT PERSON</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#17345F] uppercase mb-1">CORPORATE EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">ESTIMATED ORDER VOLUME</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none font-semibold"
                >
                  <option value="25-50 Gift Chests">25-50 Gift Chests</option>
                  <option value="50-100 Gift Chests">50-100 Gift Chests</option>
                  <option value="100-250 Gift Chests">100-250 Gift Chests</option>
                  <option value="250+ Bespoke Corporate Order">250+ Bespoke Corporate Order</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">CUSTOM BRANDING / LOGO EMBOSSING</label>
                <textarea
                  placeholder="Specify branding requirements or delivery dates..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none h-20"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#17345F] text-[#FFF9F1] text-xs font-semibold tracking-[0.2em] uppercase rounded-lg hover:bg-[#B94D70] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST CORPORATE QUOTATION</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
