import React, { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { Glyphicon } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [newTodo, setNewTodo] = useState('')
  useEffect(() => {
    fetch('/api/todo')
      .then(res => res.json())
      .then(data => {
        setIsLoading(false)
        setTodos(data)
      })
    console.log("Use Effect")
  }, [])
  const handleSubmit = (event) => {
    fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        todo: newTodo,
        isDone: 'false'
      })

    })
    event.preventDefault()
  }
  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey='0'>
              +
        </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <form onSubmit={handleSubmit}>
                <input type='text' name='todo' placeholder='Enter Todo Here' onChange={handleChange} />
                <Button variant='success' onClick={handleSubmit}>Submit!</Button>
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {!isLoading ? todos.map(todo => <TodoItem key={todo._id} todo={todo.todo} isDone={todo.isDone} id={todo._id}/>) : "loading"}
    </div>
  );
}

export default App;
