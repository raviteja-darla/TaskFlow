import React from 'react'
import './style.css'

const TodoFilters = ({filter, setFilter, searchText, setSearchText}) => {
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

export default TodoFilters
