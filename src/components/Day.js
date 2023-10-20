import React from 'react';
import Task from './Task';
import './styles/Day.css';

function Day({ day }) {
  const tasks = [];

  return (
    <div className="card">
      <div className="cardHeader">{day}</div>
      <div className="cardBody">
        {tasks.map((task, index) => (
          <Task key={index} task={task}></Task>
        ))}
      </div>
    </div>
  );
}

export default Day;
