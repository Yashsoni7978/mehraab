import { NextResponse } from 'next/server';
import { DB } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { mood, family, intensity, occasion } = await request.json();

    const products = DB.getProducts();

    // Match algorithm scoring each product against user choices
    const scoredProducts = products.map(product => {
      let score = 50; // base score

      // Family match
      if (family && product.fragranceFamily.toLowerCase() === family.toLowerCase()) {
        score += 30;
      }

      // Occasion match
      if (occasion && product.occasion.toLowerCase() === occasion.toLowerCase()) {
        score += 20;
      }

      // Mood matching via tags or notes
      if (mood) {
        const m = mood.toLowerCase();
        if (
          product.tags.some(t => t.toLowerCase().includes(m)) ||
          (product.shortDescription && product.shortDescription.toLowerCase().includes(m)) ||
          product.type.toLowerCase().includes(m)
        ) {
          score += 25;
        }
      }

      // Intensity matching
      if (intensity === 'Soft' && product.concentration.includes('Water') || product.type.includes('Musk')) {
        score += 15;
      } else if (intensity === 'Strong' && (product.category === 'OUD' || product.category === 'ATTAR')) {
        score += 15;
      }

      // Bestseller bump
      if (product.isBestseller) score += 5;

      return { product, matchScore: Math.min(99, score) };
    });

    scoredProducts.sort((a, b) => b.matchScore - a.matchScore);

    return NextResponse.json({
      success: true,
      recommendations: scoredProducts.slice(0, 3)
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Fragrance finder engine error' }, { status: 500 });
  }
}
