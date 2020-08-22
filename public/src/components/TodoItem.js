import React from 'react'
import Button from 'react-bootstrap/Button'

function TodoItem(props){
    const handleDelete = (event) => {
        console.log("delete")
        console.log(props)
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
        // .then(data => data.status === 200 ? )
    }
    return(
        <div>
            <span>
            <h2> Todo Item</h2>
            <Button onClick={handleDelete} variant='danger'>X</Button>
            </span>
            <h3>{props.todo}</h3>
            <h3>isDone: {props.isDone ? "Finished" : "In Progress"}</h3>
        </div>
    )

}

export default TodoItem