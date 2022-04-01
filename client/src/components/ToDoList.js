import React, { useState, Fragment } from "react";
import "../css/ToDoList.css";

export const ToDoList = () => {
  const [todo, setToDo] = useState([]);
  const [currentToDo, setCurrentToDo] = useState("");
  const [editToDo, setEditToDo] = useState([]); //keep track of index rather than truth values
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

  const handleEditToDo = (targetIndex) => {
    setEditToDo([...editToDo, targetIndex]);
  };

  const handleSubmitEditTodo = (targetIndex) => {
    const newToDoArr = [...todo];
    newToDoArr[targetIndex] = currentEditToDo;
    setToDo([...newToDoArr]);
  };

  const handleRemoveToDo = (targetIndex) => {
    setToDo((prev) => {
      return prev.filter((todo, index) => index !== targetIndex);
    });
  };
  console.log(editToDo);

  console.log(todo);
  return (
    <Fragment>
      <h1 className="text-center mt-5">To do</h1>
      <h3>What needs to be done?</h3>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" onChange={handleToDo} value={currentToDo}></input>
        <button className="btn btn-success" onClick={handleAddToDo}>
          Add
        </button>
      </form>
      <div>
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
      <h3>{todo.length} tasks remaining</h3>
      <ul>
        {todo.map((item, index) =>
          !editToDo.includes(index) ? (
            <div key={`${item}${index}`}>
              <li>
                <input type="checkbox" name={`${item}'s checkbox`} value={item} />
                <label htmlFor={`${item}'s checkbox`}> {item}</label>
              </li>
              <button onClick={() => handleEditToDo(index)}>Edit {item}</button>
              <button onClick={() => handleRemoveToDo(index)}>Delete {item}</button>
            </div>
          ) : (
            <div key={`${item}${index}`}>
              <li>
                <input type="text" onChange={handleEditToDoValue} value={currentEditToDo}></input>
                <button onClick={() => handleSubmitEditTodo(index)}>Submit</button>
              </li>
            </div>
          )
        )}
      </ul>
    </Fragment>
  );
};
