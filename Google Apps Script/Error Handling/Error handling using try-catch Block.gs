// -- Error handling using try-catch Block -- //

function try_catch() {
  // try Block
  try {
    var response = UrlFetchApp.fetch(url, options);
    var data = JSON.parse(response.getContentText());
    Logger.log(data);
  }
  // catch Block
  catch (err) {
    Logger.log("Request failed: " + err.message); // Logs specific failure reason
  }
}
