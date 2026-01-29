import React, { useState } from 'react'
import {useTodos} from '../context/TodoContext'
import './style.css'

const TodoInput = () => {

    const [text, setText] = useState("");
    
    // Get onAddTodo from Global Context
    const {addTodo} = useTodos();

    const submitTodo = () => {
        if(!text.trim()) return;

        // Sending userInput to up -> App.jsx
        addTodo(text);
        setText("");
    }

    return (
        <div className='userinput-button'>
            <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter") submitTodo();
            }}
            type="text" 
            placeholder='What need to be done?' /> 
            <button onClick={submitTodo} disabled = {!text.trim()}>Add New</button>
        </div>
    )
}

export default TodoInput;
