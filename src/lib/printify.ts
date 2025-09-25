// Printify API integration utilities

export interface PrintifyOrderData {
  productId: string;
  productName: string;
  customerEmail: string;
  shippingAddress: {
    name?: string;
    phone?: string;
    address: {
      country_code?: string;
      state?: string;
      city?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
    };
  };
  sessionId: string;
}

export interface PrintifyProduct {
  id: string;
  title: string;
  description: string;
  tags: string[];
  options: any[];
  variants: any[];
  images: any[];
}

// Product mapping from your product IDs to Printify product IDs
export const PRODUCT_MAPPING: { [key: string]: string } = {
  '1': 'printify_product_id_1776_patriot', // White tumbler - 1776 Patriot Tumbler
  '4': 'printify_product_id_heritage_classic', // Black tumbler - Heritage Classic
};

// Variant mapping for different product options
export const VARIANT_MAPPING: { [key: string]: string } = {
  '1776 Patriot Tumbler': 'variant_id_white_tumbler',
  'Heritage Classic – Forged in Tradition': 'variant_id_black_tumbler',
};

export async function createPrintifyOrder(orderData: PrintifyOrderData): Promise<boolean> {
  const printifyApiKey = process.env.PRINTIFY_API_KEY;
  const printifyShopId = process.env.PRINTIFY_SHOP_ID;
  
  if (!printifyApiKey || !printifyShopId) {
    console.error('PRINTIFY_API_KEY or PRINTIFY_SHOP_ID not found in environment variables');
    return false;
  }

  const printifyProductId = PRODUCT_MAPPING[orderData.productId];
  const variantId = VARIANT_MAPPING[orderData.productName];
  
  if (!printifyProductId) {
    console.error(`No Printify product mapping found for product ID: ${orderData.productId}`);
    return false;
  }

  if (!variantId) {
    console.error(`No variant mapping found for product: ${orderData.productName}`);
    return false;
  }

  // Parse shipping address
  const nameParts = orderData.shippingAddress.name?.split(' ') || ['Customer'];
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ') || '';

  // Create order payload for Printify
  const orderPayload = {
    external_id: orderData.sessionId,
    line_items: [
      {
        product_id: printifyProductId,
        variant_id: variantId,
        quantity: 1,
      }
    ],
    shipping_method: 1, // Standard shipping
    send_shipping_notification: true,
    address_to: {
      first_name: firstName,
      last_name: lastName,
      email: orderData.customerEmail,
      phone: orderData.shippingAddress.phone || '',
      country: orderData.shippingAddress.address.country_code || 'US',
      region: orderData.shippingAddress.address.state || '',
      city: orderData.shippingAddress.address.city || '',
      address1: orderData.shippingAddress.address.line1 || '',
      address2: orderData.shippingAddress.address.line2 || '',
      zip: orderData.shippingAddress.address.postal_code || '',
    }
  };

  try {
    const response = await fetch(`https://api.printify.com/v1/shops/${printifyShopId}/orders.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${printifyApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderPayload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Printify API error:', response.status, errorData);
      return false;
    }

    const result = await response.json();
    console.log('Printify order created successfully:', result);
    return true;
    
  } catch (error) {
    console.error('Printify API request failed:', error);
    return false;
  }
}

// Get available products from Printify
export async function getPrintifyProducts(): Promise<PrintifyProduct[]> {
  const printifyApiKey = process.env.PRINTIFY_API_KEY;
  const printifyShopId = process.env.PRINTIFY_SHOP_ID;
  
  if (!printifyApiKey || !printifyShopId) {
    console.error('PRINTIFY_API_KEY or PRINTIFY_SHOP_ID not found in environment variables');
    return [];
  }

  try {
    const response = await fetch(`https://api.printify.com/v1/shops/${printifyShopId}/products.json`, {
      headers: {
        'Authorization': `Bearer ${printifyApiKey}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch Printify products:', response.status);
      return [];
    }

    const products = await response.json();
    return products.data || [];
    
  } catch (error) {
    console.error('Printify products fetch failed:', error);
    return [];
  }
}
