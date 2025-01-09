import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <Header />
      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
        filter={filter}
      />
      <Footer />
    </div>
  );
};

export default App;
