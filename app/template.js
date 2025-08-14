'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development' || ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

    if (!isDev) {
      // Enable caching for better performance only in production
      if ('caches' in window) {
        caches.open('nevostack-assets-cache-v1').then(cache => {
          const urlsToCache = ['/', '/favicon.ico', '/logo192.png', '/logo512.png'];
          cache.addAll(urlsToCache).catch(error => {
            console.log('Caching error:', error);
          });
        });
      }

      // Pre-load important pages
      const pagesToPreload = ['/services', '/about', '/portfolio', '/contact'];
      pagesToPreload.forEach(page => {
        try {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = page;
          document.head.appendChild(link);
        } catch (e) {
          console.log('Prefetch error:', e);
        }
      });
    } else {
      // In dev, clear caches to avoid stale assets during iteration
      if ('caches' in window && caches.keys) {
        caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
      }
    }
    
    // Check if this is the first load
    const hasVisited = localStorage.getItem('hasVisited');
    const lastVisit = localStorage.getItem('lastVisitTime');
    const currentTime = new Date().getTime();
    
    // Calculate time difference since last visit (if any)
    const timeDiff = lastVisit ? currentTime - parseInt(lastVisit) : null;
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    
    if (hasVisited && timeDiff && timeDiff < dayInMilliseconds) {
      // If visited recently (within a day), show minimal loading time
      setTimeout(() => {
        setLoading(false);
      }, 800);
    } else {
      // First visit or it's been more than a day, show full loading animation
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
        localStorage.setItem('lastVisitTime', currentTime.toString());
      }, 3000); // Show loader for 3 seconds
    }
    
    // Clean up function to update last visit time when they leave
    return () => {
      localStorage.setItem('lastVisitTime', new Date().getTime().toString());
    };
  }, []);
  
  if (loading) {
    return <Loader />;
  }

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