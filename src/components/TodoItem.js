import React from 'react'


function TodoItem(props) {
    const onComplete = () => {
        alert('completaste ' + props.text)
    }
    const onDelete = () => {
        alert('boorar ' + props.text)
    }
    return (
        <li className="todoitem">
            <span className={`todoitem--list-title ${props.completed && 'active-todo'}`}
                onClick={onComplete}
            >
                ✓
            </span>
            <p className={`todoitem--list-text ${props.completed && 'active-todo-text'}`} >{props.text}</p>
            <span className="todoitem--button-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }
