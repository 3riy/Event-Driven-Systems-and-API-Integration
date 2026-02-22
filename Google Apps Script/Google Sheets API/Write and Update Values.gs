// -- Google Sheets API: Write and Update Values -- //

function myFunction() {
  var spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  var range = "Sheet1!A1:B3"; // Defines the range to update

  // try Block
  try {
    // 1. Prepare the data (Values must be in a 2D array)
    var values = [
      ["Item Name", "Quantity"],
      ["Laptops", "10"],
      ["Monitors", "15"]
    ];

    var valueRange = Sheets.newValueRange();
    valueRange.values = values;

    // 2. Call the Sheets API to update values
    // Syntax: update(resource, spreadsheetId, range, options)
    Sheets.Spreadsheets.Values.update(valueRange, spreadsheetId, range, {
      valueInputOption: "RAW"
    });

    Logger.log("Sheets API: Data updated successfully.");
  }

  // catch Block
  catch (e) {
    Logger.log("Sheets API Error: " + e.message);
  }
}
