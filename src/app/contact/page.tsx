"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ContactPage() {
  const { showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast("Concierge message received.");
  };

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold">ROYAL CONCIERGE</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#17345F]">CONTACT US</h1>
          <p className="text-xs text-[#756B63]">
            Our fragrance advisors are available to guide your scent profile selection or assist with custom orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl shadow-soft space-y-6 text-xs">
            <h3 className="font-serif text-2xl font-bold text-[#17345F]">JAIPUR ATELIER &amp; HQ</h3>
            <div className="space-y-4 text-[#756B63]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#17345F]">Mehraab Royal Fragrances Atelier</p>
                  <p>108 Johari Bazaar, Near Hawa Mahal</p>
                  <p>Jaipur, Rajasthan — 302002, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C49A52] shrink-0" />
                <p>+91 98765 43210 (Mon - Sat, 10 AM - 7 PM IST)</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C49A52] shrink-0" />
                <p>concierge@mehraab.in</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-center space-y-4 flex flex-col justify-center">
              <Check className="w-12 h-12 text-[#176B58] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#17345F]">MESSAGE RECEIVED</h3>
              <p className="text-xs text-[#756B63]">
                Our concierge desk will respond to {email} within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 sm:p-8 rounded-2xl shadow-soft space-y-4 text-xs">
              <h3 className="font-serif text-2xl font-bold text-[#17345F]">SEND A MESSAGE</h3>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-[#17345F] uppercase mb-1">HOW CAN WE ASSIST YOU?</label>
                <textarea
                  required
                  placeholder="Inquire about fragrance matching, bulk orders or custom notes..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none h-24"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#17345F] text-[#FFF9F1] text-xs font-semibold tracking-[0.2em] uppercase rounded-lg hover:bg-[#B94D70] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>SEND CONCIERGE MESSAGE</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
