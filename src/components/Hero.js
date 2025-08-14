'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <div className="relative bg-primary text-white overflow-x-hidden min-h-screen flex items-center py-8 md:py-0" ref={ref}>
      {/* Animated background elements - Reduced complexity for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated rays - Simplified animations */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-secondary opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 3, repeatType: "reverse", delay: 0.5 }}
        />
        
        {/* Animated dots grid - Reduced number of dots for better performance */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="grid grid-cols-6 md:grid-cols-12 h-full">
            {Array(6).fill().map((_, colIndex) => (
              <div key={`col-${colIndex}`} className="relative">
                {Array(6).fill().map((_, rowIndex) => (
                  <motion.div
                    key={`dot-${colIndex}-${rowIndex}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ 
                      left: `${(colIndex / 6) * 100}%`, 
                      top: `${(rowIndex / 6) * 100}%` 
                    }}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 4, 
                      delay: (colIndex + rowIndex) * 0.2,
                      repeatType: "reverse" 
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-secondary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Main content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-8 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left order-1 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            {/* Badge with enhanced design */}
            <motion.div 
              className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border border-secondary/30 backdrop-blur-sm mb-4 sm:mb-6"
              variants={fadeIn}
              custom={0}
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium">Next-Gen Development Agency</span>
            </motion.div>
            
            {/* Enhanced main heading */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              variants={fadeIn}
              custom={1}
            >
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Tech That Builds
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-300% animate-gradient-x"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                Digital Empires
              </motion.span>
            </motion.h1>
            
            {/* Enhanced description */}
            <motion.p 
              className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              variants={fadeIn}
              custom={2}
            >
              We don't just build websites — we architect digital ecosystems that scale, 
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-semibold"> revolutionize industries</span>, 
              and transform visions into reality.
            </motion.p>
            
            {/* Enhanced CTA buttons */}
            <motion.div 
              className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
              variants={fadeIn}
              custom={3}
            >
              <Link href="/contact">
                <motion.div 
                  className="group relative px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold overflow-hidden cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    Start Your Empire
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </span>
                </motion.div>
              </Link>
              
              <Link href="/portfolio">
                <motion.div 
                  className="px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-white/20 hover:bg-white/10 text-white font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                View Portfolio
                </motion.div>
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="mt-6 sm:mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-8"
              variants={fadeIn}
              custom={4}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Tech Code Animation - Hidden on Mobile */}
          <motion.div 
            className="hidden lg:block relative order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Main Tech Container */}
            <div className="relative">
              
              {/* Code Editor Mockup */}
              <motion.div 
                className="bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl overflow-hidden mx-2 sm:mx-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                {/* Editor Header */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border-b border-white/10">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">App.jsx</div>
                </div>
                
                {/* Code Content */}
                <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm">
                  {[
                    { line: "import React from 'react';", color: "text-purple-400", delay: 1.2 },
                    { line: "import { NextJS } from 'next';", color: "text-purple-400", delay: 1.4 },
                    { line: "import { useState } from 'react';", color: "text-purple-400", delay: 1.5 },
                    { line: "", color: "", delay: 1.6 },
                    { line: "const App: React.FC = () => {", color: "text-blue-400", delay: 1.7 },
                    { line: "  const [data, setData] = useState();", color: "text-gray-300", delay: 1.9 },
                    { line: "", color: "", delay: 2.0 },
                    { line: "  return (", color: "text-gray-300", delay: 2.1 },
                    { line: "    <div className='app'>", color: "text-green-400", delay: 2.2 },
                    { line: "      <h1>Modern Web App</h1>", color: "text-yellow-400", delay: 2.3 },
                    { line: "      <Component />", color: "text-pink-400", delay: 2.4 },
                    { line: "    </div>", color: "text-green-400", delay: 2.5 },
                    { line: "  );", color: "text-gray-300", delay: 2.6 },
                    { line: "};", color: "text-blue-400", delay: 2.7 }
                  ].map((codeLine, index) => (
                    <motion.div
                      key={index}
                      className={`${codeLine.color} mb-1`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: codeLine.delay }}
                    >
                      {codeLine.line && (
                        <>
                          <span className="text-gray-500 mr-2 sm:mr-4 text-xs sm:text-sm">{index + 1}</span>
                          {codeLine.line}
                          <motion.span
                            className="bg-secondary w-1 sm:w-2 h-4 sm:h-5 ml-1 inline-block"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          />
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>



              {/* Binary Rain Effect */}
              <div className="absolute -left-8 sm:-left-12 top-0 h-full w-6 sm:w-8 overflow-hidden">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((col) => (
                  <motion.div
                    key={col}
                    className="absolute text-green-400 text-xs font-mono opacity-30"
                    style={{ left: `${col * 6}px` }}
                    animate={{
                      y: [-20, 400],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: col * 0.3,
                      ease: "linear"
                    }}
                  >
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="mb-2">
                        {Math.random() > 0.5 ? '1' : '0'}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>



              {/* Terminal Window */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-8 -right-8 sm:-right-12 bg-black/80 backdrop-blur-xl rounded-lg p-2 sm:p-4 border border-green-500/30 font-mono text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
              >
                <div className="text-green-400 mb-1 sm:mb-2 text-xs">$ npm run build</div>
                <div className="text-gray-400 mb-1 text-xs">✓ Building application...</div>
                <div className="text-green-400 text-xs">✓ Build successful!</div>
                <motion.div
                  className="w-2 h-4 bg-green-400 mt-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
    </div>
  );
};

export default Hero;