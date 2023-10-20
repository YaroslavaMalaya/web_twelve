import React from 'react';
import Button from './Button';
import './styles/Task.css';

function Task({ task }) {
  return (
    <div className="mb-2">
      <span>{task.title}</span><br/>
      {task.description}<br/>
      {task.startTime} - {task.endTime}
      <Button text={"Remove"}></Button>
    </div>
  );
}

export default Task;
