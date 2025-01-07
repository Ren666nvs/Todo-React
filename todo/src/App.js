import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { task, completed: false }]);
      setTask("");
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
          <button type="submit" className="button-add">
            Add
          </button>
        </form>
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`filter-button ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
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
                  {todo.task}
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
