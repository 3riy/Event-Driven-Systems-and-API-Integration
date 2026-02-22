// -- POST Request and Spreadsheet Logging -- //
// This function sends a JSON payload to an external API using POST 
// and writes the response data into a specific Google Sheet.

function postDataToExternalAPI() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  // API URL
  var url = "https://httpbin.org/post";

  // Headers
  var headers = {
    "x-api-key": "api-free-v1",
    "Content-Type": "application/json"
  };

  // JSON payload
  var payload = {
    name: "Riya",
    job: "Developer"
  };

  // Options
  var options = {
    method: "POST",
    headers: headers,
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  // Fetch API data - Make Request
  var response = UrlFetchApp.fetch(url, options);

  // Parse JSON response
  var data = JSON.parse(response.getContentText());

  // Write data to spreadsheet
  sheet.getRange("A1").setValue("Name").setFontWeight('bold');
  sheet.getRange("B1").setValue("Job").setFontWeight('bold');
  
  // Write values from the parsed JSON response
  sheet.getRange("A2").setValue(data.json.name);
  sheet.getRange("B2").setValue(data.json.job);
}
