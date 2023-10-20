import Button from './Button';
import React from 'react';
import './styles/NewTaskForm.css';

function NewTaskForm() {
  return (
    <form>
      <div className="container3">
        <label className="formLabel">Task</label>
        <input type="text" className="form-control" />
      </div>
      <div className="container3">
        <label className="formLabel">Time</label>
        <input type="time" className="form-control" />
      </div>
      <div className="container3">
        <label className="formLabel">Duration (in minutes)</label>
        <input type="number" className="form-control" />
      </div>
      <Button text="Add Task"></Button>
    </form>
  );
}

export default NewTaskForm;
