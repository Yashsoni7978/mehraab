"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ArrowRight, Droplets, Clock, Wind, Send } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useShop } from "@/context/ShopContext";
import { ProductCard } from "@/components/ProductCard";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

interface Review {
  id: string;
  customerName: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug || p.id === params.slug);

  const { addToCart, toggleWishlist, isInWishlist, showToast } = useShop();
  const isLiked = product ? isInWishlist(product.id) : false;

  const [selectedSize, setSelectedSize] = useState(product?.defaultSize || "100ml");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"notes" | "ingredients" | "wear" | "reviews">("notes");
  const [selectedImage, setSelectedImage] = useState(product?.mainImage || "");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [revName, setRevName] = useState("");
  const [revRating, setRevRating] = useState(5);
  const [revTitle, setRevTitle] = useState("");
  const [revComment, setRevComment] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  useEffect(() => {
    if (product) {
      fetch(`/api/reviews?productId=${product.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setReviews(data.reviews);
        })
        .catch((e) => console.error(e));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-32 text-center space-y-4 bg-[#F8F1E7] min-h-screen">
        <h1 className="font-serif text-4xl text-[#1A1615] font-light">Fragrance Creation Not Found</h1>
        <Link href="/shop" className="text-xs font-mono uppercase tracking-wider text-[#C49A52] border-b border-[#C49A52]">
          Return to Master Catalogue
        </Link>
      </div>
    );
  }

  const currentImage = selectedImage || product.mainImage;
  const activeVariant = product.variants?.find((v) => v.size === selectedSize);
  const currentPrice = activeVariant ? activeVariant.price : product.price;

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!revName || !revComment) return;
    setIsSubmittingReview(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          customerName: revName,
          rating: revRating,
          title: revTitle,
          comment: revComment,
        }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("Thank you for your review.");
        setReviews([data.review, ...reviews]);
        setRevName("");
        setRevTitle("");
        setRevComment("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <div className="bg-[#F8F1E7] min-h-screen pt-32 pb-24 text-[#1A1615]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="text-[10px] text-[#756B63] uppercase tracking-[0.2em] font-mono flex items-center gap-2 mb-12">
          <Link href="/" className="hover:text-[#1A1615]">HOME</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#1A1615]">COLLECTIONS</Link>
          <span>/</span>
          <span className="text-[#1A1615]">{product.name}</span>
        </div>

        {/* Main Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Gallery View Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/5] w-full bg-[#EFE8DC] overflow-hidden">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-6 right-6 z-10 p-2 transition-all ${
                  isLiked ? "text-[#B94D70]" : "text-[#1A1615] hover:text-[#B94D70]"
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 stroke-[1.2] ${isLiked ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex items-center gap-4">
              {[product.mainImage, product.secondaryImage, ...(product.gallery || [])].filter(Boolean).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-24 bg-[#EFE8DC] overflow-hidden transition-all ${
                    currentImage === img ? "opacity-100 ring-1 ring-[#1A1615]" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Specifications & Purchase Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] text-[#C49A52] uppercase font-mono">
                {product.type} &bull; {product.defaultSize}
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#1A1615]">
                {product.name}
              </h1>

              <p className="font-serif text-lg text-[#C49A52] italic">
                {product.fragranceFamily}
              </p>

              <div className="pt-2 flex items-baseline gap-4">
                <span className="font-serif text-3xl font-light text-[#1A1615]">
                  ₹ {currentPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] tracking-wider text-[#756B63] uppercase font-mono">INCLUSIVE OF ALL TAXES</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#756B63] font-light leading-relaxed">
              {product.description || product.shortDescription}
            </p>

            {/* Performance Gauges */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#C49A52]/20 text-center font-mono text-xs">
              <div>
                <span className="text-[9px] text-[#C49A52] uppercase block tracking-wider mb-1">CONCENTRATION</span>
                <span className="font-serif text-sm font-light text-[#1A1615]">{product.concentration || "Extrait"}</span>
              </div>
              <div className="border-x border-[#C49A52]/20">
                <span className="text-[9px] text-[#C49A52] uppercase block tracking-wider mb-1">LONGEVITY</span>
                <span className="font-serif text-sm font-light text-[#1A1615]">{product.longevity || "12+ Hours"}</span>
              </div>
              <div>
                <span className="text-[9px] text-[#C49A52] uppercase block tracking-wider mb-1">SILLAGE</span>
                <span className="font-serif text-sm font-light text-[#1A1615]">{product.sillage || "Intimate Trail"}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C49A52] block">
                FLACON SIZE:
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                      selectedSize === size
                        ? "bg-[#1A1615] text-[#F8F1E7]"
                        : "bg-transparent text-[#1A1615] border border-[#C49A52]/30 hover:border-[#1A1615]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag Action */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => addToCart(product, selectedSize, quantity)}
                className="w-full py-4 bg-[#1A1615] hover:bg-[#B94D70] text-[#F8F1E7] text-xs font-mono tracking-[0.25em] uppercase transition-colors"
              >
                ADD TO BAG &bull; ₹ {(currentPrice * quantity).toLocaleString("en-IN")}
              </button>
            </div>

            {/* Accordion Tabs */}
            <div className="pt-6 border-t border-[#C49A52]/20">
              <div className="flex border-b border-[#C49A52]/20 text-[10px] font-mono uppercase tracking-[0.2em] space-x-8">
                <button
                  onClick={() => setActiveTab("notes")}
                  className={`pb-3 transition-colors ${
                    activeTab === "notes" ? "border-b border-[#1A1615] text-[#1A1615]" : "text-[#756B63]"
                  }`}
                >
                  PYRAMID
                </button>
                <button
                  onClick={() => setActiveTab("ingredients")}
                  className={`pb-3 transition-colors ${
                    activeTab === "ingredients" ? "border-b border-[#1A1615] text-[#1A1615]" : "text-[#756B63]"
                  }`}
                >
                  BOTANICALS
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-3 transition-colors ${
                    activeTab === "reviews" ? "border-b border-[#1A1615] text-[#1A1615]" : "text-[#756B63]"
                  }`}
                >
                  REVIEWS ({reviews.length})
                </button>
              </div>

              <div className="py-6 text-xs text-[#756B63] leading-relaxed font-light">
                {activeTab === "notes" && (
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#C49A52] block mb-1">
                        TOP NOTES:
                      </span>
                      <p className="text-[#1A1615] font-serif text-sm">{product.notes.top.join(" &bull; ")}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#C49A52] block mb-1">
                        HEART NOTES:
                      </span>
                      <p className="text-[#1A1615] font-serif text-sm">{product.notes.heart.join(" &bull; ")}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#C49A52] block mb-1">
                        BASE NOTES:
                      </span>
                      <p className="text-[#1A1615] font-serif text-sm">{product.notes.base.join(" &bull; ")}</p>
                    </div>
                  </div>
                )}

                {activeTab === "ingredients" && (
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] tracking-wider uppercase text-[#C49A52]">
                      PURE BOTANICAL INGREDIENTS:
                    </p>
                    <p className="text-[#1A1615]">{product.ingredients.join(", ")}</p>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    <form onSubmit={handleAddReview} className="space-y-3 pb-6 border-b border-[#C49A52]/20">
                      <h4 className="font-serif text-lg text-[#1A1615]">WRITE A REVIEW</h4>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={revName}
                        onChange={(e) => setRevName(e.target.value)}
                        className="w-full bg-transparent border-b border-[#C49A52]/30 py-1.5 text-xs text-[#1A1615] focus:outline-none"
                      />
                      <textarea
                        required
                        placeholder="Share your fragrance impression..."
                        value={revComment}
                        onChange={(e) => setRevComment(e.target.value)}
                        className="w-full bg-transparent border-b border-[#C49A52]/30 py-1.5 text-xs text-[#1A1615] focus:outline-none h-16"
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingReview}
                        className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#1A1615] border-b border-[#1A1615] pb-0.5"
                      >
                        SUBMIT REVIEW
                      </button>
                    </form>

                    <div className="space-y-4">
                      {reviews.map((r) => (
                        <div key={r.id} className="space-y-1">
                          <div className="flex justify-between text-xs text-[#1A1615]">
                            <span className="font-serif">{r.customerName}</span>
                            <span className="font-mono text-[10px] text-[#C49A52]">★ {r.rating}/5</span>
                          </div>
                          <p className="text-xs text-[#756B63]">{r.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Product Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-20 border-t border-[#C49A52]/20">
            <h2 className="font-serif text-3xl font-light text-[#1A1615] text-center mb-12">
              COMPLEMENTARY FRAGRANCES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

