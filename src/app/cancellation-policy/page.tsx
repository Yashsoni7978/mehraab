import React from "react";

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-[11px] tracking-[0.3em] text-[#C49A52] uppercase font-bold">CLIENT ASSISTANCE</span>
        <h1 className="font-serif text-4xl font-bold text-[#17345F]">CANCELLATION &amp; REFUND POLICY</h1>
        <div className="bg-[#FFF9F1] border border-[#C49A52]/30 p-8 rounded-2xl text-xs space-y-4 leading-relaxed">
          <p>Orders can be cancelled free of charge prior to dispatch. If dispatched, our 7-day return policy applies.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">1. CANCELLATION PROCESS</h3>
          <p>Contact our concierge team at concierge@mehraab.in or submit a request via our returns portal with your order number.</p>
          <h3 className="font-serif text-lg font-bold text-[#17345F] pt-2">2. REFUND TIMELINES</h3>
          <p>Approved refunds are credited to your original payment method within 3-5 business days upon receipt of returned goods.</p>
        </div>
      </div>
    </div>
  );
}
