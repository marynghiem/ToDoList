import React, { useState, Fragment } from "react";
import "../css/ToDoList.css";

export const ToDoList = () => {
  const [description, setDescription] = useState("");
  const [editToDo, setEditToDo] = useState([]); //keep track of index rather than truth values
  const [currentEditToDo, setCurrentEditToDo] = useState("");

  //adding description or sending data out

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">To do</h1>
      <h3>What needs to be done?</h3>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></input>
        <button className="btn btn-success">Add</button>
      </form>
      <div>
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
    </Fragment>
  );
};
