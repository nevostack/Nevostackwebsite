'use client';

import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function Template({ children }) {
  // Removed all loading state and animations
  
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 