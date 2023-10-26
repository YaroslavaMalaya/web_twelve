import Button from './Button';
import React, { useState } from 'react';
import './styles/NewTaskForm.css';

function NewTaskForm({ selectedDay, addTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (submit) => {
    submit.preventDefault();
    addTask(selectedDay, {
      title: taskTitle,
      description: description,
      startTime: startTime,
      duration: parseInt(duration)
    });
    setTaskTitle("");
    setStartTime("");
    setDuration("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container3">
        <label className="formLabel">Task title</label>
        <input type="text" className="form-control" value={taskTitle} onChange={(submit) => setTaskTitle(submit.target.value)} />
      </div>
      <div className="container3">
        <label className="formLabel">Description</label>
        <input type="text" className="form-control" value={description} onChange={(submit) => setDescription(submit.target.value)} />
      </div>
      <div className="container3">
        <label className="formLabel">Time</label>
        <input type="time" className="form-control" value={startTime} onChange={(submit) => setStartTime(submit.target.value)} />
      </div>
      <div className="container3">
        <label className="formLabel">Duration (in minutes)</label>
        <input type="number" className="form-control" value={duration} onChange={(submit) => setDuration(submit.target.value)} />
      </div>
      <Button text="Add Task" type="submit"></Button>
    </form>
  );
}


export default NewTaskForm;
