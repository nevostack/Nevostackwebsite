import React from 'react';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import Portfolio from '../src/components/Portfolio';
import WhyChooseUs from '../src/components/Testimonials';
import JsonLd from './components/JsonLd';
import FAQ from '../src/components/FAQ';

export const metadata = {
  title: 'NevoStack - Tech That Builds Startups',
  description: 'Unlock digital excellence with Nevostack. We build lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, stunning UI/UX, and SEO strategies that drive real growth',
  keywords: ['custom web development', 'responsive design', 'mobile app development', 'cross-platform apps', 'e-commerce development', 'AI automation', 'SEO optimization'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://nevostack.com/',
    images: [
      {
        url: 'https://nevostack.com/nevostacklogo.jpg',
        alt: 'NevoStack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://nevostack.com/nevostacklogo.jpg'],
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does NevoStack Agency offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NevoStack Agency offers a comprehensive range of digital services including web development, mobile app development, AI automation, AI integration, digital marketing, and custom software solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is your development process like?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our development process follows an agile methodology with phases: Discovery and Planning, Design, Development, Testing and QA, Deployment, and Ongoing Support.'
        }
      }
    ]
  };
  return (
    <div>
      <JsonLd data={faqSchema} />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
} 