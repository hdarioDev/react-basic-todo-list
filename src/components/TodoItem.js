import React from 'react'


function TodoItem(props) {
    return (
        <li className="todoitem">
            <span className={`todoitem--list-title ${props.completed && 'active-todo'}`}>✓</span>
            <p className={`todoitem--list-text ${props.completed && 'active-todo-text'}`} >{props.text}</p>
            <span className="todoitem--button-delete"> X</span>
        </li>
    )
}

export { TodoItem }
