'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: "🚀",
    title: "Lightning Fast Development",
    description: "We deliver projects 40% faster than industry average with our streamlined development process and cutting-edge tools.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: "💎",
    title: "Premium Quality Code",
    description: "Clean, scalable, and maintainable code that follows industry best practices and modern development standards.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: "🎯",
    title: "Results-Driven Approach",
    description: "Every project is built with clear business objectives in mind, ensuring measurable ROI and growth for your business.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: "🛡️",
    title: "24/7 Support & Maintenance",
    description: "Round-the-clock technical support and proactive maintenance to keep your digital assets running smoothly.",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: "⚡",
    title: "Cutting-Edge Technology",
    description: "We use the latest frameworks, tools, and technologies to build future-proof solutions that scale with your business.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    icon: "🤝",
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest communication throughout the entire development process.",
    color: "from-teal-500 to-blue-500"
  }
];

const stats = [
  { 
    number: "50+", 
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries",
    icon: "📊"
  },
  { 
    number: "98%", 
    label: "Client Satisfaction",
    description: "Exceptional feedback from our valued clients",
    icon: "⭐"
  },
  { 
    number: "24/7", 
    label: "Support Available",
    description: "Round-the-clock technical assistance",
    icon: "🛠️"
  },
  { 
    number: "40%", 
    label: "Faster Delivery",
    description: "Compared to industry standards",
    icon: "⚡"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-accent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide">Why Choose NevoStack</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Don't Just Build
            <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mt-2">
              We Transform
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the difference of working with a team that combines 
            <span className="text-secondary font-semibold"> technical excellence</span>, 
            <span className="text-accent font-semibold"> creative innovation</span>, and 
            <span className="text-white font-semibold"> unwavering commitment</span> to your success.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhyChooseUs; 