import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};
