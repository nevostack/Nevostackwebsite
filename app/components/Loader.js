'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  // Prevent scrolling while loader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      {/* Background grid animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundSize: '30px 30px',
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
        }}></div>
      </div>
      
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/20"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0.8],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Logo animation */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-8">
            NevoStack
          </div>
          
          {/* Main loader animation */}
          <div className="relative">
            {/* Outer rotating circle */}
            <motion.div 
              className="w-24 h-24 rounded-full border-4 border-secondary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner rotating circle (opposite direction) */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full border-4 border-accent/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center pulsing dot */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 bg-white rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Orbiting dots */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-secondary rounded-full shadow-lg shadow-secondary/50"
                animate={{
                  x: Math.cos(i * Math.PI / 2) * 40,
                  y: Math.sin(i * Math.PI / 2) * 40,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
          
          {/* Loading text */}
          <motion.div 
            className="mt-8 text-white/80 text-sm font-medium tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LOADING
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.2 }}
            >.</motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.4 }}
            >.</motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.6 }}
            >.</motion.span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader; 