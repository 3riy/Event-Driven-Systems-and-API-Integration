// -- Google Calendar API: Create Calendar -- //

function createNewCalendar() {
  // Inserts a new calendar into the user's account
  var calendar = Calendar.Calendars.insert({
    summary: "Project Reports Calendar",
    timeZone: Session.getScriptTimeZone()
  });
  Logger.log("Calendar created: " + calendar.summary);
}
