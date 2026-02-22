// -- try-catch Block: Creating calendar event -- //

function try_catch() {

  // Define calendar ID
  var calendarId = "primary"; // Main calendar

  // try Block
  try {
  // Create event
  var event = {
    summary: "Team Meeting",
    description: "Discuss project updates",
    start: {
      dateTime: "2026-02-06T10:00:00Z",
      timeZone: "Asia/Kolkata"
    },
    end: {
      // Changed end time to 11:00:00 to give the event a duration
      dateTime: "2026-02-06T11:00:00Z", 
      timeZone: "Asia/Kolkata"
    },
  };
  // Insert event
  // Note: You must enable 'Google Calendar API' in the Services tab for this to work
  Calendar.Events.insert(event, calendarId);
  }

  // catch Block - handle any error
  catch (e) {
    // Changed to e.message to see the actual reason for the error in the logs
    Logger.log("Error: " + e.message);
  };
}
