import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date) {
      const currentTime = new Date().toLocaleString();
      setTodos([...todos, { task, date, time: currentTime, completed: false }]);
      console.log(`Task added: ${task} - Date: ${date} - Time: ${currentTime}`);
      setTask("");
      setDate("");
    }
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <form onSubmit={onFormSubmit} className="form">
          <input
            type="text"
            className="task-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <input
            type="date"
            className="date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" className="button-add">
            Add
          </button>
        </form>
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => {
              setFilter("all");
              console.log(`Filter set to: all - Time: ${new Date().toLocaleString()}`);
            }}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === "active" ? "active" : ""}`}
            onClick={() => {
              setFilter("active");
              console.log(`Filter set to: active - Time: ${new Date().toLocaleString()}`);
            }}
          >
            Active
          </button>
          <button
            className={`filter-button ${filter === "completed" ? "active" : ""}`}
            onClick={() => {
              setFilter("completed");
              console.log(`Filter set to: completed - Time: ${new Date().toLocaleString()}`);
            }}
          >
            Completed
          </button>
          <button
            className={`filter-button ${filter === "log" ? "active" : ""}`}
            onClick={() => {
              setFilter("log");
              console.log(`Filter set to: log - Time: ${new Date().toLocaleString()}`);
            }}
          >
            Log
          </button>
        </div>
        {filteredTodos.length === 0 && (
          <p className="empty-message">No tasks yet. Add one above!</p>
        )}
        <ul className="list">
          {filteredTodos.map((todo, index) => (
            <li className="list-item" key={index}>
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompletion(index)}
                />
                <span className={`task-text ${todo.completed ? "completed" : ""}`}>
                  {todo.task} - {todo.date} - {todo.time}
                </span>
              </label>
              <button
                className="button-delete"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {totalCount > 0 && (
          <div className="no-tasks">
            <span className="task-count">{`${completedCount} of ${totalCount} tasks completed`}</span>
            {completedCount > 0 && (
              <button
                className="button-clear"
                onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
              >
                Clear completed
              </button>
            )}
          </div>
        )}
        <footer className="footer">
          <p className="footer-text">
            Powered by <span className="footer-brand">Pinecone Academy</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
