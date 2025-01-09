import React from "react";

const TaskForm = ({task, setTask, onFormSubmit}) => {
    return (
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

        
    );
};
export default TaskForm;
