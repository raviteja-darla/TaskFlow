import React from 'react'
import { useTodos } from '../context/TodoContext'
import './style.css'

const TodoFilters = () => {

    const {filter, setFilter, searchText, setSearchText} = useTodos(); 

    return (
        <div >
            <div className='search-filter'>
                <div>
                    <input 
                        className='search-todo-input'
                        type = "text"
                        placeholder= "Search todos..."
                        value = {searchText}
                        onChange = {(e) => setSearchText(e.target.value)}
                    />
                </div>
                
                <div className='todoFilter-btn'>
                    <button onClick = {() => setFilter("all")}>All</button>
                    <button onClick = {() => setFilter("active")}>Active</button>
                    <button onClick = {() => setFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default TodoFilters;
