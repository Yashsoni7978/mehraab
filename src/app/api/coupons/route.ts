import { NextResponse } from 'next/server';
import { DB } from '@/lib/store';

export async function POST(request: Request) {
  try {
    const { code, cartTotal } = await request.json();
    if (!code) {
      return NextResponse.json({ success: false, message: 'Coupon code required' }, { status: 400 });
    }

    const coupons = DB.getCoupons();
    const coupon = coupons.find(c => c.code.toUpperCase() === code.trim().toUpperCase() && c.isActive);

    if (!coupon) {
      return NextResponse.json({ success: false, message: 'Invalid or expired coupon code' }, { status: 404 });
    }

    if (cartTotal < coupon.minOrderAmount) {
      return NextResponse.json({
        success: false,
        message: `Minimum order total of ₹${coupon.minOrderAmount.toLocaleString('en-IN')} required for coupon ${coupon.code}`
      }, { status: 400 });
    }

    let discountAmount = 0;
    if (coupon.discountType === 'PERCENTAGE') {
      discountAmount = Math.round((cartTotal * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discountAmount > coupon.maxDiscount) {
        discountAmount = coupon.maxDiscount;
      }
    } else {
      discountAmount = coupon.discountValue;
    }

    return NextResponse.json({
      success: true,
      code: coupon.code,
      discountAmount,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue,
      message: `Coupon ${coupon.code} applied successfully! Saved ₹${discountAmount.toLocaleString('en-IN')}`
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error checking coupon' }, { status: 500 });
  }
}

export async function GET() {
  const coupons = DB.getCoupons().filter(c => c.isActive);
  return NextResponse.json({ success: true, coupons });
}
