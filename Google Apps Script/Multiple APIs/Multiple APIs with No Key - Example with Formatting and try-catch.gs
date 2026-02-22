// -- Multiple APIs with No Key - Example with Formatting and try-catch -- //

function spaceAPIs() {
  try {

    // ISS Location API
    var issUrl = "http://api.open-notify.org/iss-now.json";
    var iss = JSON.parse(UrlFetchApp.fetch(issUrl).getContentText());

    // People in Space API
    var peopleUrl = "http://api.open-notify.org/astros.json";
    var people = JSON.parse(UrlFetchApp.fetch(peopleUrl).getContentText());

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear();

    // Convert astronaut names to string
    var names = people.people.map(p => p.name).join(", ");

    // Title
    sheet.getRange("A1:E1")
      .merge()
      .setValue("LIVE SPACE DATA — ISS Tracker")
      .setFontSize(16)
      .setFontWeight("bold")
      .setHorizontalAlignment("center")
      .setBackground("#0B5394")
      .setFontColor("white");

    // Headers
    var headers = [[
      "ISS Latitude",
      "ISS Longitude",
      "Astronauts in Space",
      "Astronaut Names",
      "Fetched At"
    ]];

    sheet.getRange(2, 1, 1, headers[0].length)
      .setValues(headers)
      .setFontWeight("bold")
      .setBackground("#CFE2F3")
      .setHorizontalAlignment("center");

    // Data row
    var row = [[
      iss.iss_position.latitude,
      iss.iss_position.longitude,
      people.number,
      names,
      new Date()
    ]];

    // Formatting
    sheet.getRange(3, 1, 1, row[0].length)
      .setValues(row)
      .setHorizontalAlignment("center")
      .setWrap(true);

    sheet.getRange("A2:E3").setBorder(true, true, true, true, true, true); // Borders
    sheet.setFrozenRows(2); // Freeze header
    sheet.getRange("A1:E3").setFontFamily("Arial").setFontSize(11); // Font & size
    sheet.autoResizeColumns(1, 5); // Auto resize

  } catch (e) {
    SpreadsheetApp.getUi().alert("Error: " + e.message);
  }
}
