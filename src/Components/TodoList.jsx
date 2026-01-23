import React from 'react'
import TodoItem from './TodoItem'
import './style.css'

const TodoList = ({todos, onToggleTodo, onDeleteTodo, onEditTodo, filter, searchText}) => {0

    const filterTodo = todos.filter(todo => {
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true; //All
    })
    .filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div>
            {filterTodo.map(todo => (
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
