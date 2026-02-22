// -- Multiple APIs with No Key -- //

function multipleAPIsNokey() {
  // API 1
  var weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";
  var weatherRes = UrlFetchApp.fetch(weatherUrl);
  var weather = JSON.parse(weatherRes.getContentText());
  
  // API 2
  var jokeUrl = "https://official-joke-api.appspot.com/random_joke";
  Logger.log(jokeUrl);
  var jokeRes = UrlFetchApp.fetch(jokeUrl);
  var joke = JSON.parse(jokeRes.getContentText());

  // Use data from both APIs
  Logger.log(weather);
  Logger.log('Temperature: '+ weather.current_weather.temperature+ "C");
  Logger.log("Wind speed: "+weather.current_weather.windspeed);
  Logger.log("Joke: "+joke.setup+ " - "+ joke.punchline);

  var sheet= SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();

  // API 1 Table
  var weatherHeaders = [["Temperature(C)","Wind Speed"]];
  var weatherRow = [[weather.current_weather.temperature, weather.current_weather.windspeed]];
  sheet.getRange(1,1,1,2).setValues(weatherHeaders);
  sheet.getRange(2,1,1,2).setValues(weatherRow);

  // API 2 Table
  var jokeHeaders= [["Joke Setup","Joke Punchline"]];
  var jokeRow= [[joke.setup, joke.punchline]];
  sheet.getRange(5,1,1,2).setValues(jokeHeaders);
  sheet.getRange(6,1,1,2).setValues(jokeRow);

  // Optional formatting 
  sheet.getRange("A1:B1").setFontWeight("bold");
  sheet.getRange("A5:B5").setFontWeight("bold");
  sheet.autoResizeColumns(1,2);
}
