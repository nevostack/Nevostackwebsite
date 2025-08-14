'use client';

import React, { useState } from 'react';
import Portfolio from '../../src/components/Portfolio';
import { motion, AnimatePresence } from 'framer-motion';

// Coming Soon Modal Component
const ComingSoonModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-primary to-secondary p-1">
              <div className="bg-white rounded-xl p-8">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2">Coming Soon!</h3>
                  <p className="text-gray-600 mb-6">
                    We're working on this detailed case study. Please check back soon or contact us directly for more information about this project.
                  </p>
                  
                  <div className="space-y-3">
                    <button
                      onClick={onClose}
                      className="w-full py-3 px-6 rounded-lg bg-secondary text-white font-medium 
                               hover:bg-secondary/90 transform hover:scale-[1.02] transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    >
                      Close
                    </button>
                    
                    <a
                      href="/contact"
                      className="block w-full py-3 px-6 rounded-lg border border-secondary text-secondary font-medium 
                              hover:bg-secondary/5 transition-all duration-300
                              focus:outline-none focus:ring-2 focus:ring-secondary/50 text-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-primary hover:bg-white transition-colors"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Our Portfolio
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Explore our latest projects and success stories
          </p>
        </div>
      </div>
      
      <Portfolio showAll={true} />
      
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Featured Success Story</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From Challenge to
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Transformation
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how we helped TechStart Inc. achieve remarkable results through strategic design and development.
            </motion.p>
          </div>
          
          {/* Main Case Study Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Case Study Details */}
            <motion.div 
              className="lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Client Info Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">TechStart Inc.</div>
                  <div className="text-xs text-gray-500">SaaS Platform</div>
                </div>
              </div>
              
              {/* Challenge Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 text-xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">The Challenge</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  TechStart Inc. was struggling with an outdated website that was difficult to navigate, 
                  had poor mobile responsiveness, and wasn't optimized for conversions. Their bounce rate 
                  was high, and they were losing potential customers daily.
                </p>
              </div>

              {/* Solution Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">💡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Solution</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  We redesigned their website with a focus on user experience, implementing a clean, 
                  modern design with intuitive navigation. We optimized the site for mobile devices 
                  and streamlined the customer journey to reduce friction points.
                </p>
                
                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full border border-secondary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Results Section */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">The Results</h3>
                </div>
                
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { metric: "40%", label: "Conversion Rate Increase", color: "from-green-500 to-emerald-500" },
                    { metric: "25%", label: "Bounce Rate Decrease", color: "from-blue-500 to-cyan-500" },
                    { metric: "60%", label: "Mobile Traffic Growth", color: "from-purple-500 to-pink-500" },
                    { metric: "35%", label: "Session Duration", color: "from-orange-500 to-red-500" }
                  ].map((result, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-1`}>
                        {result.metric}
                      </div>
                      <div className="text-xs text-gray-600">{result.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button 
                  onClick={openModal}
                className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  View Full Case Study
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>

            {/* Right Content - Visual Elements */}
            <motion.div 
              className="lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Image */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-xl"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="TechStart Inc. Case Study" 
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-3xl font-bold mb-2">40%</div>
                      <div className="text-sm opacity-90">Conversion Rate Increase</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">🚀</div>
                <div className="text-xs text-gray-600 mt-1">Performance</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-2xl">💎</div>
                <div className="text-xs text-gray-600 mt-1">Quality</div>
              </motion.div>

              {/* Progress Bar */}
              <div className="mt-8 bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
            </div>
              <div className="text-center mt-2 text-sm text-gray-600">Project Completion: 85%</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <ComingSoonModal 
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
} 