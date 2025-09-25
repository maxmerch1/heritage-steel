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

    try {
      // Call Printify API to create order
      const printifyResponse = await fetch(
        `https://api.printify.com/v1/shops/${process.env.PRINTIFY_SHOP_ID}/orders.json`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            external_id: session.id,
            label: "Heritage Steel Order",
            line_items: [
              {
                product_id: "PRINTIFY_PRODUCT_ID", // Replace with actual Printify product ID
                variant_id: "PRINTIFY_VARIANT_ID", // Replace with actual Printify variant ID
                quantity: 1,
              },
            ],
            shipping_method: 1,
            send_shipping_notification: true,
            address_to: {
              first_name: session.shipping_details?.name?.split(' ')[0] || 'Customer',
              last_name: session.shipping_details?.name?.split(' ').slice(1).join(' ') || '',
              email: session.customer_details?.email || '',
              phone: session.shipping_details?.phone || '',
              country: session.shipping_details?.address?.country_code || 'US',
              region: session.shipping_details?.address?.state || '',
              city: session.shipping_details?.address?.city || '',
              address1: session.shipping_details?.address?.line1 || '',
              address2: session.shipping_details?.address?.line2 || '',
              zip: session.shipping_details?.address?.postal_code || '',
            },
          }),
        }
      );

      if (printifyResponse.ok) {
        const printifyOrder = await printifyResponse.json();
        console.log("✅ Printify order created:", printifyOrder);
      } else {
        const error = await printifyResponse.text();
        console.error("❌ Printify API error:", printifyResponse.status, error);
      }
    } catch (error) {
      console.error("❌ Failed to create Printify order:", error);
    }
  }

  res.json({ received: true });
}
