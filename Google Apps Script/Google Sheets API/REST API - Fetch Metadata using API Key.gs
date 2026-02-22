// -- Google Sheets REST API: Fetch Metadata using API Key -- //
// This script simulates accessing the Sheets API URL via a browser or Postman.
// It requires the Spreadsheet to be Public and a valid API Key.

function fetchSheetMetadata() {
  // Your Spreadsheet ID
  var spreadsheetId = "YOUR_SPREADSHEET_ID";
  
  // Your Google Cloud Console API Key
  var apiKey = "YOUR_GOOGLE_CLOUD_CONSOLE_API_KEY";
  
  // FINAL URL construction
  var url = "https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheetId + "?key=" + apiKey;

  // try Block to handle the request
  try {
    // Perform the GET request
    var response = UrlFetchApp.fetch(url, { "muteHttpExceptions": true });
    
    // Check for success (Status Code 200)
    if (response.getResponseCode() == 200) {
      var data = JSON.parse(response.getContentText());
      
      // Logging specific metadata from the JSON response
      Logger.log("Spreadsheet Title: " + data.properties.title);
      Logger.log("Time Zone: " + data.properties.timeZone);
      Logger.log("Spreadsheet URL: " + data.spreadsheetUrl);
      
      // To see the full JSON output like the browser version:
      // Logger.log(JSON.stringify(data, null, 2));
    } else {
      Logger.log("Error: Received Status Code " + response.getResponseCode());
      Logger.log("Response Body: " + response.getContentText());
    }
  } 

  // catch Block for network or execution errors
  catch (e) {
    Logger.log("Request Failed: " + e.message);
  }
}
