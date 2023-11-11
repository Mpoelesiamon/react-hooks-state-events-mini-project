import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

const App = () => {
  const TASKS = [
    { id: 1, text: 'Task 1', category: 'Work' },
    { id: 2, text: 'Task 2', category: 'Personal' },
    
  ];

  const CATEGORIES = ['All', 'Work', 'Personal'];

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (text, category) => {
    const newTask = { id: tasks.length + 1, text, category };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List App</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDelete={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== 'All')} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;

