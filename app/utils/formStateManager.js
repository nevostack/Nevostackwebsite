'use client';

import { saveState, loadState, removeState } from './persistentState';

/**
 * Form State Manager
 * Handles form state persistence across the entire website
 */

// Prefix for all form data in storage
const FORM_PREFIX = 'nevostack_form_';

// Save form state with automatic backup
export const saveFormState = (formId, data) => {
  try {
    // Save to localStorage with 7-day expiration
    saveState(`${FORM_PREFIX}${formId}`, data, 10080); // 7 days in minutes
    
    // Save a backup in case localStorage gets cleared
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(`${FORM_PREFIX}${formId}_backup`, JSON.stringify({
        data,
        timestamp: new Date().getTime()
      }));
    }
    
    return true;
  } catch (error) {
    console.error('Error saving form state:', error);
    return false;
  }
};

// Load form state with backup recovery
export const loadFormState = (formId, defaultValue = {}) => {
  try {
    // Try to load from localStorage first
    const data = loadState(`${FORM_PREFIX}${formId}`);
    
    if (data) {
      return data;
    }
    
    // If not found, try to recover from backup
    if (typeof sessionStorage !== 'undefined') {
      const backupData = sessionStorage.getItem(`${FORM_PREFIX}${formId}_backup`);
      
      if (backupData) {
        const parsed = JSON.parse(backupData);
        
        // Check if backup is less than 1 day old
        const now = new Date().getTime();
        const backupAge = now - parsed.timestamp;
        const oneDayInMs = 24 * 60 * 60 * 1000;
        
        if (backupAge < oneDayInMs) {
          // Restore from backup to localStorage
          saveState(`${FORM_PREFIX}${formId}`, parsed.data, 10080);
          return parsed.data;
        }
      }
    }
    
    return defaultValue;
  } catch (error) {
    console.error('Error loading form state:', error);
    return defaultValue;
  }
};

// Clear form state from all storage
export const clearFormState = (formId) => {
  try {
    removeState(`${FORM_PREFIX}${formId}`);
    
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(`${FORM_PREFIX}${formId}_backup`);
    }
    
    return true;
  } catch (error) {
    console.error('Error clearing form state:', error);
    return false;
  }
};

// Auto-save form data with debounce
export const useFormAutoSave = (formId, data, setIsSaving, formTouched, debounceMs = 500) => {
  if (!formTouched) return;
  
  setIsSaving(true);
  const saveTimer = setTimeout(() => {
    saveFormState(formId, data);
    setIsSaving(false);
  }, debounceMs);
  
  return () => clearTimeout(saveTimer);
};

// Handle beforeunload event for unsaved form data
export const setupBeforeUnloadHandler = (formTouched, isSubmitted, formData) => {
  const handleBeforeUnload = (e) => {
    // Check if form has been touched but not submitted and has content
    const hasContent = Object.values(formData).some(value => 
      value && typeof value === 'string' && value.trim() !== ''
    );
    
    if (formTouched && !isSubmitted && hasContent) {
      const message = "You have unsaved changes. Your data is saved locally, but are you sure you want to leave?";
      e.returnValue = message;
      return message;
    }
  };
  
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }
  
  return () => {};
}; 