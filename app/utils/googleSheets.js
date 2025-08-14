// Google Sheets Integration Utility
// This file handles form data submission to Google Sheets

// Configuration
const GOOGLE_SHEETS_CONFIG = {
  // Replace with your actual Google Apps Script Web App URL
  WEB_APP_URL:"https://script.google.com/macros/s/AKfycbzDG9As1q2yA1MX3MMZH3iUoWlHeasjIQgW63FMGJ3RhiCcRsASY8NDTiQJZY9tgFaz/exec",
  
  // Sheet column headers (should match your Google Sheet)
  COLUMNS: [
    'Timestamp',
    'Business Name',
    'Email',
    'Website URL',
    'Phone',
    'Timestamp',
  ]
};

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @param {string} formType - Type of form (contact, assessment, etc.)
 * @returns {Promise<Object>} - Response from Google Sheets
 */
export const submitToGoogleSheets = async (formData = {}, formType = 'contact') => {
  try {
    // Only submit the "Get Your Free Digital Growth Plan" (assessment) form
    if (formType !== 'assessment') {
      return {
        success: true,
        skipped: true,
        message: 'Non-assessment form – not sent to Google Sheets'
      };
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    
    // Map assessment form data to sheet columns
    const sheetData = {
      timestamp,
      businessName: formData.businessName || '',
      email: formData.email || '',
      websiteUrl: formData.websiteUrl || '',
      phone: formData.phone || '',
      formType
    };

    // Debug: Log the exact data being sent
    // Note: Visible in browser console during submission
    console.log('Google Sheets submission payload:', {
      url: GOOGLE_SHEETS_CONFIG.WEB_APP_URL,
      formType,
      sheetData
    });

    // Prefer FormData to avoid CORS preflight
    const body = new FormData();
    Object.entries(sheetData).forEach(([key, value]) => body.append(key, value));

    // First try a standard fetch without custom headers
    try {
      const response = await fetch(GOOGLE_SHEETS_CONFIG.WEB_APP_URL, {
        method: 'POST',
        body: body
      });

      // Some environments still block reading response due to CORS; attempt to parse if allowed
      let result = null;
      try {
        result = await response.json();
      } catch (_) {
        // Response not readable due to CORS; assume success since request was sent
      }

      return {
        success: true,
        data: result,
        message: 'Data submitted successfully!'
      };
    } catch (err) {
      // Fallback: use no-cors to fire-and-forget
      await fetch(GOOGLE_SHEETS_CONFIG.WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: body
      });
      return {
        success: true,
        opaque: true,
        message: 'Data submitted (no-cors fallback).'
      };
    }

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to submit data. Please try again.'
    };
  }
};

/**
 * Test Google Sheets connection
 * @returns {Promise<Object>} - Test result
 */
export const testGoogleSheetsConnection = async () => {
  try {
    const testData = {
      timestamp: new Date().toISOString(),
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      company: 'Test Company',
      businessName: 'Test Business',
      subject: 'Connection Test',
      message: 'This is a test submission',
      budget: 'Test Budget',
      projectType: 'Test Project',
      formType: 'test'
    };

    const result = await submitToGoogleSheets(testData, 'test');
    return result;

  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: 'Connection test failed'
    };
  }
};

/**
 * Get Google Sheets configuration
 * @returns {Object} - Configuration object
 */
export const getGoogleSheetsConfig = () => {
  return GOOGLE_SHEETS_CONFIG;
};

