import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li>
      {task.text} - {task.category}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;

