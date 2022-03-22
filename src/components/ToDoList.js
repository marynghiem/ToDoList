import React, { useState } from "react";
import "../css/ToDoList.css";

export const ToDoList = () => {
  const [todo, setToDo] = useState([]);
  const [currentToDo, setCurrentToDo] = useState("");

  const handleToDo = (e) => {
    setCurrentToDo(e.target.value);
  };
  const handleAddToDo = () => {
    setToDo([...todo, currentToDo]);
  };
  console.log(todo);
  return (
    <div>
      <input type="text" onChange={handleToDo} value={currentToDo}></input>
      <button onClick={handleAddToDo}>Add</button>
    </div>
  );
};
