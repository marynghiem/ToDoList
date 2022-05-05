import "./App.css";
import { ToDoList } from "./components/ToDoList";
import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <ToDoList />
          </Fragment>
        }
      ></Route>
    </Routes>
  );
}

export default App;
