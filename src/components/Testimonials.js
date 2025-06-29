import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "NevoStack transformed our online presence completely. Their team delivered a website that not only looks stunning but also performs exceptionally well. Our conversion rate has increased by 40% since launch!",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "Working with NevoStack was a game-changer for our e-commerce business. They understood our requirements perfectly and delivered a solution that exceeded our expectations. Highly recommended!",
    author: "Michael Chen",
    position: "Founder, EcoShop",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    content: "The mobile app developed by NevoStack has revolutionized how we interact with our customers. The team was professional, responsive, and delivered the project on time and within budget.",
    author: "Emily Rodriguez",
    position: "Marketing Director, FoodDelivery",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-extrabold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-200 sm:mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it - hear from some of our satisfied clients.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="relative max-w-3xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-xl p-8"
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  className="h-12 w-12 rounded-full mr-4"
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                />
                <div>
                  <h3 className="text-lg font-medium text-primary">{testimonials[activeIndex].author}</h3>
                  <p className="text-gray-500">{testimonials[activeIndex].position}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-xl text-gray-600 italic">"{testimonials[activeIndex].content}"</p>
              </blockquote>
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 w-3 rounded-full ${index === activeIndex ? 'bg-secondary' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 