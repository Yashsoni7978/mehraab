import { NextResponse } from 'next/server';
import { DB, ReturnRequest } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  let returns = DB.getReturns();
  if (email) {
    returns = returns.filter(r => r.customerEmail.toLowerCase() === email.toLowerCase());
  }

  return NextResponse.json({ success: true, returns });
}

export async function POST(request: Request) {
  try {
    const { orderId, customerEmail, reason, itemNames, refundAmount } = await request.json();

    if (!orderId || !customerEmail || !reason) {
      return NextResponse.json({ success: false, message: 'Missing return request details' }, { status: 400 });
    }

    const orders = DB.getOrders();
    const order = orders.find(o => o.id === orderId || o.orderNumber === orderId);

    if (!order) {
      return NextResponse.json({ success: false, message: 'Order reference not found' }, { status: 404 });
    }

    const newReturn: ReturnRequest = {
      id: `ret_${Date.now()}`,
      orderId: order.orderNumber,
      customerEmail,
      reason,
      itemNames: itemNames || order.items.map(i => i.productName),
      status: 'RETURN_REQUESTED',
      refundAmount: refundAmount || order.totalAmount,
      createdAt: new Date().toISOString()
    };

    const returns = DB.getReturns();
    returns.unshift(newReturn);
    DB.saveReturns(returns);

    // Update order status
    order.orderStatus = 'RETURN_REQUESTED';
    order.updatedAt = new Date().toISOString();
    DB.saveOrders(orders);

    return NextResponse.json({ success: true, returnRequest: newReturn });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to submit return request' }, { status: 500 });
  }
}
