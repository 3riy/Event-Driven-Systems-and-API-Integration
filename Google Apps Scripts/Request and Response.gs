// -- Request and Response -- //

function APIExample() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var url = "https://httpbin.org/post";

  var headers = {
    "x-api-key": "api-free-v1",
    "Content-Type": "application/json"
  };

  var payload = {
    name: "Your name",
    job: "Developer"
  };

  var options = {
    method: "POST",
    headers: headers,
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  Logger.log(data);

  // Write to spreadsheet
  // Write headers (optional)
  sheet.getRange("A2").setValue(data.json.name);
  sheet.getRange("B2").setValue(data.json.job);
}
