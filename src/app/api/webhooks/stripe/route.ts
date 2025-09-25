import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { createPrintifyOrder } from '@/lib/printify';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    try {
      // Extract product information from metadata
      const productId = session.metadata?.productId;
      const productName = session.metadata?.productName;
      const customerEmail = session.customer_details?.email;
      const shippingAddress = session.shipping_details;

      if (!productId || !productName) {
        console.error('Missing product information in session metadata');
        return NextResponse.json({ error: 'Missing product info' }, { status: 400 });
      }

      // Create Printify order
      const success = await createPrintifyOrder({
        productId,
        productName,
        customerEmail: customerEmail || '',
        shippingAddress: shippingAddress || {},
        sessionId: session.id,
      });

      if (success) {
        console.log('Printify order created successfully for session:', session.id);
      } else {
        console.error('Failed to create Printify order for session:', session.id);
      }
      
    } catch (error) {
      console.error('Failed to create Printify order:', error);
      // Don't return error to Stripe to avoid retries
    }
  }

  return NextResponse.json({ received: true });
}

