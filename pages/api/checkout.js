import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Heritage Steel Tumbler",
              description: "Premium engraved steel tumbler - forged for patriots",
              images: [
                `${req.headers.origin}/images/product1.jpg`,
                `${req.headers.origin}/images/product-2.jpg`,
              ],
            },
            unit_amount: 3900, // $39.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: {
        productId: "heritage_steel_tumbler",
        productName: "Heritage Steel Tumbler",
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    res.status(500).json({ error: err.message });
  }
}
