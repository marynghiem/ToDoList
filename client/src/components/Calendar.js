import React, { useState } from "react";
import "../css/Calendar.css";

const MONTHS_IN_A_YEAR = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];
const DAYS_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const COLUMNS_OF_DAYS = 7;
const ROWS_OF_WEEKS = 6;

const create2DArray = (rowNum, columnNum) => {
  const totalArray = [];
  for (let i = 0; i < rowNum; i++) {
    const rows = [];
    for (let j = 0; j < columnNum; j++) {
      rows.push(0);
    }
    totalArray.push(rows);
  }
  return totalArray;
};

console.log(create2DArray(ROWS_OF_WEEKS, COLUMNS_OF_DAYS));

const getTime = () => {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  now = null;
  let ampm = "";

  if (hour >= 12) {
    hour -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
    hour = hour == 0 ? 12 : hour;
  }

  if (minute < 10) {
    minute = "0" + minute + " " + ampm;
  }
  return hour + ":" + minute + " " + ampm;
};

const leapYear = () => {
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
};
const getDays = (month, year) => {
  let ar = newArray(12);
  ar[0] = 31; // January
  ar[1] = leapYear(year) ? 29 : 28; // February
  ar[2] = 31; // March
  ar[3] = 30; // April
  ar[4] = 31; // May
  ar[5] = 30; // June
  ar[6] = 31; // July
  ar[7] = 31; // August
  ar[8] = 30; // September
  ar[9] = 31; // October
  ar[10] = 30; // November
  ar[11] = 31; // December

  // return number of days in the specified month (parameter)
  return ar[month];
};

const getMonthName = (month) => {
  let ar = new Array(12);

  ar[0] = "January";
  ar[1] = "February";
  ar[2] = "March";
  ar[3] = "April";
  ar[4] = "May";
  ar[5] = "June";
  ar[6] = "July";
  ar[7] = "August";
  ar[8] = "September";
  ar[9] = "October";
  ar[10] = "November";
  ar[11] = "December";

  // return name of specified month (parameter)
  return ar[month];
};

const setCal = () => {
  let now = new Date();
  let year = now.getYear();
  if (year < 1000) {
    year += 1900;
  }
  let month = now.getMonth();
  let monthName = getMonthName(month);
  let date = now.getDate();
  now = null;
  let firstDayInstance = new Date(year, month, 1);
  let firstDay = firstDayInstance.getDay();
  firstDayInstance = null;

  let days = getDays(month, year);
  drawCal(firstDay + 1, days, date, monthName, year);
};

const drawCal = (firstDay, lastDate, date, monthName, year) => {
  // constant table settings
  var headerHeight = 50; // height of the table's header cell
  var border = 2; // 3D height of table's border
  var cellspacing = 4; // width of table's border
  var headerColor = "midnightblue"; // color of table's header
  var headerSize = "+3"; // size of tables header font
  var colWidth = 60; // width of columns in table
  var dayCellHeight = 25; // height of cells containing days of the week
  var dayColor = "darkblue"; // color of font representing week days
  var cellHeight = 40; // height of cells representing dates in the calendar
  var todayColor = "red"; // color specifying today's date in the calendar
  var timeColor = "purple"; // color of font representing current time

  // create basic table structure
  var text = ""; // initialize accumulative variable to empty string
  text += "<CENTER>";
  text += "<TABLE BORDER=" + border + " CELLSPACING=" + cellspacing + ">"; // table settings
  text += "<TH COLSPAN=7 HEIGHT=" + headerHeight + ">"; // create table header cell
  text += '<FONT COLOR="' + headerColor + '" SIZE=' + headerSize + ">"; // set font for table header
  text += monthName + " " + year;
  text += "</FONT>"; // close table header's font settings
  text += "</TH>"; // close header cell

  // variables to hold constant settings
  var openCol = "<TD WIDTH=" + colWidth + " HEIGHT=" + dayCellHeight + ">";
  openCol += '<FONT COLOR="' + dayColor + '">';
  var closeCol = "</FONT></TD>";

  // create array of abbreviated day names
  var weekDay = new Array(7);
  weekDay[0] = "Sun";
  weekDay[1] = "Mon";
  weekDay[2] = "Tues";
  weekDay[3] = "Wed";
  weekDay[4] = "Thu";
  weekDay[5] = "Fri";
  weekDay[6] = "Sat";

  // create first row of table to set column width and specify week day
  text += '<TR ALIGN="center" VALIGN="center">';
  for (var dayNum = 0; dayNum < 7; ++dayNum) {
    text += openCol + weekDay[dayNum] + closeCol;
  }
  text += "</TR>";

  // declaration and initialization of two variables to help with tables
  var digit = 1;
  var curCell = 1;

  for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
    text += '<TR ALIGN="right" VALIGN="top">';
    for (var col = 1; col <= 7; ++col) {
      if (digit > lastDate) break;
      if (curCell < firstDay) {
        text += "<TD></TD>";
        curCell++;
      } else {
        if (digit == date) {
          // current cell represent today's date
          text += "<TD HEIGHT=" + cellHeight + ">";
          text += '<FONT COLOR="' + todayColor + '">';
          text += digit;
          text += "</FONT><BR>";
          text += '<FONT COLOR="' + timeColor + '" SIZE=2>';
          text += "<CENTER>" + getTime() + "</CENTER>";
          text += "</FONT>";
          text += "</TD>";
        } else text += "<TD HEIGHT=" + cellHeight + ">" + digit + "</TD>";
        digit++;
      }
    }
    text += "</TR>";
  }

  // close all basic table tags
  text += "</TABLE>";
  text += "</CENTER>";

  // print accumulative HTML string
  document.write(text);
};

export const Calendar = () => {
  const [timeLength, setTimeLength] = useState("Month");
  const [month, setMonth] = useState("January");

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <>
      <select name="month" id="month" onChange={handleMonthChange}>
        {MONTHS_IN_A_YEAR.map((month) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <select name="time-frame" id="time-frame">
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <div className="calendar-container">
        <h3 className="month-title">{month}</h3>
        <div className="day-of-the-week-container">
          {DAYS_OF_THE_WEEK.map((day) => (
            <div className="day-of-the-week">{day}</div>
          ))}
        </div>
        {create2DArray(ROWS_OF_WEEKS, COLUMNS_OF_DAYS).map((week) =>
          week.map((day) => <div className="day-box">hello</div>)
        )}
      </div>
    </>
  );
};
