import React from 'react';
import Button from './Button';
import './styles/Task.css';

function Task({ task, removeTask }) {
  function addDurationToStartTime(startTime, duration) {
    const [hours, minutes] = startTime.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes + duration;
      const endHours = Math.floor(totalMinutes / 60);
    const endMinutes = totalMinutes % 60;

    return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
  }

  return (
    <div className="mb-2">
      <span>{task.title}</span><br/>
      {task.description}<br/>
      {task.startTime} - {addDurationToStartTime(task.startTime, task.duration)}
      <Button text={"Remove"} onClick={removeTask}></Button>
    </div>
  );
}

export default Task;
