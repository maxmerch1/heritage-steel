import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-crimson mb-4">
              Heritage Steel
            </h3>
            <p className="text-steel mb-4 max-w-md">
              Forged for patriots who believe in strength, pride, and tradition. 
              Premium engraved steel tumblers that carry your freedom every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-steel hover:text-crimson transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-steel hover:text-crimson transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-steel hover:text-crimson transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-steel hover:text-crimson transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/patriots-list" className="text-steel hover:text-crimson transition-colors duration-200">
                  Patriot's List
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-steel hover:text-crimson transition-colors duration-200">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-steel hover:text-crimson transition-colors duration-200">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-steel hover:text-crimson transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-navy/5 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl">🔒</span>
              <span className="text-navy font-bold text-lg">SSL Secure Checkout</span>
              <span className="text-steel text-sm">Your payment is protected</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl">🚚</span>
              <span className="text-navy font-bold text-lg">Fast U.S. Shipping</span>
              <span className="text-steel text-sm">Free shipping on all orders</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl">⭐</span>
              <span className="text-navy font-bold text-lg">Premium Quality Guaranteed</span>
              <span className="text-steel text-sm">Built to last like our values</span>
            </div>
          </div>
        </div>

        <div className="border-t border-steel mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-steel text-sm">
              © 2024 Heritage Steel. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
              <span className="text-2xl">🇺🇸</span>
              <p className="text-steel text-sm font-bold">
                Proudly Made in America. Veteran-Owned. Secure Checkout.
              </p>
            </div>
          </div>
        </div>
        
        {/* Flag Stripe Bar */}
        <div className="flag-stripe mt-8"></div>
      </div>
    </footer>
  );
}
