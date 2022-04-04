import React, { useState, Fragment, useEffect } from "react";
import "../css/ToDoList.css";
import { EditToDo } from "./EditToDo";

export const ToDoList = () => {
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
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

  //delete todo

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(todos);
  return (
    <>
      <Fragment>
        <h1 className="todo-title text-center mt-5">To Do List</h1>
        <h3>What needs to be done?</h3>
        <form className="d-flex mt-5 todo-form" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></input>
          <button className="btn btn-success">Add</button>
        </form>
      </Fragment>
      <div className="todo-list-container">
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditToDo todo={todo} />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
