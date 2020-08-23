import React, { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      // .then(res => res.status === 200 ? console.log(res) : console.log("Fail"))
      .then(res => res.status === 200 ? setTodos(ps => ([...ps, { todo: newTodo, isDone: false, id: res.id }])) : console.log("Fail"))
    event.preventDefault()
  }
  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }
  const updateTodo = (todo) => {
    setTodos(ps => ([...ps, todo]))
  }
  const deleteTodo = (id) => {
    console.log("Deleted Item Id is: " + id)
    console.log(todos)
    setTodos(ps => (ps.filter(i => i._id !== id)))
    console.log(todos)
  }
  return (
    <div className="App">
      <Container>
        <Row className='justify-content-md-center'>
          <Col md="auto">
            <h1>Todo App</h1>
          </Col>
          <Col md="auto">
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
          </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md={{span:6, }}>
        {!isLoading ? todos.map(todo => <TodoItem key={todo._id} todo={todo.todo} isDone={todo.isDone} id={todo._id} deleteTodo={deleteTodo} />) : "loading"}
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
