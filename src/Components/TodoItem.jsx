import React, { useState } from 'react'
import { useTodos } from '../context/TodoContext';
import './style.css'

const TodoItem = ({todo}) => {

    const { onToggleTodo, onDeleteTodo, onEditTodo } = useTodos();

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    
    
    const handleSave = () => {
        if(!editText.trim()) return;
        onEditTodo(todo.id, editText)
        setIsEditing(false);
    }

    return (
        <div className='todo-list-wrapper'>
            <li className='todo-item'>

                <div className='checkbox-todoItem'>

                    <input 
                        type = "checkbox"
                        onChange = {() => onToggleTodo(todo.id)}
                    />
                    
                    {isEditing ? (
                        <input 
                            value = {editText}
                            onChange = {(e) => setEditText(e.target.value)}
                            className='edit-todo'
                        />
                    ) : (
                        <span
                            style = {{textDecoration : todo.completed ? "line-through" : "none"}}   
                        >
                            {todo.text}
                        </span>
                    ) }

                </div>

                <div className='todo-curd-btn'>
                    
                    {isEditing ? (
                        <button onClick = {handleSave}>Save</button>
                    ) : (
                        <button onClick = {() => setIsEditing(true)}>Edit</button>
                    )}
                    
                    <button
                        onClick = {() => onDeleteTodo(todo.id)}
                    >Delete</button>
                </div>
            </li>
        </div>
    )
}

export default TodoItem
