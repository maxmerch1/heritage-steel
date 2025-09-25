import Stripe from "stripe";
import { buffer } from "micro";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Payment complete:", session.id);

    // Extract order information for confirmation
    const shipping = session.shipping_details;
    const customer = session.customer_details;
    const metadata = session.metadata || {};
    
    console.log("📦 Order details:", {
      sessionId: session.id,
      productName: metadata.productName || 'Heritage Steel Tumbler',
      customerEmail: customer?.email,
      shippingName: shipping?.name,
      shippingAddress: shipping?.address,
    });

    // Order is confirmed - customer will see confirmation on success page
    console.log("🎉 Order confirmed! Customer will receive confirmation email from Stripe.");
  }

  res.json({ received: true });
}
