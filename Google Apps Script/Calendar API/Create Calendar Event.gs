// -- Create Calendar Event -- //

function createCalendarEvent() {

  // Define calendar ID
  var calendarId = "primary"; // Main calendar

  // Create event
  var event = {
    summary: "Team Meeting",
    description: "Discuss project updates",
    start: {
      dateTime: "2026-02-06T10:00:00",
      timeZone: "Asia/Kolkata"
    },
    end: {
      dateTime: "2026-02-06T10:00:00",
      timeZone: "Asia/Kolkata"
    },
  };

  // Insert event
  Calendar.Events.insert(event, calendarId);
}
