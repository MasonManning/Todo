import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function TodoItem(props) {
    const [editFlag, setEditFlag] = useState(false)
    const [editTodo, setEditTodo] = useState(props.todo)
    const HIDE = {display: "none"} 
    const SHOW = {display: "block"} 
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
    const handleEdit = (event) => {
        console.log(editFlag)
        setEditFlag(ps => !ps)
    }
    const handleEditChange = (event) => {
        console.log(editTodo)

    }
    return (
        <Alert variant='primary' >
            <Row>
                <Col md={{span:1}}>
                    <Button onClick={handleEdit}>Edit</Button>
                </Col>
                <Col md={{ span: 6 }} style={editFlag ? SHOW : HIDE}>
                    <input type="text" value={editTodo} onChange={handleEditChange}/>
                </Col>
                <Col md={{ span: 6 }} style={editFlag ? HIDE : SHOW}>
                    <h3>{props.todo}</h3>
                </Col>
                <Col md="2" >
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