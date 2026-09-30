"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      category: "ATTAR & PERFUME CARE",
      q: "What makes Mehraab Attars different from Western perfumes?",
      a: "Mehraab Attars are 100% alcohol-free pure botanical oils hydro-distilled in traditional copper degs and hand-aged in creamy Mysore sandalwood oil. They sit intimately on the skin to release a warm, non-intrusive 12+ hour fragrance aura.",
    },
    {
      category: "ATTAR & PERFUME CARE",
      q: "How should I apply concentrated attar oil?",
      a: "Dab a tiny drop using the glass wand applicator directly onto pulse points—wrists, behind earlobes, and the collarbone. Allow body warmth to unfold the delicate floral heart notes naturally.",
    },
    {
      category: "ORDERS & SHIPPING",
      q: "What are your domestic delivery timelines in India?",
      a: "Orders are processed within 24 hours from our Jaipur vaults. Standard delivery takes 2–4 business days for major metro cities and 3–5 business days for regional addresses.",
    },
    {
      category: "ORDERS & SHIPPING",
      q: "Do you ship internationally worldwide?",
      a: "Yes. We ship worldwide via DHL Express and FedEx International. International delivery typically takes 5–8 business days depending on customs clearance.",
    },
    {
      category: "PAYMENT & COD",
      q: "Do you offer Cash on Delivery (COD)?",
      a: "Yes, Cash on Delivery is available for domestic orders across major pincodes in India up to ₹10,000.",
    },
    {
      category: "PAYMENT & COD",
      q: "What online payment methods do you accept?",
      a: "We accept all major Credit Cards, Debit Cards, UPI (GPay, PhonePe, Paytm), NetBanking, and Razorpay secure checkout.",
    },
    {
      category: "RETURNS & EXCHANGES",
      q: "What is your return policy?",
      a: "Unopened flacons in original velvet presentation boxes with intact seals may be returned or exchanged within 7 days of delivery.",
    },
    {
      category: "GIFTING SERVICES",
      q: "Can I request custom gift notes and royal packaging?",
      a: "All gift chest orders include complimentary gold embossed calligraphy notes and silk ribbon packaging. Custom business messaging can be entered at checkout.",
    },
  ];

  return (
    <div className="bg-[#F8F1E7] min-h-screen text-[#17345F] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-mono">
            CLIENT ASSISTANCE & ADVICE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#17345F]">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] max-w-md mx-auto font-light leading-relaxed">
            Guidance on our botanical extractions, application rituals, shipping logistics, and royal gifting.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-[#FFF9F1] border border-[#C49A52]/25 space-y-0 transition-colors hover:border-[#C49A52]"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-[0.25em] text-[#C49A52] uppercase block">
                    {f.category}
                  </span>
                  <h3 className="font-serif font-medium text-lg sm:text-xl text-[#17345F]">
                    {f.q}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#C49A52] transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#756B63] font-light leading-relaxed border-t border-[#C49A52]/15">
                  <p className="pt-3">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

