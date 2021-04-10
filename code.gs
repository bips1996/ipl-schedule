function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();

  var cid = "Your calender id here";

  
  var eventcal = CalendarApp.getCalendarById(cid);
  var schedule =  sheet.getRange("A2:H57").getValues();
  for(i = 0;i<schedule.length;i++)
  {
    var title = schedule[i][2]+ " vs "+ schedule[i][3];
    var datetimestart = schedule[i][6];
    var datetimeend = schedule[i][7];
    //console.log(title);
    console.log(new Date(datetimestart));
    eventcal.createEvent(title,datetimestart,datetimeend,{location: schedule[i][5]});
  }
}