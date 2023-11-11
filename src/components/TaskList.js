import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, selectedCategory, onDelete }) => {
  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <ul>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;

