import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    console.log('Testing Stripe connection...');
    console.log('Stripe key starts with:', process.env.STRIPE_SECRET_KEY?.substring(0, 10));
    
    // Test Stripe connection by retrieving account info
    const account = await stripe.accounts.retrieve();
    
    console.log('Stripe connection successful:', {
      id: account.id,
      country: account.country,
      type: account.type
    });
    
    res.json({ 
      success: true, 
      account: {
        id: account.id,
        country: account.country,
        type: account.type
      }
    });
  } catch (err) {
    console.error("Stripe connection test failed:", err);
    res.status(500).json({ 
      error: err.message,
      details: err.type || 'Unknown error'
    });
  }
}
