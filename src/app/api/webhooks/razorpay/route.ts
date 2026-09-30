import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { DB } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const bodyText = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (webhookSecret && signature) {
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(bodyText)
        .digest('hex');

      if (expectedSignature !== signature) {
        return NextResponse.json({ success: false, message: 'Invalid webhook signature' }, { status: 400 });
      }
    }

    const payload = JSON.parse(bodyText);
    const event = payload.event;

    if (event === 'payment.captured') {
      const payment = payload.payload.payment.entity;
      const razorpayOrderId = payment.order_id;
      const orders = DB.getOrders();
      const idx = orders.findIndex(o => o.razorpayOrderId === razorpayOrderId);
      if (idx > -1) {
        orders[idx].paymentStatus = 'CAPTURED';
        orders[idx].orderStatus = 'PAYMENT_CONFIRMED';
        orders[idx].updatedAt = new Date().toISOString();
        DB.saveOrders(orders);
      }
    } else if (event === 'payment.failed') {
      const payment = payload.payload.payment.entity;
      const razorpayOrderId = payment.order_id;
      const orders = DB.getOrders();
      const idx = orders.findIndex(o => o.razorpayOrderId === razorpayOrderId);
      if (idx > -1) {
        orders[idx].paymentStatus = 'FAILED';
        orders[idx].orderStatus = 'CANCELLED';
        orders[idx].updatedAt = new Date().toISOString();
        DB.saveOrders(orders);
      }
    }

    return NextResponse.json({ success: true, received: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Webhook processing error' }, { status: 500 });
  }
}
