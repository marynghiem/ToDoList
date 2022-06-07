import React, { useState } from "react";
import { getNumberOfDaysInMonth } from "../utils/DateUtils";
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

export const MarysCalendar = () => {
  const [timeLength, setTimeLength] = useState("Month");
  const [month, setMonth] = useState("January");

  // Start Code
  const MONTH = MONTHS_IN_A_YEAR.indexOf(month);
  const YEAR = 2022;
  const firstDayInstance = new Date(YEAR, MONTH, 1);
  const firstDay = firstDayInstance.getDay();
  const daysInMonth = getNumberOfDaysInMonth(MONTH, YEAR);

  const createDateArray = (firstDay, lastDate) => {
    let curCell = 1;
    let digit = 1;
    const outerArray = [];
    for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
      const innerArray = [];
      for (var col = 1; col <= 7; ++col) {
        if (digit > lastDate || curCell < firstDay) {
          innerArray.push(0);
        } else {
          innerArray.push(digit);
          digit++;
        }
        curCell++;
      }
      outerArray.push(innerArray);
    }
    return outerArray;
  };
  // End Code

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
        {createDateArray(firstDay + 1, daysInMonth).map((week) =>
          week.map((day) => {
            if (day === 0) {
              <div className="day-box">hello</div>;
            }
            return <div className="day-box">{day}</div>;
          })
        )}
      </div>
    </>
  );
};
