import './globals.css';
import './styles.css';
import JsonLd from './components/JsonLd';
import { Providers } from './providers';
import { Inter } from 'next/font/google';

// Load Inter font with all weights used in the original design
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'NevoStack - Tech That Builds Startups',
    template: '%s | NevoStack',
  },
  description: 'Unlock digital excellence with Nevostack. We build lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, AI automation solutions, and SEO strategies that drive real growth',
  keywords: ['custom web development', 'responsive design', 'mobile app development', 'cross-platform apps', 'native Android iOS', 'e-commerce development', 'secure payment gateway', 'AI automation', 'process automation', 'SEO optimization', 'keyword research', 'link building', 'performance boost'],
  metadataBase: new URL('https://nevostack.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo192.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NevoStack - Tech That Builds Startups',
    description: 'Unlock digital excellence with Nevostack. We build lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, AI automation solutions, and SEO strategies that drive real growth',
    url: 'https://nevostack.com',
    siteName: 'NevoStack',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nevostack.com/nevostacklogo.jpg',
        alt: 'NevoStack',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NevoStack - Tech That Builds Startups',
    description: 'Unlock digital excellence with Nevostack. We build lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, AI automation solutions, and SEO strategies that drive real growth',
    images: ['https://nevostack.com/nevostacklogo.jpg'],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NevoStack',
    url: 'https://nevostack.com',
    logo: 'https://nevostack.com/logo512.png',
    sameAs: [
      'https://twitter.com/nevostack',
      'https://www.facebook.com/nevostack',
      'https://www.linkedin.com/company/nevostack'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: "+91 76079 85685",
      contactType: 'customer service',
      email: 'info@nevostack.com'
    },
    description: 'Unlock digital excellence with Nevostack. We build lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, AI automation solutions, and SEO strategies that drive real growth'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NevoStack',
    url: 'https://nevostack.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nevostack.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Manage service worker: enable only in production, unregister on localhost
              (function() {
                if (!('serviceWorker' in navigator)) return;

                var isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

                window.addEventListener('load', function() {
                  if (isLocalhost) {
                    // On localhost/dev: unregister any existing SWs and clear caches to avoid stale content
                    navigator.serviceWorker.getRegistrations().then(function(registrations) {
                      registrations.forEach(function(reg) { reg.unregister(); });
                    });
                    if (window.caches && caches.keys) {
                      caches.keys().then(function(keys) { keys.forEach(function(key) { caches.delete(key); }); });
                    }
                    return;
                  }

                  // In production: register the service worker
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                      if (registration && registration.waiting) {
                        // Tell waiting SW to activate immediately
                        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                      }
                      console.log('ServiceWorker registered:', registration.scope);
                    })
                    .catch(function(err) {
                      console.log('ServiceWorker registration failed:', err);
                    });
                });
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 