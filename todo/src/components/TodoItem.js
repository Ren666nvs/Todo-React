import React from 'react';

const TodoItem = ({ todo, index, toggleCompletion, deleteTask }) => {
  return (
    <li className="list-item">
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
      <button className="button-delete" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
