import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <FAQ/>
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage; 