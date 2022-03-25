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

  const handleRemoveToDo = (targetIndex) => {
    setToDo((prev) => {
      return prev.filter((todo, index) => index !== targetIndex);
    });
  };

  console.log(todo);
  return (
    <div>
      <h1>To do</h1>
      <h3>What needs to be done?</h3>
      <input type="text" onChange={handleToDo} value={currentToDo}></input>
      <button onClick={handleAddToDo}>Add</button>
      <div>
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
      <h3>{todo.length} tasks remaining</h3>
      <ul>
        {todo.map((item, index) => (
          <>
            <li>
              <input type="checkbox" name={`${item}'s checkbox`} value={item} />
              <label for={`${item}'s checkbox`}> {item}</label>
            </li>
            <button onClick={() => handleRemoveToDo(index)}>Delete {item}</button>
          </>
        ))}
      </ul>
    </div>
  );
};
