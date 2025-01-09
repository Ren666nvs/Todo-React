import React from "react";

const TodoList = ({ todos, toggleCompletion, deleteTask, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={todo.completed}
                onChange={() => toggleCompletion(index)}
              />
              <span className="task-text">{todo.task}</span>
            </label>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className="no-tasks">No tasks to show</p>
      )}
    </ul>
  );
};

export default TodoList;
