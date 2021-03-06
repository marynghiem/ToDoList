import "./App.css";
import { ToDoList } from "./components/ToDoList";
import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
