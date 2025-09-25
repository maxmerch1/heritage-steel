# Printify Integration Setup Guide

## 🔧 Required Configuration

### 1. Environment Variables
Add these to your `.env.local` file:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Printify Configuration
PRINTIFY_API_KEY=your_printify_api_key_here
PRINTIFY_SHOP_ID=your_printify_shop_id_here
```

### 2. Stripe Webhook Setup
1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → Webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
4. Events to send: `checkout.session.completed`
5. Copy the webhook secret to `STRIPE_WEBHOOK_SECRET`

### 3. Printify API Setup
1. Go to [Printify API](https://printify.com/app/account/api)
2. Generate API key
3. Copy API key to `PRINTIFY_API_KEY`
4. Get your Shop ID from Printify dashboard
5. Copy Shop ID to `PRINTIFY_SHOP_ID`

### 4. Product Mapping Configuration
Update `src/lib/printify.ts` with your actual Printify product IDs:

```typescript
export const PRODUCT_MAPPING: { [key: string]: string } = {
  '1': 'your_actual_printify_product_id_1776_patriot',
  '4': 'your_actual_printify_product_id_heritage_classic',
};

export const VARIANT_MAPPING: { [key: string]: string } = {
  '1776 Patriot Tumbler': 'your_actual_variant_id_white_tumbler',
  'Heritage Classic – Forged in Tradition': 'your_actual_variant_id_black_tumbler',
};
```

## 🚀 How It Works

### Order Flow:
1. Customer clicks "Buy Now" button
2. Redirected to Stripe checkout
3. Payment successful → Stripe webhook triggered
4. Webhook creates Printify order automatically
5. Printify fulfills and ships the order

### Webhook Endpoint:
- **URL**: `/api/webhooks/stripe`
- **Method**: POST
- **Trigger**: `checkout.session.completed` event
- **Action**: Creates Printify order with customer details

## 📋 Testing Checklist

- [ ] Stripe webhook endpoint configured
- [ ] Printify API key added to environment
- [ ] Printify Shop ID added to environment
- [ ] Product mappings updated with real IDs
- [ ] Test order placed successfully
- [ ] Printify order created in dashboard
- [ ] Customer receives shipping notification

## 🔍 Debugging

Check these logs for issues:
- Stripe webhook logs in Stripe dashboard
- Server console logs for Printify API errors
- Printify dashboard for order status

## 📞 Support

- **Stripe**: [Stripe Support](https://support.stripe.com)
- **Printify**: [Printify Support](https://help.printify.com)
- **Integration Issues**: Check server logs and webhook delivery status
