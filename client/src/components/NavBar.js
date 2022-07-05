import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="/home">
        Home
      </a>
      <a href="/todo">To do</a>
    </div>
  );
};
