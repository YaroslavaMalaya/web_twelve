import React from 'react';
import NewTaskForm from './NewTaskForm';
import './styles/DayExpanded.css';
import Task from './Task';

function DayExpanded({ selectedDay, tasks = [], removeTask }) {
  return (
    <div className="containerDE">
      <h3>Day in Details</h3>
      {tasks.map((task, index) => (
          <Task key={index} task={task} removeTask={() => removeTask(selectedDay, task)} />
      ))}
      <NewTaskForm></NewTaskForm>
    </div>
  );
}

export default DayExpanded;
