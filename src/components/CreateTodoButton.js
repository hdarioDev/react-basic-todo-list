import React from 'react'

function CreateTodoButton() {

    const oncClickButton = (sms) => {
        alert(sms)
    }

    return (
        <div className="container-button-create">
            <button className="button-create"
                onClick={() => oncClickButton('hello')}
            >
                +
            </button>
        </div>
    )
}

export { CreateTodoButton }