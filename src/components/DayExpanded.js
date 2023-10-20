import React from 'react';
import NewTaskForm from './NewTaskForm';
import './styles/DayExpanded.css';

function DayExpanded() {
  return (
    <div className="container mt-5">
      <h3>Day in Details</h3>
      <NewTaskForm></NewTaskForm>
    </div>
  );
}

export default DayExpanded;
