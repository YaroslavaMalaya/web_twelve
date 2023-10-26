import React from 'react';
import NewTaskForm from './NewTaskForm';
import './styles/DayExpanded.css';
import Task from './Task';

function DayExpanded({ selectedDay, tasks = [], removeTask, addTask }) {
  return (
    <div className="containerDE">
      <h3>Day in Details</h3>
      {tasks.length === 0 ? <h3 id="noTask">No tasks planned for {selectedDay}.</h3> 
          : tasks.map((task, index) => (
            <Task key={index} task={task} removeTask={() => removeTask(selectedDay, task)} />
            ))}
      <p id="newTask">Create New Task</p>
      <NewTaskForm selectedDay={selectedDay} addTask={addTask}></NewTaskForm>
    </div>
  );
}

export default DayExpanded;
