import './App.css';
 import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Completed from './pages/Completed';
import ToDo from './pages/ToDo';
import NewTask from './pages/NewTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskComplete = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);

    // Remove the task from the 'tasks' array
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleRemoveAllCompletedTasks = () => {
    setCompletedTasks([]);
  };

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              index
              element={<ToDo tasks={tasks} onTaskComplete={handleTaskComplete} />}
            />
            <Route
              path="/Completed"
              element={
                <Completed
                  completedTasks={completedTasks}
                  onRemoveAllTasks={handleRemoveAllCompletedTasks}
                />
              }
            />
            <Route path="/NewTask" element={<NewTask onAddTask={handleAddTask} />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
