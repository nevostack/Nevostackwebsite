import React from 'react';
import Services from '../../src/components/Services';
import ProcessSection from '../../src/components/ProcessSection';

export const metadata = {
  title: 'Our Services',
  description: 'Comprehensive digital solutions tailored for your business. From lightning-fast websites to high-converting e-commerce platforms, mobile apps, AI automation, and SEO strategies.',
  keywords: ['custom web development', 'responsive design', 'mobile app development', 'cross-platform apps', 'native Android iOS', 'e-commerce development', 'secure payment gateway', 'AI automation', 'process automation', 'SEO optimization'],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    url: 'https://nevostack.com/services',
    title: 'Our Services | NevoStack',
    images: [
      { url: 'https://nevostack.com/nevostacklogo.jpg', alt: 'NevoStack Services' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://nevostack.com/nevostacklogo.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>
      </div>
      
      <Services />
      
      <ProcessSection />
    </div>
  );
} 