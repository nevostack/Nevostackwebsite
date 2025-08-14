'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitToGoogleSheets } from '../../app/utils/googleSheets';

// Add keyframe animations for the blob effect
const styles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

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
                    We're working hard to bring you our Free Assessment tool. Please check back soon or contact us directly for a personalized consultation.
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

const servicesList = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom website development with responsive design and modern technologies.",
    features: ["Responsive Design", "SEO Optimization", "Fast Loading Speed", "Modern UI/UX"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile app development for iOS and Android.",
    features: ["Cross-Platform", "Native Experience", "Offline Support", "Push Notifications"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment gateways and inventory management.",
    features: ["Payment Integration", "Inventory Management", "Customer Analytics", "Mobile Optimized"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "AI AUTOMATION",
    description: "Intelligent automation solutions powered by artificial intelligence to streamline your business processes.",
    features: ["Process Automation", "AI Integration", "Smart Workflows", "Data Analytics"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Improve your website's visibility and ranking on search engines.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Performance Optimization"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Ongoing website maintenance, updates, and technical support.",
    features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Tuning"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [assessmentFormData, setAssessmentFormData] = useState({
    businessName: '',
    email: '',
    websiteUrl: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleAssessmentClick = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Debug: Log raw form data from UI
      console.log('Assessment form data (raw):', assessmentFormData);
      // Submit to Google Sheets
      const result = await submitToGoogleSheets(assessmentFormData, 'assessment');
      // Debug: Log API result
      console.log('Google Sheets submission result:', result);
      
      if (result.success) {
        setSubmitMessage('Thank you! Your assessment request has been submitted successfully.');
        
        // Reset form
        setAssessmentFormData({
          businessName: '',
          email: '',
          websiteUrl: '',
          phone: ''
        });
        
        // Show success message for 3 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage(result.message || 'Failed to submit assessment request. Please try again.');
      }
    } catch (error) {
      console.error('Assessment submission error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAssessmentFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const closeComingSoon = () => {
    setIsComingSoonOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 relative overflow-hidden" id="services">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-bl-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-tr-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent text-lg font-semibold">What We Offer</span>
          </motion.div>
          
          <motion.h2 
            className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Premium Services
          </motion.h2>
          
          <motion.div
            className="mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600">
              We provide comprehensive digital solutions to help your business thrive in the online world.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
              initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-transparent transition-opacity duration-300 ${activeService === service.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                {/* Service icon with animated background */}
                <div className="relative z-10">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-lg transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md text-secondary group-hover:text-accent transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {/* Features list with animated bullets */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeService === service.id ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-gradient-to-r from-secondary/10 to-accent/10 w-20 h-20 -top-10 -right-10"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute transform rotate-45 bg-gradient-to-r from-secondary/10 to-accent/10 w-16 h-16 -bottom-8 -left-8"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Free Assessment Section */}
        <motion.div
          className="mt-16 md:mt-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
              {/* Left Column - Content */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium mb-3 md:mb-4 text-xs md:text-sm">
                      Free Digital Assessment
                    </span>
                  </motion.div>
                  
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Get Your Free Digital <span className="text-secondary">Growth Plan</span>
                  </motion.h3>
                  
                  <motion.p
                    className="text-base md:text-lg text-gray-600 mb-4 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Discover untapped opportunities and get actionable insights to accelerate your business growth.
                  </motion.p>
                </div>

                {/* Benefits List */}
                <motion.div
                  className="space-y-3 md:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[
                    "Comprehensive Digital Presence Analysis",
                    "Custom Growth Strategy",
                    "Competition Analysis",
                    "ROI Projections"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-4 md:gap-6 py-4 md:py-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {[
                    { value: "500+", label: "Businesses Analyzed" },
                    { value: "95%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-lg p-3 md:p-4">
                      <div className="text-xl md:text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Form */}
              <div className="relative">
                <motion.div
                  className="bg-white rounded-xl p-5 md:p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Start Your Free Assessment</h4>
                  
                  {submitMessage && (
                    <div className={`px-4 py-3 rounded-lg mb-4 text-sm ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-100 border border-green-400 text-green-700'
                        : 'bg-red-100 border border-red-400 text-red-700'
                    }`}>
                      <p className="font-medium">{submitMessage}</p>
                    </div>
                  )}
                  
                  <form className="space-y-3 md:space-y-4" onSubmit={handleAssessmentClick}>
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        value={assessmentFormData.businessName}
                        onChange={handleFormChange}
                        className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-sm md:text-base"
                        placeholder="Your business name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={assessmentFormData.email}
                        onChange={handleFormChange}
                        className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-sm md:text-base"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Website URL</label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={assessmentFormData.websiteUrl}
                        onChange={handleFormChange}
                        className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-sm md:text-base"
                        placeholder="https://"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={assessmentFormData.phone}
                        onChange={handleFormChange}
                        className="w-full px-3 md:px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors text-sm md:text-base"
                        placeholder="Your phone number"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-lg bg-secondary text-white font-medium 
                               transform transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-md text-sm md:text-base mt-2 ${
                                 isSubmitting 
                                   ? 'opacity-50 cursor-not-allowed' 
                                   : 'hover:bg-secondary/90 hover:scale-[1.02]'
                               }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Free Assessment'}
                    </button>
                  </form>

                  <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4 text-center">
                    No credit card required. Get your analysis within 48 hours.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
 
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal 
        isOpen={isComingSoonOpen}
        onClose={closeComingSoon}
      />
    </section>
  );
};

export default Services; 