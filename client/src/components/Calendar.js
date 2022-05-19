import React, { useState } from "react";
import "../css/Calendar.css";

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

export const Calendar = () => {
  const [timeLength, setTimeLength] = useState("Month");
  const [month, setMonth] = useState("January");

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <>
      <select name="month" id="month" onChange={handleMonthChange}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <select name="time-frame" id="time-frame">
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <div className="calendar-container">
        <h3 className="month-title">{month}</h3>
        {DAYS_OF_THE_WEEK.map((day) => (
          <div className="day-of-the-week">{day}</div>
        ))}
        {create2DArray(ROWS_OF_WEEKS, COLUMNS_OF_DAYS).map((week) =>
          week.map((day) => <div className="day-box">hello</div>)
        )}
      </div>
    </>
  );
};
