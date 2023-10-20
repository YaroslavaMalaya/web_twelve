import React from 'react';
import Day from './Day';
import './styles/Week.css';

function Week() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="container">
      <p>WEEEKLY PLANNER</p>
      <div className="daysContainer">
        {days.map((day, index) => (
          <Day key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default Week;
