import React from 'react'
import TodoItem from './TodoItem'
import './style.css'

const TodoList = ({todos, onToggleTodo, onDeleteTodo, onEditTodo}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem 
                    key = {todo.id}
                    todo = {todo}
                    onToggleTodo = {onToggleTodo}
                    onDeleteTodo = {onDeleteTodo}
                    onEditTodo = {onEditTodo}
                />
            ))}
        </div>
    )
}

export default TodoList
