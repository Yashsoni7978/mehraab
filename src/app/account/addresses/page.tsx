"use client";

import React from "react";
import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";

export default function AccountAddressesPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen pt-32 pb-24 text-[#17345F]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-8">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#C49A52] hover:text-[#17345F]"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[1.4]" />
          <span>BACK TO ACCOUNT</span>
        </Link>

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C49A52]">
            DELIVERY ARCHIVES
          </span>
          <h1 className="font-serif text-4xl font-light text-[#17345F]">SAVED ADDRESSES</h1>
        </div>

        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 space-y-4 max-w-lg">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#C49A52] shrink-0 mt-0.5" />
            <div className="text-xs text-[#756B63] space-y-1">
              <span className="font-mono text-[9px] uppercase text-[#C49A52] font-semibold block">PRIMARY PALACE ADDRESS</span>
              <p className="font-serif text-base text-[#17345F] font-medium">Raja Man Singh</p>
              <p>108 Palace Road, Near Hawa Mahal</p>
              <p>Jaipur, Rajasthan — 302002, India</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
