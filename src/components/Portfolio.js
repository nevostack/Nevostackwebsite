'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A fully responsive e-commerce platform with secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "FashionHub Inc.",
    year: "2023",
    link: "#"
  },
  {
    id: 2,
    title: "Travel App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A travel planning application with interactive maps and booking features.",
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe"],
    client: "TravelEase",
    year: "2023",
    link: "#"
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A modern corporate website with custom CMS and analytics dashboard.",
    technologies: ["WordPress", "PHP", "MySQL", "Google Analytics"],
    client: "TechCorp Ltd.",
    year: "2022",
    link: "#"
  },
  {
    id: 4,
    title: "AI-Powered Process Automation",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Intelligent automation system that streamlines business processes using AI and machine learning.",
    technologies: ["Python", "TensorFlow", "OpenAI API", "Docker"],
    client: "TechFlow Solutions",
    year: "2023",
    link: "#"
  },
  {
    id: 5,
    title: "Astrology & Horoscope App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A comprehensive astrology app with daily horoscopes, birth charts, and cosmic insights.",
    technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
    client: "Cosmic Insights",
    year: "2023",
    link: "#"
  },
  {
    id: 6,
    title: "Doctor Appointment System",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive healthcare platform for doctor appointments, patient management, and telemedicine.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    client: "HealthCare Plus",
    year: "2023",
    link: "#"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const categories = ['All', 'Web Development', 'Mobile App', 'AI Automation'];
  const containerRef = useRef(null);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-bl-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-accent/5 rounded-tr-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent text-lg font-semibold">Our Work</span>
          </motion.div>
          
          <motion.h2 
            className="mt-2 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Showcasing Our <span className="text-secondary">Portfolio</span>
          </motion.h2>
          
          <motion.div
            className="mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600">
              Explore our latest projects that demonstrate our expertise and creativity in delivering exceptional digital solutions.
            </p>
          </motion.div>
        </div>
        
        {/* Filter buttons - Improved for mobile */}
        <motion.div 
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {isMobile ? (
            // Mobile view - Select dropdown
            <div className="w-full max-w-xs mx-auto">
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="block w-full appearance-none bg-white/80 backdrop-blur-sm rounded-full shadow-lg border-0 py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-secondary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            // Desktop view - Button group
            <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`${
                    filter === category
                      ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-md'
                      : 'bg-transparent text-gray-700 hover:bg-gray-100'
                  } relative inline-flex items-center px-6 py-2 text-sm font-medium rounded-full transition-all duration-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                  onClick={() => openModal(project)}
                >
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-start p-6">
                      <div>
                        <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    
                    {/* View details button */}
                    <button 
                      className="mt-auto inline-flex items-center text-secondary font-medium group-hover:text-accent transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      View Details
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* "View All Projects" button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="#portfolio" 
            className="inline-flex items-center px-6 py-3 border border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with image */}
              <div className="relative aspect-video">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items=end p-6">
                  <div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                </div>
                
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary mb-4">Project Overview</h4>
                    <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                    <p className="text-gray-600 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisl. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisl.
                    </p>
                    
                    <h4 className="text-xl font-bold text-primary mb-4">Project Highlights</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                      <li>Fully responsive design for all devices</li>
                      <li>Integration with payment gateways</li>
                      <li>Custom admin dashboard</li>
                      <li>Advanced analytics and reporting</li>
                    </ul>
                  </div>
                  
                  <div className="md:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-primary mb-4">Project Details</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Client</p>
                          <p className="font-medium">{selectedProject.client}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Year</p>
                          <p className="font-medium">{selectedProject.year}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Category</p>
                          <p className="font-medium">{selectedProject.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      {/* Temporarily hidden until project links are ready */}
                      {false && (
                        <a 
                          href={selectedProject.link} 
                          className="inline-flex items-center justify-center w-full px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-accent transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Project
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;


