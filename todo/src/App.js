// import React, {useState} from "react";
// import Header from "./components/Header";
// import Form from "./components/Form";
// import "./App.css";

// const App = () => {

//     const[input, setInput] = useState("");
//     const[todos, setTodos] = useState([]);
//     return (
//     <div className="container">
// <div className="app-wrapper">
// <div>
//     <Header/>
//    </div>
//    <div>
//     <Form 
//     input={input}
//     setInput={setInput}
//     todos={setTodos}
//     setTodos={setTodos}
//     />
//    </div>
//    </div>
//    </div>
//    );
// };


// export default App;
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

  // Filtering todos based on the filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
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
        <ul className="list">
          {filteredTodos.map((todo, index) => (
            <li
              className={`list-item ${todo.completed ? "completed" : ""}`}
              key={index}
            >
              <span onClick={() => toggleCompletion(index)}>{todo.task}</span>
              <button
                className="button-delete"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="task-summary">
          <span className="task-count">{`${completedCount} of ${totalCount} tasks completed`}</span>
          <button className="button-clear" onClick={() => setTodos(todos.filter(todo => !todo.completed))}>
            Clear completed
          </button>
        </div>
        <footer className="footer">
          <p className="footer-text">Powered by <span className="footer-brand">Pinecone Academy</span></p>
        </footer>
      </div>
    </div>
  );
};

export default App;
