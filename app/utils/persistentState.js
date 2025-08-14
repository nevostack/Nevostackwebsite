'use client';

/**
 * Utility functions for managing persistent state across page refreshes
 */

// Save data to localStorage with optional expiration
export const saveState = (key, value, expirationInMinutes = null) => {
  try {
    const item = {
      value: value,
      timestamp: new Date().getTime()
    };
    
    // Add expiration if specified
    if (expirationInMinutes) {
      item.expiration = expirationInMinutes * 60 * 1000; // Convert to milliseconds
    }
    
    localStorage.setItem(key, JSON.stringify(item));
    return true;
  } catch (error) {
    console.error('Error saving state:', error);
    return false;
  }
};

// Load data from localStorage with expiration check
export const loadState = (key, defaultValue = null) => {
  try {
    const savedItem = localStorage.getItem(key);
    
    if (!savedItem) {
      return defaultValue;
    }
    
    const item = JSON.parse(savedItem);
    const now = new Date().getTime();
    
    // Check if the item has expired
    if (item.expiration && now - item.timestamp > item.expiration) {
      localStorage.removeItem(key);
      return defaultValue;
    }
    
    return item.value;
  } catch (error) {
    console.error('Error loading state:', error);
    return defaultValue;
  }
};

// Remove data from localStorage
export const removeState = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing state:', error);
    return false;
  }
};

// Clear all app data from localStorage
export const clearAllState = (prefix = 'nevostack_') => {
  try {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(prefix)) {
        localStorage.removeItem(key);
      }
    });
    return true;
  } catch (error) {
    console.error('Error clearing state:', error);
    return false;
  }
};

// Save form data to prevent loss on refresh
export const saveFormData = (formId, data) => {
  return saveState(`nevostack_form_${formId}`, data);
};

// Load saved form data
export const loadFormData = (formId) => {
  return loadState(`nevostack_form_${formId}`, {});
};

// Clear form data after submission
export const clearFormData = (formId) => {
  return removeState(`nevostack_form_${formId}`);
}; 