import React, { useState } from 'react'
import './style.css'

const TodoInput = ({onAddTodo}) => {

    const [text, setText] = useState("");
    
    const submitTodo = () => {
        if(!text.trim()) return;

        // Sending userInput to up -> App.jsx
        onAddTodo(text);
        setText("");
    }

    return (
        <div className='userinput-button'>
            <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text" 
            placeholder='What need to be done?' /> 
            <button onClick={submitTodo}>Add New</button>
        </div>
    )
}

export default TodoInput
