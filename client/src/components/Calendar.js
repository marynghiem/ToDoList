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
