import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description: 'We begin by understanding your business objectives, target audience, and project requirements through detailed consultation and research.',
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      description: 'Our creative team develops wireframes, visual designs, and interactive prototypes to bring your vision to life before development begins.',
    },
    {
      id: 3,
      title: 'Development',
      description: 'Our expert developers build your solution using modern technologies and best practices, ensuring clean, efficient, and scalable code.',
    },
    {
      id: 4,
      title: 'Testing & QA',
      description: 'We rigorously test your project across multiple devices and browsers to ensure flawless functionality, security, and performance.',
    },
    {
      id: 5,
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing maintenance, updates, and support to ensure long-term success and growth.',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary mb-4 text-sm font-medium">
              Our Methodology
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The NevoStack Process
          </motion.h2>
          
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our proven five-step methodology ensures exceptional results for every project
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16">
          <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div>
          <div 
            className="absolute top-12 left-0 h-1 bg-gradient-to-r from-secondary to-accent transition-all duration-500 hidden md:block"
            style={{ width: `${(activeStep / steps.length) * 100}%` }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
              >
                <button 
                  onClick={() => setActiveStep(step.id)}
                  className="w-full text-left focus:outline-none"
                >
                  <div className="flex flex-col items-center">
                    <div 
                      className={`flex items-center justify-center w-16 h-16 rounded-full border-4 mb-4 transition-all duration-300 ${
                        step.id === activeStep
                          ? 'bg-secondary border-secondary text-white scale-110 shadow-lg shadow-secondary/30'
                          : step.id < activeStep
                          ? 'bg-secondary border-secondary text-white'
                          : 'bg-white border-gray-300 text-gray-400'
                      }`}
                    >
                      <span className="text-xl font-bold">{step.id}</span>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 text-center transition-colors duration-300 ${
                      step.id <= activeStep ? 'text-primary' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Active Step Content */}
        <motion.div
          key={activeStep}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-secondary/10 text-secondary">
                <span className="text-2xl font-bold">{activeStep}</span>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {steps[activeStep - 1].title}
              </h3>
              
              <p className="text-lg text-gray-600">
                {steps[activeStep - 1].description}
              </p>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className={`flex items-center px-4 py-2 rounded-lg border ${
                    activeStep === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Previous
                </button>
                
                <button
                  onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length))}
                  disabled={activeStep === steps.length}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    activeStep === steps.length
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-secondary text-white hover:bg-secondary/90'
                  }`}
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 