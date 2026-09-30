import React from "react";

export default function ShippingPolicyPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-[11px] tracking-[0.3em] text-[#C49A52] uppercase font-bold">DELIVERY &amp; FULFILLMENT</span>
        <h1 className="font-serif text-4xl font-bold text-[#17345F]">SHIPPING &amp; PACKAGING POLICY</h1>
        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-xs space-y-4 leading-relaxed">
          <p>Every MEHRAAB parcel is packaged in cushioned gold-embossed presentation boxes to ensure your luxury bottles arrive safely.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">1. SHIPPING TIMELINES</h3>
          <p>Orders placed before 2:00 PM IST are dispatched on the same business day via courier partners (Blue Dart, Shiprocket, Delhivery). Delivery typically takes 2 to 4 business days across India.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">2. FREE SHIPPING THRESHOLD</h3>
          <p>Complimentary express shipping &amp; a free sample box apply automatically on all orders total exceeding ₹3,000.</p>
        </div>
      </div>
    </div>
  );
}
