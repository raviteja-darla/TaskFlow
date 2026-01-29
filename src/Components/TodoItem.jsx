import React, { useState, useEffect } from 'react'
import { useTodos } from '../context/TodoContext';
import './style.css'

const TodoItem = ({todo}) => {

    const { toggleTodo, deleteTodo, editTodo } = useTodos();

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    
    
    const handleSave = () => {
        if(!editText.trim()) return;
        editTodo(todo.id, editText)
        setIsEditing(false);
    }

    useEffect(() => {
        setEditText(todo.text);
    }, [todo.text]);

    return (
        <div className='todo-list-wrapper'>
            <li className='todo-item'>

                <div className='checkbox-todoItem'>

                    <input 
                        type = "checkbox"
                        checked={todo.completed}
                        onChange = {() => toggleTodo(todo.id)}
                    />
                    
                    {isEditing ? (
                        <input 
                            value = {editText}
                            onChange = {(e) => setEditText(e.target.value)}
                            className='edit-todo'
                        />
                    ) : (
                        <span style={{textDecoration: todo.completed ? "line-through" : "none", 
                                    color: todo.completed ? "grey" : "white",
                                    fontStyle: todo.completed ? "italic" : "none"}}
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
                        onClick = {() => deleteTodo(todo.id)}
                    >Delete</button>
                </div>
            </li>
        </div>
    )
}

export default TodoItem
