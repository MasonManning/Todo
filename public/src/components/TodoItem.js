import React from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TodoItem(props) {
    const handleDelete = (event) => {
        fetch('/api/todo/', {
            method: 'delete',
            headers: {
                'Accept': 'Applicaiton/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                id: props.id
            })
        })
            .then(data => data.status === 200 ? props.deleteTodo(props.id) : '')
    }
    const handleChange = (event) => {
        fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                id: props.id,
                todo: props.todo,
                isDone: event.target.checked 
            })
        })
    }
    return (
        <Alert variant='primary' >
            <Row>
                <Col md={{ span: 7 }}>
                    <h3>{props.todo}</h3>
                </Col>
                <Col md="2">
                    <input type="checkbox" defaultChecked={props.isDone} onChange={handleChange} />
                </Col>
                <Col md={{ span: 1, offset: 2 }}>
                    <Button onClick={handleDelete} variant='danger'>X</Button>
                </Col>
            </Row>
        </Alert>
    )

}

export default TodoItem