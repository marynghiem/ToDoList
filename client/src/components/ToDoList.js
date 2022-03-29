import React, { useState } from "react";
import "../css/ToDoList.css";

export const ToDoList = () => {
  const [todo, setToDo] = useState([]);
  const [currentToDo, setCurrentToDo] = useState("");
  const [editToDo, setEditToDo] = useState(false);
  const [currentEditToDo, setCurrentEditToDo] = useState("");

  const handleToDo = (e) => {
    setCurrentToDo(e.target.value);
  };
  const handleAddToDo = () => {
    setToDo([...todo, currentToDo]);
  };
  const handleEditToDoValue = (e) => {
    setCurrentEditToDo(e.target.value);
  };

  const handleEditToDo = () => {
    if (editToDo === false) {
      setEditToDo(true);
    } else if (editToDo === true) {
      setEditToDo(false);
    }
  };

  const handleSubmitEditTodo = (todoIndex) => {
    setToDo((prev) => {
      return prev.filter((todo, index) => index !== todoIndex);
    });
    setToDo([...todo, currentEditToDo]);
    setEditToDo(false);
  };

  const handleRemoveToDo = (targetIndex) => {
    setToDo((prev) => {
      return prev.filter((todo, index) => index !== targetIndex);
    });
  };
  console.log(editToDo);

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
        {todo.map((item, index) =>
          editToDo === false ? (
            <>
              <li>
                <input type="checkbox" name={`${item}'s checkbox`} value={item} />
                <label for={`${item}'s checkbox`}> {item}</label>
              </li>
              <button onClick={handleEditToDo}>Edit {item}</button>
              <button onClick={() => handleRemoveToDo(index)}>Delete {item}</button>
            </>
          ) : (
            <>
              {" "}
              <li>
                <input type="text" onChange={handleEditToDoValue} value={currentEditToDo}></input>
                <button onClick={handleSubmitEditTodo}>Submit</button>
              </li>
            </>
          )
        )}
      </ul>
    </div>
  );
};
