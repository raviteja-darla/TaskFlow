import React from 'react'
import { useTodos } from '../context/TodoContext'
import './style.css'

const TodoFilters = () => {

    const {filter, setFilter, searchText, setSearchText} = useTodos(); 

    // const { clearCompleted } = useTodos();

    const filters = ["all", "active", "completed"];

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
                    {filters.map(type => (
                        <button
                        key={type}
                        className={filter === type ? "active-btn" : ""}
                        onClick={() => setFilter(type)}
                        >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                    {/* <button onClick = {() => clearCompleted("completed")}>Clear Completed</button> */}
                </div>
            </div>
        </div>
    )
}

export default TodoFilters;
