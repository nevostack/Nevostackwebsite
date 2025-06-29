import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import heroImage from '../assets/7040859.jpg';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
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

  return (
    <div className="relative bg-primary text-white overflow-hidden min-h-screen flex items-center" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated rays */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-secondary opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent opacity-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="grid grid-cols-12 h-full">
            {Array(12).fill().map((_, colIndex) => (
              <div key={`col-${colIndex}`} className="relative">
                {Array(12).fill().map((_, rowIndex) => (
                  <motion.div
                    key={`dot-${colIndex}-${rowIndex}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ 
                      left: `${(colIndex / 12) * 100}%`, 
                      top: `${(rowIndex / 12) * 100}%` 
                    }}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: (colIndex + rowIndex) * 0.1,
                      repeatType: "reverse" 
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary mb-6"
              variants={fadeIn}
              custom={0}
            >
              <span className="text-sm font-medium">Next-Gen Development Agency</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={fadeIn}
              custom={1}
            >
              <span className="block">Tech That Builds Startups</span>
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Not Just Software.</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
              variants={fadeIn}
              custom={2}
            >
              Creating cutting-edge solutions that redefine innovation.
              Stay ahead with AI-powered technology for the future.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={fadeIn}
              custom={3}
            >
              <Link to="/contact" className="px-8 py-4 rounded-lg bg-secondary hover:bg-secondary/90 text-white font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <span>Connect With Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link to="/portfolio" className="px-8 py-4 rounded-lg border-2 border-white/20 hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center">
                View Portfolio
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-16 flex items-center justify-center lg:justify-start gap-8"
              variants={fadeIn}
              custom={4}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-primary bg-gray-${i*100} flex items-center justify-center overflow-hidden`}>
                    <span className="text-xs font-bold text-primary">
                      {["JS", "AI", "UX"][i-1]}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">Trusted by 200+ clients worldwide</span>
            </motion.div>
          </motion.div>
          
          {/* Right content - Image from assets */}
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.img 
                src={heroImage} 
                alt="Web Development" 
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating tech badges */}
            {['HTML', 'JS', 'C++', 'JAVA'].map((tech, index) => (
              <motion.div
                key={tech}
                className="absolute bg-secondary/90 text-white font-bold px-4 py-2 rounded-lg shadow-lg"
                style={{
                  top: `${20 + index * 20}%`,
                  right: index % 2 === 0 ? '10%' : '25%',
                  zIndex: 10
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
    </div>
  );
};

export default Hero;