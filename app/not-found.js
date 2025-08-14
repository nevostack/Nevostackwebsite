import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'Sorry, the page you are looking for does not exist. Return to NevoStack for lightning-fast websites, mobile apps, e-commerce platforms, AI automation, and SEO strategies.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-secondary">404</h1>
        <h2 className="mt-4 text-3xl font-extrabold">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-300">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
} 