import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoItem todo='work out' isDone={true}/>
    </div>
  );
}

export default App;
