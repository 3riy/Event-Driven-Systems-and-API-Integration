/**
 * Fetches statistics from the Railway Stations API.
 * Automatically creates the 'Logs' sheet and headers if they don't exist. Uses try-catch block.
 */
function fetchRailwayStats() {
  const apiUrl = "https://api.railway-stations.org/stats";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let logSheet = ss.getSheetByName("Logs");
  
  // 1. Setup Logic: Create sheet and headers if missing
  if (!logSheet) {
    logSheet = ss.insertSheet("Logs");
    logSheet.appendRow(["Timestamp", "Status Code", "Error Message"]);
    logSheet.getRange("A1:C1").setFontWeight("bold").setBackground("#f3f3f3");
    Logger.log("Created 'Logs' sheet and added headers.");
  }

  try {
    // 2. Implementation: Try to fetch data
    const response = UrlFetchApp.fetch(apiUrl, {
      'muteHttpExceptions': true 
    });
    
    const statusCode = response.getResponseCode();
    
    // Check for failure (anything other than 200 OK)
    if (statusCode !== 200) {
      throw new Error("HTTP Error " + statusCode);
    }

    // Success case
    const data = JSON.parse(response.getContentText());
    Logger.log("Success! Data received: " + JSON.stringify(data));

  } catch (e) {
    // 3. Error Handling Logic
    const timestamp = new Date();
    const errorMessage = e.message;
    
    // Extract status code if possible, otherwise label as 'System Error'
    const statusCode = (errorMessage.includes("HTTP Error")) 
                       ? errorMessage.replace("HTTP Error ", "") 
                       : "Internal Script Error";

    // Log to Apps Script Console
    Logger.log("--- API FAILURE LOGGED ---");
    Logger.log("Timestamp: " + timestamp);
    Logger.log("Status: " + statusCode);
    Logger.log("Message: " + errorMessage);

    // 4. Write error into the "Logs" sheet
    logSheet.appendRow([timestamp, statusCode, errorMessage]);
    
    // Auto-resize columns for readability
    logSheet.autoResizeColumns(1, 3);
  }
}
