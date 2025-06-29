import React from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
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
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing our best work and successful client projects
          </motion.p>
        </div>
      </div>
      
      <Portfolio />
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-primary sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Case Study
            </motion.h2>
            <motion.p 
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              How we helped TechStart Inc. increase their conversion rate by 40%
            </motion.p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                className="lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="TechStart Inc. Case Study" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div 
                className="lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-6">
                  TechStart Inc. was struggling with an outdated website that was difficult to navigate, had poor mobile responsiveness, and wasn't optimized for conversions. Their bounce rate was high, and they were losing potential customers.
                </p>
                
                <h3 className="text-2xl font-bold text-primary mb-4">Our Solution</h3>
                <p className="text-gray-600 mb-6">
                  We redesigned their website with a focus on user experience, implementing a clean, modern design with intuitive navigation. We optimized the site for mobile devices and streamlined the customer journey to reduce friction points.
                </p>
                
                <h3 className="text-2xl font-bold text-primary mb-4">The Results</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>40% increase in conversion rate</li>
                  <li>25% decrease in bounce rate</li>
                  <li>60% increase in mobile traffic</li>
                  <li>35% increase in average session duration</li>
                </ul>
                
                <a 
                  href="/case-studies/techstart" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-accent transition-all"
                >
                  View Full Case Study
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage; 