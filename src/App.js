import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ task: "", isCompleted: false });

  const onChangeInput = (e) => {
    setTodo({ [e.target.name]: e.target.value });
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    addTodo(todo);
    setTodo({ task: "" });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmitForm}>
            <input
              className="new-todo"
              name="task"
              placeholder="What needs to be done?"
              value={todo.task}
              onChange={onChangeInput}
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.task}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
