'use client';

import { useSmoothScroll } from '../hooks/useSmoothScroll';

const SmoothScrollExample = () => {
  const { 
    scrollToElement, 
    scrollToTop, 
    scrollToBottom, 
    handleClick,
    scrollToSection 
  } = useSmoothScroll(100);

  return (
    <div className="smooth-scroll-container">
      {/* Navigation buttons */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => scrollToTop()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          ↑ Top
        </button>
        
        <button
          onClick={() => scrollToSection('services')}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Services
        </button>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Contact
        </button>
        
        <button
          onClick={() => scrollToBottom()}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          ↓ Bottom
        </button>
      </div>

      {/* Anchor links example */}
      <div className="flex justify-center gap-4 mb-8">
        <a 
          href="#hero" 
          onClick={handleClick}
          className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300"
        >
          Hero Section
        </a>
        <a 
          href="#about" 
          onClick={handleClick}
          className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300"
        >
          About
        </a>
        <a 
          href="#services" 
          onClick={handleClick}
          className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300"
        >
          Services
        </a>
        <a 
          href="#contact" 
          onClick={handleClick}
          className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300"
        >
          Contact
        </a>
      </div>

      {/* Example sections with scroll snap */}
      <section 
        id="hero" 
        className="scroll-snap-start min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Hero Section</h1>
          <p className="text-xl">Smooth scrolling is working perfectly!</p>
        </div>
      </section>

      <section 
        id="about" 
        className="scroll-snap-start min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">About Section</h2>
          <p className="text-xl">Scroll to see more sections below</p>
        </div>
      </section>

      <section 
        id="services" 
        className="scroll-snap-start min-h-screen bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Services Section</h2>
          <p className="text-xl">Almost at the bottom!</p>
        </div>
      </section>

      <section 
        id="contact" 
        className="scroll-snap-start min-h-screen bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Contact Section</h2>
          <p className="text-xl">You've reached the bottom!</p>
        </div>
      </section>
    </div>
  );
};

export default SmoothScrollExample;



