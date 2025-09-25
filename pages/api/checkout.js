import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log('Checkout API called with method:', req.method);
  
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { productId } = req.body;
    console.log('Selected product ID:', productId);

    // Check if Stripe is properly configured
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_...') {
      console.error('Stripe secret key not configured properly');
      
      // In development, return a mock response for testing
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Returning mock checkout URL');
        return res.json({ 
          url: 'https://checkout.stripe.com/test-session' 
        });
      }
      
      return res.status(500).json({ 
        error: 'Payment system not configured. Please contact support.' 
      });
    }

    // Product mapping
    const products = {
      'heritage-classic': {
        priceId: 'price_1SB54IQLfpxWDVyA0t5e7hjr',
        name: 'Heritage Classic – Forged in Tradition'
      },
      '1776-patriot': {
        priceId: 'price_1SB53kQLfpxWDVyAsgFAl6ke',
        name: '1776 Patriot Tumbler'
      }
    };

    // Default to Heritage Classic if no product specified
    const selectedProduct = products[productId] || products['heritage-classic'];
    console.log('Selected product:', selectedProduct);
    console.log('Creating Stripe checkout session for product:', selectedProduct.name);

    // Get the base URL for the application
    const baseUrl = req.headers.origin || 
                   (req.headers.host ? `http://${req.headers.host}` : 'http://localhost:3000');
    
    console.log('Base URL for checkout:', baseUrl);
    
    // For Stripe, we need to ensure images are accessible
    // In development, use HTTP. In production, use HTTPS
    const imageBaseUrl = process.env.NODE_ENV === 'production' 
      ? baseUrl.replace('http://', 'https://')
      : baseUrl;
    
    console.log('Image base URL for Stripe:', imageBaseUrl);
    
    // Log the image URLs being sent to Stripe
    const imageUrls = [
      `${imageBaseUrl}/images/product-2.jpg`,
      `${imageBaseUrl}/images/product1.jpg`,
    ];
    console.log('Image URLs for Stripe:', imageUrls);
    
    // For testing, let's also try with a publicly accessible image
    // This helps us verify if the issue is with localhost URLs
    const testImageUrls = [
      'https://via.placeholder.com/400x400/FF0000/FFFFFF?text=Product+Image+1',
      'https://via.placeholder.com/400x400/0000FF/FFFFFF?text=Product+Image+2',
    ];
    console.log('Test image URLs:', testImageUrls);

    // Create Stripe checkout session with shipping information
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: selectedProduct.priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      // Collect shipping information from customer
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      // Add product information to metadata
      metadata: {
        productId: productId || "heritage-classic",
        productName: selectedProduct.name,
      },
    });

    console.log('Stripe session created successfully:', session.id);
    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    console.error("Error details:", {
      message: err.message,
      type: err.type,
      code: err.code,
      param: err.param
    });
    res.status(500).json({ 
      error: err.message,
      details: err.type || 'Unknown error'
    });
  }
}
