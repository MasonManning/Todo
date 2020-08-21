import React, {useEffect, useState} from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('/api/todo')
    .then(res => res.json())
    .then(data => {
      setIsLoading(false)
      setTodos(data)
    })
    console.log("Use Effect")
  }, [])
  return (
    <div className="App">
      <h1>Todo App</h1>
      <h1>{!isLoading ? "Completed" :  "Lading..."}</h1>
      {!isLoading ? todos.map(todo=> <TodoItem key={todo._id} todo={todo.todo} isDone={todo.isDone}/>): "loading"}
      <TodoItem todo='work out' isDone={true}/>
    </div>
  );
}

export default App;
