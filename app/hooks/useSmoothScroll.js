import { useEffect, useCallback, useState } from 'react';
import { 
  smoothScrollTo, 
  smoothScrollToTop, 
  smoothScrollToBottom,
  handleAnchorClick,
  initializeSmoothScroll 
} from '../utils/smoothScroll';

/**
 * Custom hook for smooth scrolling functionality
 */
export const useSmoothScroll = (offset = 100) => {
  
  // Initialize smooth scroll for anchor links
  useEffect(() => {
    initializeSmoothScroll(offset);
  }, [offset]);

  // Scroll to element by ID
  const scrollToElement = useCallback((elementId) => {
    smoothScrollTo(elementId, offset);
  }, [offset]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    smoothScrollToTop();
  }, []);

  // Scroll to bottom
  const scrollToBottom = useCallback(() => {
    smoothScrollToBottom();
  }, []);

  // Handle anchor click
  const handleClick = useCallback((e) => {
    handleAnchorClick(e, offset);
  }, [offset]);

  // Scroll to section with custom offset
  const scrollToSection = useCallback((sectionId, customOffset = offset) => {
    smoothScrollTo(sectionId, customOffset);
  }, [offset]);

  // Smooth scroll with custom duration
  const smoothScrollWithDuration = useCallback((targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function (easeInOutCubic)
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    handleClick,
    scrollToSection,
    smoothScrollWithDuration
  };
};

/**
 * Hook for scroll-based animations
 */
export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrollY(window.pageYOffset);
      setIsScrolling(true);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const handleScroll = () => {
      requestTick();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Reset scrolling state after scroll ends
    const resetScrolling = () => {
      setIsScrolling(false);
    };

    let scrollTimeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(resetScrolling, 150);
    };

    window.addEventListener('scroll', handleScrollEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return { scrollY, isScrolling };
};
