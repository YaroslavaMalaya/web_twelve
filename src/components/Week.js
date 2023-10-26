import React, { useState } from 'react';
import Day from './Day';
import './styles/Week.css';
import DayExpanded from './DayExpanded';

function Week() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const [tasks, setTasks] = useState({
    Monday: [{ title: "Task 1", description: "Description 1", startTime: "10:00",  duration: 60 },
            { title: "Task 2", description: "Description 2", startTime: "11:30",  duration: 30 }],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [], 
    Sunday: [],
  });

  const removeTask = (day, taskToRemove) => {
    const updatedTasks = { ...tasks };
    updatedTasks[day] = updatedTasks[day].filter(task => task.title !== taskToRemove.title);
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
        <DayExpanded tasks={tasks[selectedDay]} selectedDay={selectedDay} removeTask={removeTask}/>
      </div>
    </div>
  );
}

export default Week;
