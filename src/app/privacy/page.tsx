import React from "react";

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-[11px] tracking-[0.3em] text-[#C49A52] uppercase font-bold">CLIENT PROTECTION</span>
        <h1 className="font-serif text-4xl font-bold text-[#17345F]">PRIVACY POLICY</h1>
        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-xs space-y-4 leading-relaxed">
          <p>At MEHRAAB ROYAL ATTAR &amp; PERFUMES, protecting your personal information and privacy is paramount. This policy outlines how we collect, process, and safeguard your data when using our website and purchasing our luxury fragrance creations.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">1. INFORMATION WE COLLECT</h3>
          <p>We collect essential order information including your name, shipping address, email address, phone number, and transaction details required to fulfill delivery and provide customer concierge assistance.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">2. PAYMENT SECURITY</h3>
          <p>Online payment transactions are processed through 256-bit SSL encrypted channels via Razorpay. We never store credit card details or bank passwords on our servers.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">3. DATA USAGE</h3>
          <p>Your details are strictly used to fulfill orders, issue tracking updates, and communicate royal circle offers if you have opted in. We never sell your personal information to third parties.</p>
        </div>
      </div>
    </div>
  );
}
