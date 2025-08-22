'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const faqData = [
  {
    id: 1,
    category: 'services',
    question: 'What services does NevoStack Agency offer?',
    answer: 'NevoStack Agency offers a comprehensive range of digital services including web development, mobile app development, AI automation, AI integration, digital marketing, and custom software solutions. Our team specializes in creating cutting-edge solutions tailored to your specific business needs.'
  },
  {
    id: 2,
    category: 'process',
    question: 'What is your development process like?',
    answer: 'Our development process follows an agile methodology with six key phases: Discovery and Planning, Design, Development, Testing and Quality Assurance, Deployment, and Ongoing Support and Maintenance. We emphasize collaboration, transparency, and regular client communication throughout the entire process.'
  },
  {
    id: 3,
    category: 'pricing',
    question: 'How do you structure your pricing?',
    answer: 'We offer flexible pricing models including project-based quotes, hourly rates, and retainer packages. The cost depends on project complexity, timeline, and specific requirements. We provide detailed proposals with transparent pricing before any project begins, ensuring there are no hidden costs.'
  },
  {
    id: 4,
    category: 'timeline',
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex web applications or mobile apps can take 3-6 months. During our initial consultation, we will provide a detailed timeline specific to your project requirements and business goals.'
  },
  {
    id: 5,
    category: 'technology',
    question: 'What technologies and frameworks do you use?',
    answer: 'We utilize cutting-edge technologies including React, Angular, Vue.js for frontend; Node.js, Python, and PHP for backend; React Native and Flutter for mobile development; and integrate AI capabilities using TensorFlow and PyTorch. Our technology choices are always aligned with your project requirements and industry best practices.'
  },
  {
    id: 6,
    category: 'support',
    question: 'Do you provide support after the project is completed?',
    answer: 'Absolutely! We offer comprehensive post-launch support and maintenance packages. These include regular updates, performance monitoring, security patches, and technical support. We are committed to ensuring your digital solution continues to perform optimally long after the initial launch.'
  },
  {
    id: 7,
    category: 'services',
    question: 'Do you handle both design and development?',
    answer: 'Yes, we provide end-to-end services covering both AI automation and development. Our AI specialists work closely with developers to ensure seamless implementation. This integrated approach ensures automation integrity is maintained throughout the development process, resulting in optimaly stunning and highly functional digital products.'
  },
  {
    id: 8,
    category: 'process',
    question: 'How do you handle project revisions and feedback?',
    answer: 'We incorporate client feedback at every stage of development. Our iterative approach includes dedicated review periods after each milestone. We offer a specified number of revision rounds included in the project scope, with transparent policies for additional revisions if needed.'
  }
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'technology', label: 'Technology' },
  { id: 'support', label: 'Support' }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFaqs, setFilteredFaqs] = useState(faqData);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Filter FAQs based on search term and category
  useEffect(() => {
    let result = faqData;
    
    if (selectedCategory !== 'all') {
      result = result.filter(faq => faq.category === selectedCategory);
    }
    
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      result = result.filter(faq => 
        faq.question.toLowerCase().includes(lowerCaseSearch) || 
        faq.answer.toLowerCase().includes(lowerCaseSearch)
      );
    }
    
    setFilteredFaqs(result);
  }, [searchTerm, selectedCategory]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveIndex(null); // Close any open accordion when changing category
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary mb-4">
            <span className="text-sm font-medium">Got Questions?</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-10 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="w-full px-5 py-4 pl-12 rounded-xl border-2 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {filteredFaqs.length === 0 && (
            <motion.p 
              className="text-center text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No questions found matching your search.
            </motion.p>
          )}
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all duration-300 ${
                    activeIndex === faq.id
                      ? 'bg-white shadow-xl'
                      : 'bg-white hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <span className="text-lg font-medium text-primary">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === faq.id ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border-t border-gray-100 rounded-b-xl">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <Link href="/services" 
            className="inline-flex items-center px-8 py-4 rounded-lg bg-secondary hover:bg-secondary/90 text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            <span>Contact Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
