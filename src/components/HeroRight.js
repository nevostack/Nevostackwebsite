import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroRight = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  // Check if device is mobile
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full flex items-center justify-center overflow-hidden framer-motion-overflow-fix"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/5 to-pink-600/10 rounded-[150px] blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600/10 via-transparent to-violet-600/10 rounded-[150px] blur-[120px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-3xl px-4">
        {/* Central Design Element */}
        <motion.div
          className="relative aspect-square"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Glassmorphic Central Sphere */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            </div>
            {/* Rotating Border - Simplified for mobile */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/10"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: isMobile ? 30 : 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          {/* Floating Tech Elements - Reduced for mobile */}
          {/* {[
            { icon: '💻', text: 'Web Dev', position: { top: '15%', left: '10%' } },
            { icon: '⚛️', text: 'React', position: { top: '25%', right: '15%' } },
            { icon: '🎨', text: 'Design', position: { bottom: '20%', left: '15%' } },
            { icon: '🚀', text: 'Performance', position: { bottom: '30%', right: '10%' } }
          ].slice(0, isMobile ? 2 : 4).map((item, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={item.position}
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transform: ['translateY(-8px)', 'translateY(8px)']
              }}
              transition={{
                y: { duration: 0.8, delay: 0.2 * i },
                opacity: { duration: 0.8, delay: 0.2 * i },
                transform: { duration: isMobile ? 6 : 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
              }}
            >
              <div className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-lg md:text-xl">{item.icon}</span>
                <span className="text-xs md:text-sm font-medium text-white opacity-80 group-hover:opacity-100">{item.text}</span>
              </div>
            </motion.div>
          ))} */}

          {/* Dynamic Connection Lines - Reduced for mobile */}
          {!isMobile && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              {[...Array(2)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${150 + i * 100},${150 + i * 50} Q${300 + i * 20},${200 + i * 30} ${450 + i * 50},${250 + i * 20}`}
                  stroke="url(#modern-gradient)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 0.5 * i,
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              ))}
              <defs>
                <linearGradient id="modern-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#9333EA" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          )}

          {/* Interactive Particles - Reduced for mobile */}
          {[...Array(isMobile ? 10 : 25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
                x: [0, Math.random() * 10 - 5],
                y: [0, Math.random() * 10 - 5]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Service Cards - Optimized for mobile */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-6 flex-wrap justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { text: 'Web Development', icon: '🌐' },
            { text: 'AI Automation', icon: '🤖' },
            { text: 'Digital Solutions', icon: '📱' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group px-3 py-2 md:px-6 md:py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroRight;
