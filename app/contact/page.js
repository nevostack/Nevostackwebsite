import React from 'react';
import ContactForm from '../components/ContactForm';
import FAQ from '../../src/components/FAQ';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with NevoStack for lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, AI automation solutions, and effective SEO strategies.',
  keywords: ['contact NevoStack', 'hire web developers', 'hire mobile app developers', 'hire e-commerce experts', 'hire AI automation experts', 'SEO consultation', 'get a quote'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: 'https://nevostack.com/contact',
    title: 'Contact NevoStack',
    images: [
      { url: 'https://nevostack.com/nevostacklogo.jpg', alt: 'Contact NevoStack' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://nevostack.com/nevostacklogo.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Get in touch with our team to discuss your project
          </p>
        </div>
      </div>
{/*       
      <ContactForm /> */}
      
      <FAQ />
    </div>
  );
} 