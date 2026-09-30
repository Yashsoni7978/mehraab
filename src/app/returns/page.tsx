"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RotateCcw, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ReturnsPage() {
  const { showToast } = useShop();

  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("Scent profile mismatch");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [returnId, setReturnId] = useState("");

  const handleSubmitReturn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber || !email) return;

    try {
      const res = await fetch("/api/returns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: orderNumber,
          customerEmail: email,
          reason: `${reason}: ${comments}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setReturnId(data.returnRequest.id);
        setSubmitted(true);
        showToast("Return request submitted successfully");
      } else {
        showToast(data.message || "Failed to submit return request");
      }
    } catch (e) {
      showToast("Error processing return request");
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F8F1E7] min-h-screen py-24 text-[#241C1B]">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#17345F] text-[#DDBD78] border border-[#C49A52] flex items-center justify-center shadow-royal">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-[10px] tracking-[0.35em] text-[#C49A52] uppercase font-bold">RETURN INITIATED</span>
          <h1 className="font-serif text-3xl font-bold text-[#17345F]">RETURN REQUEST RECEIVED</h1>
          <p className="text-xs text-[#756B63]">
            Reference ID: <span className="font-bold text-[#17345F]">{returnId}</span> for Order <span className="font-bold text-[#17345F]">{orderNumber}</span>.
          </p>
          <p className="text-xs text-[#756B63] max-w-md mx-auto leading-relaxed">
            Our royal concierge will review your request within 24 hours and schedule a complimentary doorstep pickup. Once returned, your refund will be processed to the original payment method.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#17345F] text-[#FFF9F1] text-xs font-semibold uppercase tracking-wider rounded"
            >
              <span>RETURN TO HOMEPAGE</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold">CLIENT CARE</span>
          <h1 className="font-serif text-4xl font-bold text-[#17345F]">RETURNS &amp; REFUNDS</h1>
          <p className="text-xs text-[#756B63] max-w-md mx-auto">
            We offer hassle-free 7-day returns for unopened items and scent profiling exchanges.
          </p>
        </div>

        <form onSubmit={handleSubmitReturn} className="bg-[#FFF9F1] border border-[#C49A52]/30 p-6 sm:p-8 rounded-xl shadow-soft space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#17345F] uppercase mb-1">ORDER NUMBER</label>
            <input
              type="text"
              required
              placeholder="e.g. MEH-984210"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-[#17345F] uppercase mb-1">ACCOUNT EMAIL</label>
            <input
              type="email"
              required
              placeholder="Your email address used for order"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-[#17345F] uppercase mb-1">REASON FOR RETURN</label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none font-semibold"
            >
              <option value="Scent profile mismatch">Scent profile mismatch</option>
              <option value="Damaged during shipping">Damaged during shipping</option>
              <option value="Received wrong item">Received wrong item</option>
              <option value="Changed mind">Changed mind</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-[#17345F] uppercase mb-1">ADDITIONAL NOTES</label>
            <textarea
              placeholder="Provide any extra details for courier pickup..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full bg-[#F8F1E7] border border-[#C49A52]/40 p-3 rounded text-[#17345F] focus:outline-none h-24"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#17345F] text-[#FFF9F1] text-xs font-semibold tracking-[0.2em] uppercase rounded hover:bg-[#B94D70] transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>SUBMIT RETURN REQUEST</span>
          </button>
        </form>
      </div>
    </div>
  );
}
