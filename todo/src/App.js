import React, { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Task нэмэх үйлдэл
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      setTask('');
    }
  };

  // Task-ийн гүйцэтгэлийг өөрчлөх үйлдэл
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Task устгах үйлдэл
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Шүүлтүүрт тохирсон task-уудыг шүүх
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  // Гүйцэтгэсэн болон нийт task-уудын тоо
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
          {['all', 'active', 'completed'].map((status) => (
            <button
              key={status}
              className={`filter-button ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        {filteredTodos.length === 0 && (
          <p className="empty-message">No tasks yet. Add one above!</p>
        )}
        <ul className="list">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompletion={toggleCompletion}
              deleteTask={deleteTask}
            />
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
