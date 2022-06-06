import React from "react";
import { NavBar } from "./NavBar";
import Calendar from "react-calendar";
import { MarysCalendar } from "./MarysCalendar";

export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Calendar></Calendar>
      <MarysCalendar />
    </div>
  );
};
