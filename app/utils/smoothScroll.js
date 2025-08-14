/**
 * Smooth scroll utility functions
 */

// Smooth scroll to element by ID
export const smoothScrollTo = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Smooth scroll to top
export const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Smooth scroll to bottom
export const smoothScrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
};

// Smooth scroll to specific position
export const smoothScrollToPosition = (position) => {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
};

// Smooth scroll with custom easing
export const smoothScrollWithEasing = (targetPosition, duration = 1000) => {
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
};

// Handle anchor link clicks
export const handleAnchorClick = (e, offset = 100) => {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const targetId = href.substring(1);
    smoothScrollTo(targetId, offset);
  }
};

// Add smooth scroll to all anchor links
export const initializeSmoothScroll = (offset = 100) => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => handleAnchorClick(e, offset));
  });
};

// Scroll to element with intersection observer for better performance
export const scrollToElementWithObserver = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elementPosition = entry.target.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(element);
};



