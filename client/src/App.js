import "./App.css";
import { ToDoList } from "./components/ToDoList";
import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
