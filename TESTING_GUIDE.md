# Testing Guide for Stripe + Printify Integration

## 🧪 Testing Setup

### 1. Install Stripe CLI
```bash
# Install Stripe CLI (if not already installed)
# Windows: Download from https://github.com/stripe/stripe-cli/releases
# Or use: winget install stripe.stripe-cli
```

### 2. Login to Stripe CLI
```bash
stripe login
```

### 3. Start Webhook Forwarding
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

This will give you a webhook secret that starts with `whsec_...` - add this to your `.env.local` file.

### 4. Update Environment Variables
Make sure your `.env.local` contains:
```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_... (from stripe listen command)
PRINTIFY_API_KEY=your_actual_printify_api_key
PRINTIFY_SHOP_ID=your_actual_printify_shop_id
```

## 🧪 Testing Steps

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Checkout Flow
1. Go to `http://localhost:3000`
2. Click "Buy Now — $39" button
3. Should redirect to Stripe checkout
4. Use test card: `4242 4242 4242 4242`
5. Complete payment

### 3. Verify Webhook
- Check Stripe CLI terminal for webhook events
- Should see `checkout.session.completed` event
- Check server console for Printify API call logs

### 4. Verify Printify Integration
- Check Printify dashboard for new order
- Verify customer details are correct
- Confirm shipping address is populated

## 🔍 Debugging

### Common Issues:

1. **Webhook not receiving events**
   - Check webhook secret is correct
   - Ensure `stripe listen` is running
   - Verify endpoint URL is correct

2. **Printify API errors**
   - Check API key and Shop ID
   - Verify product IDs are correct
   - Check Printify API documentation

3. **Checkout not working**
   - Check Stripe secret key
   - Verify images exist in `/public/images/`
   - Check browser console for errors

### Logs to Check:
- Stripe CLI terminal output
- Server console logs
- Browser developer console
- Printify dashboard orders

## 📋 Test Checklist

- [ ] Stripe CLI installed and logged in
- [ ] Webhook forwarding active
- [ ] Environment variables set
- [ ] Product images exist in `/public/images/`
- [ ] Checkout redirects to Stripe
- [ ] Payment completes successfully
- [ ] Webhook receives `checkout.session.completed`
- [ ] Printify order created
- [ ] Customer details correct in Printify
- [ ] Shipping notification sent

## 🚀 Production Deployment

Before going live:
1. Replace test keys with live keys
2. Update webhook endpoint to production URL
3. Test with real payment methods
4. Verify Printify production settings
5. Set up monitoring and error tracking
