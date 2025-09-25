import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// TODO: Replace test keys with live keys before launch
// TODO: Add real product ids and metadata once Stripe dashboard is configured

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { productId, productName, price } = await request.json();

    if (!productId || !productName || !price) {
      return NextResponse.json(
        { error: 'Missing required product information' },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
              description: `Premium Heritage Steel Tumbler - ${productName}`,
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/cancel`,
      metadata: {
        productId: productId.toString(),
        productName: productName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout session creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
