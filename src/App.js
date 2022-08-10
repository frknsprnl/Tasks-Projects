import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ task: "", isCompleted: false });
  const [filter, setFilter] = useState([]);
  const [status, setStatus] = useState("All");

  const onChangeInput = (e) => {
    setTodo({ [e.target.name]: e.target.value, isCompleted: false });
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
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setFilter(todos.filter((item) => item.isCompleted === true));
          break;

        case "Active":
          setFilter(todos.filter((item) => item.isCompleted === false));
          break;

        default:
          setFilter(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const completedTaskCounter = () => {
    let counter = 0;
    todos.forEach((item) => {
      if (item.isCompleted === false) {
        counter++;
      }
    });
    return counter;
  };

  const statusHandler = (e) => {
    setStatus(e.target.innerHTML);
  };

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
            {filter.map((todo, index) => (
              <li
                key={index}
                className={`${todo.isCompleted ? "completed" : ""}`}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        todo.isCompleted = true;
                      } else {
                        todo.isCompleted = false;
                      }
                      setTodos([...todos]);
                    }}
                    checked={todo.isCompleted ? true : false}
                  />
                  <label>{todo.task}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{completedTaskCounter()} </strong>
            todos left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected" onClick={statusHandler}>
                All
              </a>
            </li>
            <li>
              <a href="#/" onClick={statusHandler}>
                Active
              </a>
            </li>
            <li>
              <a href="#/" onClick={statusHandler}>
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
