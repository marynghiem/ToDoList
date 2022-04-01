import React, { useState, Fragment, useEffect } from "react";
import "../css/ToDoList.css";

export const ToDoList = () => {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
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
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  //get to dos
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <>
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
      </Fragment>
      <Fragment>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*  <tr> <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>*/}
            {todos.map((todo) => (
              <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    </>
  );
};
