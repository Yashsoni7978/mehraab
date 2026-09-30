import { NextResponse } from 'next/server';
import { DB } from '@/lib/store';
import { Product } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const family = searchParams.get('family');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort');

  let products = DB.getProducts();

  if (category && category !== 'ALL') {
    products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (family && family !== 'ALL') {
    products = products.filter(p => p.fragranceFamily.toLowerCase() === family.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
      p.notes.top.some(n => n.toLowerCase().includes(q)) ||
      p.notes.heart.some(n => n.toLowerCase().includes(q)) ||
      p.notes.base.some(n => n.toLowerCase().includes(q))
    );
  }

  if (sort === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    products.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'newest') {
    products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return NextResponse.json({ success: true, products, count: products.length });
}

export async function POST(request: Request) {
  try {
    const newProduct: Product = await request.json();
    if (!newProduct.name || !newProduct.price) {
      return NextResponse.json({ success: false, message: 'Missing required product fields' }, { status: 400 });
    }

    const products = DB.getProducts();
    const slug = newProduct.slug || newProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const fullProduct: Product = {
      ...newProduct,
      id: newProduct.id || `p_${Date.now()}`,
      slug,
      stock: newProduct.stock ?? 20,
      reservedQuantity: 0,
      lowStockThreshold: newProduct.lowStockThreshold ?? 5,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    products.unshift(fullProduct);
    DB.saveProducts(products);

    return NextResponse.json({ success: true, product: fullProduct });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create product' }, { status: 500 });
  }
}
