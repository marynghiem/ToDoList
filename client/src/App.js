import "./App.css";
import { ToDoList } from "./components/ToDoList";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="App">
        <ToDoList />
      </div>
    </Fragment>
  );
}

export default App;
