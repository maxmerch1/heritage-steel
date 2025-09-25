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

    // Get the base URL for the application
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    const baseUrl = origin || (host ? `http://${host}` : 'http://localhost:3002');
    
    console.log('Base URL for checkout:', baseUrl);

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
              images: [
                `${baseUrl}/images/product-2.jpg`,
                `${baseUrl}/images/product1.jpg`,
                `${baseUrl}/images/tumbler-1.png`,
                `${baseUrl}/images/tumbler-2.png`,
                `${baseUrl}/images/tumbler-3.png`,
                `${baseUrl}/images/tumbler-4.png`,
              ],
            },
            unit_amount: price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
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
