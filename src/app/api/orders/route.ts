import { NextResponse } from 'next/server';
import { DB, Order } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  let orders = DB.getOrders();
  if (email) {
    orders = orders.filter(o => o.customer.email.toLowerCase() === email.toLowerCase());
  }

  return NextResponse.json({ success: true, orders, count: orders.length });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customer, items, subtotal, discount, tax, shippingFee, totalAmount, paymentMethod, notes } = body;

    if (!customer || !items || items.length === 0) {
      return NextResponse.json({ success: false, message: 'Invalid order data' }, { status: 400 });
    }

    const orderNumber = `MEH-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: Order = {
      id: `ord_${Date.now()}`,
      orderNumber,
      customer,
      items,
      subtotal,
      discount: discount || 0,
      tax: tax || 0,
      shippingFee: shippingFee || 0,
      totalAmount,
      paymentMethod: paymentMethod || 'COD',
      paymentStatus: paymentMethod === 'COD' ? 'PENDING' : 'AUTHORIZED',
      orderStatus: 'ORDER_PLACED',
      notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    DB.addOrder(newOrder);

    return NextResponse.json({ success: true, order: newOrder });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create order' }, { status: 500 });
  }
}
