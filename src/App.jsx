import React, { useState } from 'react'
import './App.css'
import './Components/style.css'
import Header from './Components/Header'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoFilters from './Components/TodoFilters'

const App = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        // Receiving newTodo from userInput & updated into the todos array 
        setTodos((prev) => [
            ...prev, {
                id: Date.now(),
                text,
                completed: false,
            }
        ]);
    };

    const toggleTodo = (id) => {
        setTodos(prev => 
            prev.map(todo => 
                todo.id === id ? {...todo, completed : !todo.completed} : todo
            )
        )
    }

    const editTodo = (id, newText) => {
        setTodos(prev => 
            prev.map(todo => 
                todo.id === id ?
                 {...todo, text : newText}
                : todo
            )
        )
    }

    const deleteTodo = (id) => {
        setTodos(prev => 
            prev.filter(todo => todo.id !== id)
        )
    }

    const [filter, setFilter] = useState("All")
    const [searchText, setSearchText] = useState("")

    return (
        <div className='todo-app-warpper'>
            <div className='header-input'>
                <Header />
                <TodoInput onAddTodo={addTodo}/>
            </div>

            <TodoFilters 
                filter = {filter}
                setFilter = {setFilter}
                searchText = {searchText}
                setSearchText = {setSearchText}
            />

            <TodoList 
                todos = {todos}
                onToggleTodo = {toggleTodo}
                onDeleteTodo = {deleteTodo} 
                onEditTodo = {editTodo}
                filter = {filter}
                setFilter = {setFilter}
                searchText = {searchText}
            />
        </div>
    )
}

export default App
