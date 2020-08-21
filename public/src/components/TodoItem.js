import React from 'react'

function TodoItem(props){
    return(
        <div>
            <h2> Todo Item</h2>
            <h3>{props.todo}</h3>
            <h3>isDone: {props.isDone ? "Finished" : "In Progress"}</h3>
        </div>
    )

}

export default TodoItem