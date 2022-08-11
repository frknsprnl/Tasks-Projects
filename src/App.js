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
    if (todos.length === 0) {
      setStatus("All");
    }

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

  const remainingTodoCounter = () => {
    let counter = 0;
    filter.forEach((item) => {
      if (item.isCompleted === false) {
        counter++;
      }
    });
    return counter;
  };

  const statusHandler = (e) => {
    setStatus(e.target.innerHTML);
  };

  const toggleAll = () => {
    if (todos.length === 0) {
      return false;
    }

    const toggleAllDOM = document.querySelector(".toggle-all");
    if (toggleAllDOM.checked === true) {
      toggleAllDOM.checked = false;
      setTodos(filter.map((item) => ({ ...item, isCompleted: false })));
    } else {
      toggleAllDOM.checked = true;
      setTodos(filter.map((item) => ({ ...item, isCompleted: true })));
    }
  };

  const clearCompleted = () => {
    setTodos(filter.filter((item) => item.isCompleted === false));
  };

  const deleteTodo = (e) => {
    const selectedTodo = e.target.previousSibling.innerHTML;

    setTodos(filter.filter((item) => item.task !== selectedTodo));
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
          <label htmlFor="toggle-all" onClick={toggleAll}>
            Mark all as complete
          </label>

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
                  <button className="destroy" onClick={deleteTodo}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer" hidden={todos.length === 0 ? true : false}>
          <span className="todo-count">
            <strong>{remainingTodoCounter()} </strong>
            todos left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className={status === "All" ? "selected" : ""}
                onClick={statusHandler}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={status === "Active" ? "selected" : ""}
                onClick={statusHandler}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={status === "Completed" ? "selected" : ""}
                onClick={statusHandler}
              >
                Completed
              </a>
            </li>
          </ul>

          <button
            className="clear-completed"
            onClick={clearCompleted}
            hidden={status !== "All" ? true : false}
          >
            Clear completed
          </button>
        </footer>
      </section>
    </div>
  );
}

export default App;
