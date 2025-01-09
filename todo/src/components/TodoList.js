import React from "react";

const TodoList = ({ todos, toggleCompletion, deleteTask, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(index)}
              />
              {todo.task}
            </label>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </ul>
  );
};

export default TodoList;
