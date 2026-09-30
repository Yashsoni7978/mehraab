"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = `MEH-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="bg-[#F8F1E7] min-h-screen pt-32 pb-24 text-[#17345F]">
      <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#FFF9F1] border border-[#C49A52]/40 flex items-center justify-center text-[#17345F] shadow-md">
          <CheckCircle2 className="w-10 h-10 text-[#C49A52] stroke-[1.5]" />
        </div>

        <div className="space-y-3">
          <span className="text-[10px] tracking-[0.35em] text-[#C49A52] uppercase font-mono block">
            ROYAL SELECTION CONFIRMED
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#17345F]">
            ORDER CONFIRMED
          </h1>
          <p className="text-xs sm:text-sm text-[#756B63] max-w-md mx-auto font-light leading-relaxed">
            Thank you for patronizing MEHRAAB. Your order has been registered in our Jaipur vault archives and is being prepared for dispatch.
          </p>
        </div>

        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 space-y-3 text-left text-xs text-[#756B63]">
          <div className="flex justify-between border-b border-[#C49A52]/20 pb-2">
            <span className="font-mono text-[10px] uppercase text-[#C49A52]">ORDER REFERENCE</span>
            <span className="font-mono font-semibold text-[#17345F]">{orderNumber}</span>
          </div>
          <div className="flex justify-between border-b border-[#C49A52]/20 pb-2">
            <span className="font-mono text-[10px] uppercase text-[#C49A52]">EXPECTED DISPATCH</span>
            <span className="font-light text-[#17345F]">Within 24 Hours via Express Royal Courier</span>
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-[10px] uppercase text-[#C49A52]">DISPATCH ORIGIN</span>
            <span className="font-light text-[#17345F]">Mehraab Royal Vaults, Jaipur, Rajasthan</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#17345F] text-[#F8F1E7] hover:bg-[#C49A52] hover:text-[#17345F] text-xs font-mono tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.4]" />
            <span>CONTINUE SHOPPING</span>
          </Link>

          <Link
            href="/account"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FFF9F1] border border-[#C49A52]/30 text-[#17345F] hover:border-[#C49A52] text-xs font-mono tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2"
          >
            <span>VIEW MY ACCOUNT</span>
            <ArrowRight className="w-4 h-4 stroke-[1.4]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
