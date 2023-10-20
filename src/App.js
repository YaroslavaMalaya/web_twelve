import React from 'react';
import './App.css';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';

function App() {
  return (
    <div className="appContainer">
      <Week></Week>
      <DayExpanded></DayExpanded>
    </div>
  );
}

export default App;
