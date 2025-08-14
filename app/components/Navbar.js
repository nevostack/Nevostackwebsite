'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Function to check if the link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">NevoStack</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive('/') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80 hover:text-white'}`}>Home</Link>
              <Link href="/services" className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive('/services') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80 hover:text-white'}`}>Services</Link>
              <Link href="/portfolio" className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive('/portfolio') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80 hover:text-white'}`}>Portfolio</Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive('/about') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/80 hover:text-white'}`}>About</Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive('/contact') ? 'bg-accent text-white' : 'bg-secondary hover:bg-accent text-white'}`}>Contact Us</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-secondary focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white'}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white'}`} onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/portfolio" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/portfolio') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white'}`} onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-secondary text-white' : 'text-white hover:bg-secondary hover:text-white'}`} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-accent' : 'bg-secondary hover:bg-accent'} text-white`} onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 