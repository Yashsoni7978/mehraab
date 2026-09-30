import { NextResponse } from 'next/server';
import { DB, ProductReview } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  let reviews = DB.getReviews().filter(r => r.isApproved);
  if (productId) {
    reviews = reviews.filter(r => r.productId === productId);
  }

  return NextResponse.json({ success: true, reviews, count: reviews.length });
}

export async function POST(request: Request) {
  try {
    const { productId, customerName, rating, title, comment } = await request.json();

    if (!productId || !customerName || !rating || !comment) {
      return NextResponse.json({ success: false, message: 'Missing review fields' }, { status: 400 });
    }

    const newReview: ProductReview = {
      id: `rev_${Date.now()}`,
      productId,
      customerName,
      rating: Number(rating),
      title: title || 'Fragrance Review',
      comment,
      isVerifiedPurchase: true,
      isApproved: true,
      createdAt: new Date().toISOString()
    };

    const reviews = DB.getReviews();
    reviews.unshift(newReview);
    DB.saveReviews(reviews);

    // Update product rating and reviewsCount
    const products = DB.getProducts();
    const pIndex = products.findIndex(p => p.id === productId || p.slug === productId);
    if (pIndex > -1) {
      const prodReviews = reviews.filter(r => r.productId === products[pIndex].id);
      const avg = prodReviews.reduce((sum, r) => sum + r.rating, 0) / prodReviews.length;
      products[pIndex].rating = Math.round(avg * 10) / 10;
      products[pIndex].reviewsCount = prodReviews.length;
      DB.saveProducts(products);
    }

    return NextResponse.json({ success: true, review: newReview, message: 'Thank you for your royal review!' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to submit review' }, { status: 500 });
  }
}
