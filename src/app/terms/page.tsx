import React from "react";

export default function TermsPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-[11px] tracking-[0.3em] text-[#C49A52] uppercase font-bold">CLIENT AGREEMENT</span>
        <h1 className="font-serif text-4xl font-bold text-[#17345F]">TERMS OF SERVICE</h1>
        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-xs space-y-4 leading-relaxed">
          <p>By placing an order on MEHRAAB ROYAL ATTAR &amp; PERFUMES, you agree to the terms governing order placement, shipping timelines, and artisanal product characteristics.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">1. ARTISANAL BATCH VARIATIONS</h3>
          <p>Because our attars and perfumes contain natural botanical extractions (such as Kashmir Saffron, Damask Rose, and Sandalwood), minor harvest color variations may occur naturally across artisanal batches.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">2. PRICING &amp; TAXES</h3>
          <p>All prices displayed on the store include applicable GST taxes. Shipping fees are calculated at checkout and are complimentary on orders above ₹3,000.</p>
        </div>
      </div>
    </div>
  );
}
