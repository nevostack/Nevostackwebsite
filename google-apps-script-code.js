// Google Apps Script Code
// Deploy this as a Web App in Google Apps Script

// Replace with your actual Google Sheet ID
const SHEET_ID = "1RzvD5uuhHuPgISsGWdPIvdCi35BmO6ETx3Bh_U8lVVk";
const SHEET_NAME = "Nevostack Data"; // Sheet name where data will be written

/**
 * Main function to handle POST requests
 */
function doPost(e) {
  try {
    // Parse incoming data (supports JSON and form-data)
    let data = {};
    if (e.postData && e.postData.type && e.postData.contents) {
      try {
        if ((e.postData.type || '').includes('application/json')) {
          data = JSON.parse(e.postData.contents);
        } else {
          // Treat as form-urlencoded or multipart; Apps Script auto-populates e.parameter
          data = e.parameter || {};
        }
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers, then fetch again
    if (!sheet) {
      createSheetWithHeaders(spreadsheet);
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
    }
    
    // Only accept assessment form submissions
    if ((data.formType || '').toLowerCase() !== 'assessment') {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          skipped: true,
          message: 'Ignored non-assessment form submission'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Ensure headers are in desired order
    ensureHeaders(sheet);

    // Convert timestamp to local time string (e.g., 08:15 PM)
    const tz = spreadsheet.getSpreadsheetTimeZone() || 'Asia/Kolkata';
    const tsSource = data.timestamp || new Date().toISOString();
    const timeOnly = Utilities.formatDate(new Date(tsSource), tz, 'hh:mm a');

    // Prepare row data in the order: Business Name, Email, Website URL, Phone, Timestamp (time only)
    const rowData = [
      data.businessName || '',
      data.email || '',
      data.websiteUrl || '',
      data.phone || '',
      timeOnly
    ];
    
    // Append data to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        message: 'Failed to save data'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Create sheet with headers if it doesn't exist
 */
function createSheetWithHeaders(spreadsheet) {
  const sheet = spreadsheet.insertSheet(SHEET_NAME);
  
  // Set headers (assessment form only) in desired order
  const headers = [
    'Business Name',
    'Email',
    'Website URL',
    'Phone',
    'Timestamp'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4285f4')
    .setFontColor('white');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  // Freeze header row
  sheet.setFrozenRows(1);
}

/**
 * Ensure the existing sheet header row matches the desired order
 */
function ensureHeaders(sheet) {
  const desired = ['Business Name', 'Email', 'Website URL', 'Phone', 'Timestamp'];
  const range = sheet.getRange(1, 1, 1, desired.length);
  const current = range.getValues()[0] || [];
  let mismatch = current.length !== desired.length;
  if (!mismatch) {
    for (var i = 0; i < desired.length; i++) {
      if ((current[i] || '').toString().trim() !== desired[i]) {
        mismatch = true;
        break;
      }
    }
  }
  if (mismatch) {
    range.setValues([desired]);
    // Re-apply header styles
    range.setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    sheet.setFrozenRows(1);
  }
}

/**
 * Test function to verify setup
 */
function testSetup() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (sheet) {
      console.log('Sheet exists and is accessible');
      console.log('Sheet name:', sheet.getName());
      console.log('Last row:', sheet.getLastRow());
      console.log('Last column:', sheet.getLastColumn());
    } else {
      console.log('Sheet does not exist, creating...');
      createSheetWithHeaders(spreadsheet);
    }
    
    return true;
  } catch (error) {
    console.error('Setup test failed:', error);
    return false;
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Google Apps Script is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
