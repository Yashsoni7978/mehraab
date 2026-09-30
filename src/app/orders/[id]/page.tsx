"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Truck, Package, Clock, ShieldCheck, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Order } from "@/lib/store";

interface OrderTrackingPageProps {
  params: {
    id: string;
  };
}

export default function OrderTrackingPage({ params }: OrderTrackingPageProps) {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/orders/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrder(data.order);
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [params.id]);

  if (loading) {
    return (
      <div className="bg-[#F8F1E7] min-h-screen py-24 text-center text-[#17345F] font-serif text-xl">
        Locating Royal Order Archives...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="bg-[#F8F1E7] min-h-screen py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#17345F]">Order Reference Not Found</h1>
        <Link href="/account" className="text-xs font-bold uppercase tracking-wider text-[#B94D70]">
          Return to My Account
        </Link>
      </div>
    );
  }

  const steps = [
    { key: "ORDER_PLACED", label: "Order Placed" },
    { key: "PAYMENT_CONFIRMED", label: "Payment Confirmed" },
    { key: "PROCESSING", label: "Handcrafting Batch" },
    { key: "PACKED", label: "Royal Packaging" },
    { key: "SHIPPED", label: "Shipped" },
    { key: "OUT_FOR_DELIVERY", label: "Out for Delivery" },
    { key: "DELIVERED", label: "Delivered" },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === order.orderStatus);

  return (
    <div className="bg-[#F8F1E7] min-h-screen py-16 text-[#241C1B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#17345F] text-[#DDBD78] border border-[#C49A52] flex items-center justify-center shadow-royal">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-[11px] tracking-[0.35em] text-[#C49A52] uppercase font-bold">
            ORDER REFERENCE: {order.orderNumber}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#17345F]">
            ORDER STATUS &amp; TRACKING
          </h1>
          <p className="text-xs text-[#756B63]">
            Placed on {new Date(order.createdAt).toLocaleDateString("en-IN", { dateStyle: "full" })}
          </p>
        </div>

        {/* Live Status Timeline Stepper */}
        <div className="bg-[#FFF9F1] border border-[#C49A52]/40 rounded-xl p-6 sm:p-8 shadow-soft space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#17345F] border-b border-[#C49A52]/20 pb-3">
            DELIVERY TIMELINE
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {steps.map((st, i) => {
              const isPassed = currentStepIndex >= i || order.orderStatus === "DELIVERED";
              const isCurrent = currentStepIndex === i;
              return (
                <div key={st.key} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isPassed
                        ? "bg-[#17345F] text-[#DDBD78] border border-[#C49A52]"
                        : "bg-[#F8F1E7] text-[#756B63] border border-[#C49A52]/30"
                    } ${isCurrent ? "ring-4 ring-[#C49A52]/30" : ""}`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider ${
                      isPassed ? "text-[#17345F]" : "text-[#756B63]"
                    }`}
                  >
                    {st.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Courier tracking alert if shipped */}
          {order.trackingNumber && (
            <div className="p-4 bg-[#F8F1E7] border border-[#C49A52]/40 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#C49A52]" />
                <div>
                  <span className="font-bold text-[#17345F]">{order.courierName || "Royal Express Courier"}</span>
                  <p className="text-[#756B63]">AWB Tracking No: <span className="font-mono font-bold text-[#241C1B]">{order.trackingNumber}</span></p>
                </div>
              </div>
              {order.trackingUrl && (
                <a
                  href={order.trackingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#17345F] text-[#FFF9F1] rounded text-[11px] font-semibold uppercase tracking-wider hover:bg-[#B94D70] flex items-center gap-1.5 shrink-0"
                >
                  <span>TRACK ON COURIER WEBSITE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Order Details & Items Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Items */}
          <div className="lg:col-span-7 bg-[#FFF9F1] border border-[#C49A52]/30 rounded-xl p-6 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#17345F] border-b border-[#C49A52]/20 pb-3">
              ITEMS ORDERED ({order.items.length})
            </h3>
            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs pb-3 border-b border-[#C49A52]/10">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-14 bg-[#F8F1E7] rounded overflow-hidden border border-[#C49A52]/20 shrink-0">
                      <Image src={item.productImage} alt={item.productName} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-[#17345F] text-sm">{item.productName}</p>
                      <p className="text-[10px] text-[#756B63]">{item.size} x {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-serif font-bold text-[#241C1B] text-sm">
                    ₹ {item.totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-[#756B63] space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {order.subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span>GST Tax (Included)</span>
                <span>₹ {order.tax.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-[#C49A52] font-semibold">{order.shippingFee === 0 ? "FREE" : `₹ ${order.shippingFee}`}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#C49A52]/20 font-bold text-[#17345F] text-base">
                <span>TOTAL PAID</span>
                <span className="font-serif">₹ {order.totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Delivery Address & Customer Info */}
          <div className="lg:col-span-5 bg-[#FFF9F1] border border-[#C49A52]/30 rounded-xl p-6 shadow-soft space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#17345F] border-b border-[#C49A52]/20 pb-3">
              DELIVERY DESTINATION
            </h3>
            <div className="text-xs text-[#756B63] space-y-2">
              <p className="font-bold text-[#17345F] text-sm">{order.customer.fullName}</p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-[#C49A52] shrink-0 mt-0.5" />
                <span>{order.customer.address}, {order.customer.city}, {order.customer.state} - {order.customer.pincode}</span>
              </p>
              <p>Email: {order.customer.email}</p>
              <p>Phone: {order.customer.phone}</p>
              {order.customer.gstin && <p className="font-mono text-[11px] text-[#17345F]">GSTIN: {order.customer.gstin}</p>}
            </div>

            <div className="pt-4 border-t border-[#C49A52]/20 text-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#17345F] text-[#FFF9F1] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#B94D70] transition-colors"
              >
                <span>CONTINUE SHOPPING</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
