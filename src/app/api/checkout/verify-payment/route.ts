import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { DB } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id) {
      return NextResponse.json({ success: false, message: 'Missing payment parameters' }, { status: 400 });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (keySecret) {
      const generatedSignature = crypto
        .createHmac('sha256', keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      if (generatedSignature !== razorpay_signature) {
        return NextResponse.json({ success: false, message: 'Invalid payment signature. Verification failed.' }, { status: 400 });
      }
    }

    // Payment verification successful. Update order in database.
    if (orderId) {
      const orders = DB.getOrders();
      const idx = orders.findIndex(o => o.id === orderId || o.orderNumber === orderId);
      if (idx > -1) {
        orders[idx].paymentStatus = 'CAPTURED';
        orders[idx].orderStatus = 'PAYMENT_CONFIRMED';
        orders[idx].razorpayOrderId = razorpay_order_id;
        orders[idx].razorpayPaymentId = razorpay_payment_id;
        orders[idx].razorpaySignature = razorpay_signature;
        orders[idx].updatedAt = new Date().toISOString();
        DB.saveOrders(orders);
      }
    }

    return NextResponse.json({
      success: true,
      verified: true,
      message: 'Razorpay payment verified successfully',
      paymentId: razorpay_payment_id
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Payment verification failed' }, { status: 500 });
  }
}
