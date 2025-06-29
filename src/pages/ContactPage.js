import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const ContactPage = () => {
  return (
    <div>
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our team to discuss your project
          </motion.p>
        </div>
      </div>
      
      {/* <Contact /> */}
      
      <FAQ />
    </div>
  );
};

export default ContactPage; 