import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    title: "UI/UX Design",
    description: "User-centered design with beautiful interfaces and seamless user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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
          className="mt-24 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium mb-4 text-sm">
                      Free Digital Assessment
                    </span>
                  </motion.div>
                  
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Get Your Free Digital <span className="text-secondary">Growth Plan</span>
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 text-lg mb-6"
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
                  className="space-y-4"
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
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-6 py-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {[
                    { value: "500+", label: "Businesses Analyzed" },
                    { value: "95%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Form */}
              <div className="relative">
                <motion.div
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Start Your Free Assessment</h4>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        placeholder="Your business name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                      <input
                        type="url"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors"
                        placeholder="https://"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Goals</label>
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors">
                        <option value="">Select your primary goal</option>
                        <option value="increase_sales">Increase Sales</option>
                        <option value="brand_awareness">Brand Awareness</option>
                        <option value="lead_generation">Lead Generation</option>
                        <option value="market_expansion">Market Expansion</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg bg-secondary text-white font-medium 
                               hover:bg-secondary/90 transform hover:scale-[1.02] transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-md"
                    >
                      Get Free Assessment
                    </button>
                  </form>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    No credit card required. Get your analysis within 48 hours.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
 
      </div>
    </section>
  );
};

export default Services; 