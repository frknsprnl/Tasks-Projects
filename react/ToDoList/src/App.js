import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todo, setTodo] = useState({ task: "", isCompleted: false });
  const [filter, setFilter] = useState([]);
  const [status, setStatus] = useState("All");
  const [time, setTime] = useState("");

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
    localStorage.setItem("todos", JSON.stringify(todos));
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

  useEffect(() => {
    const timer = () => {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();

      m = checkTime(m);
      s = checkTime(s);

      setTime(h + ":" + m + ":" + s);
      setTimeout(timer, 1000);
    };

    timer();
  }, [time]);

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  return (
    <div className="App">
      <h6
        style={{
          fontSize: "1rem",
          color: "rgb(0,0,0,.75)",
          position: "absolute",
          bottom: 0,
          left: 10,
        }}
        className="ownerText"
      >
        <span>Made with 🖤 by Furkan Süpürenel &nbsp; </span>
      </h6>
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <a href="https://github.com/frknsprnl" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <span
          style={{
            fontSize: "1.2em",
          }}
        >
          {time}
        </span>
      </div>
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
