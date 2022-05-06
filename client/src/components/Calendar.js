import React, { useState } from "react";
import "../css/Calendar.css";

export const Calendar = () => {
  const [month, setMonth] = useState("January");
  return (
    <div className="calendar-container">
      <h3 className="month-title">{month}</h3>
    </div>
  );
};
