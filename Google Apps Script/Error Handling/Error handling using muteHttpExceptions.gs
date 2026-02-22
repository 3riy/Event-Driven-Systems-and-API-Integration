// -- Error handling using muteHttpExceptions -- //

function callAPI() {
  var url = "https://api.example.com/data";
  var options = {
    method: "get",
    muteHttpExceptions: true // Allows manual error handling
  };

  var response = UrlFetchApp.fetch(url, options);
  var status = response.getResponseCode(); // Get HTTP status (e.g., 200, 404, 500)

  if (status === 200) {
    var result = JSON.parse(response.getContentText());
    Logger.log(result);
  } else {
    Logger.log("Error code: " + status);
    Logger.log(response.getContentText());
  }
}
