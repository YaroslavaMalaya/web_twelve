import React from 'react';
import Task from './Task';
import './styles/Day.css';

function Day({ day, tasks, handleDayClick, selectedDay}) {
  const totalDuration = tasks.reduce((sum, task) => sum + task.duration, 0);

  return (
    <div className={`card ${day === selectedDay ? 'dayActive' : 'day'}`} onClick={() => handleDayClick(day)}>
      <div className="cardHeader">{day}</div>
      <div className="cardBody">
      <p>{tasks.length} task(s), durationh: {totalDuration} mins</p>
        {/* {tasks.map((task, index) => (
          <Task key={index} task={task} removeTask={() => onRemoveTask(task)} />
        ))} */}
      </div>
    </div>
  );
}

export default Day;
