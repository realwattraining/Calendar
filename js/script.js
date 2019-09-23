// declare variable d equals to Date
var d = new Date();

// declare variable month and year equal to this month and this year
var month = d.getMonth();
var year = d.getFullYear();

// declare selectedmonth and selectedyear equal to dropdown item of month and year with specified value
var selectedmonth = document.getElementById("month");
var selectedyear = document.getElementById("year");

// create array of months name
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

// declare month and year equal to h6 with id of month and year with specified value
var monthandyear = document.getElementById("monthAndYear");

//call funtion showcalendar
showCalendar(month, year);

// fucntion jump() use for change a everything within calendar
function jump() {
  // convert year and month value in both year and month dropdown to integer and set year and month equal to -
  // the values that we selected in both dropdowns
  year = parseInt(selectedyear.value);
  month = parseInt(selectedmonth.value);

  showCalendar(month, year);
}

// function next() use for go to next month
function next() {
  //if month equal to the value of 11 it means December, the year will plus 1
  if (month == 11) {
    year = year + 1;
  }

  // and month will be equal to a a reminder of division of month+1 and devide to 12
  month = (month + 1) % 12;
  showCalendar(month, year);
}

// function previous() use for go to previous month
function previous() {
  // if month equals to the value of 0 so the year will subtracts 1 then month will go to 11 that the value of Dec
  // else just only subtract the month and keep year in the same year
  if (month == 0) {
    year = year - 1;
    month = 11;
  } else {
    month = month - 1;
  }
  showCalendar(month, year);
}

// a function to show a calendar
function showCalendar(month, year) {
  var daysinmonth = 32 - new Date(year, month, 32).getDate();
  var firstDay = new Date(year, month).getDay();
  var tbl = document.getElementById("calendar-body");
  tbl.innerHTML = " ";
  var date = 1;
  monthandyear.innerHTML = months[month] + " " + year;
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        var cellrow = document.createTextNode("");
        cell.appendChild(cellrow);
        row.appendChild(cell);
      } else if (date > daysinmonth) {
        break;
      } else {
        cell = document.createElement("td");
        cellrow = document.createTextNode(date);
        if (j == 0) {
          cell.setAttribute("class", "sunday");
        }
        cell.appendChild(cellrow);
        row.appendChild(cell);
        date++;
        if (j > daysinmonth) {
          cell = document.createElement("td");
          var cellrow = document.createTextNode("");
          cell.appendChild(cellrow);
          row.appendChild(cell);
        }
      }
    }
    tbl.appendChild(row);
  }
}
