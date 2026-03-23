import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { amount, item_name, email } = body;

  const merchant_id = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID!;
  const merchant_key = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY!;
  const base_url = process.env.NEXT_PUBLIC_BASE_URL!;

  const paymentData = new URLSearchParams({
    merchant_id,
    merchant_key,
    amount: amount.toString(),
    item_name,
    email_address: email,
    return_url: ${base_url}/success,
    cancel_url: ${base_url}/cancel,
    notify_url: ${base_url}/api/payfast-webhook,
  });

  return NextResponse.json({
    url: https://www.payfast.co.za/eng/process?${paymentData.toString()},
  });
}
