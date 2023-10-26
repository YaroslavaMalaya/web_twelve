import React, { useState } from 'react';
import Day from './Day';
import './styles/Week.css';
import DayExpanded from './DayExpanded';
import { days, initialTasks } from './mockData.js';

function Week() {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const [tasks, setTasks] = useState(initialTasks);

  const removeTask = (day, taskToRemove) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day] = updatedTasks[day].filter(task => task.title !== taskToRemove.title);
    setTasks(updatedTasks);
  };

  const addTask = (day, newTask) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day].push(newTask);
    setTasks(updatedTasks);
  };
  
  return (
    <div className="container">
      <h3>WEEEKLY PLANNER</h3>
      <div className="container2">
        <div className="daysContainer">
        {days.map((day, index) => (
            <Day  key={index} day={day} handleDayClick={handleDayClick} selectedDay={selectedDay} tasks={tasks[day]}/>
          ))}
        </div>
        {selectedDay && <DayExpanded tasks={tasks[selectedDay]} selectedDay={selectedDay} removeTask={removeTask} addTask={addTask}/>}
      </div>
    </div>
  );
}

export default Week;
