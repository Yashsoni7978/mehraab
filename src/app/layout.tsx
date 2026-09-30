import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { SearchModal } from "@/components/SearchModal";
import { FragranceFinderModal } from "@/components/FragranceFinderModal";
import { ToastBanner } from "@/components/ToastBanner";

export const metadata: Metadata = {
  title: "Mehraab | Royal Attar & Perfumes from India",
  description:
    "Discover Mehraab's collection of attars, perfumes, oud and fragrance gifts inspired by India's rich perfumery heritage and Jaipur.",
  keywords: [
    "Mehraab",
    "Royal Attar",
    "Indian Perfumes",
    "Attar Jaipur",
    "Gul-e-Rooh",
    "Oud Perfume",
    "Luxury Perfumery India",
    "Botanical Attar",
  ],
  openGraph: {
    title: "Mehraab | Royal Attar & Perfumes from India",
    description: "The Art of Royal Fragrance. Attars, perfumes & stories from India.",
    url: "https://mehraab.in",
    siteName: "Mehraab Royal Attar",
    images: [
      {
        url: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Mehraab Royal Fragrance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#B94D70] selection:text-white">
        <ShopProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <WishlistDrawer />
          <SearchModal />
          <FragranceFinderModal />
          <ToastBanner />
        </ShopProvider>
      </body>
    </html>
  );
}
