import { useMemo } from 'react';
import TodoItem from './TodoItem'
import { useTodos } from '../context/TodoContext'
import './style.css'

const TodoList = () => {

    const {todos, filter, searchText} = useTodos()

    const filterTodo = useMemo(() => {
        return todos.filter(todo => {
            if(filter === "active") return !todo.completed;
            if(filter === "completed") return todo.completed;
            return true; //All
        })
        .filter(todo => 
            todo.text.toLowerCase().includes(searchText.toLowerCase())
        );

    }, [todos,filter,searchText]);
    
    if (filterTodo.length === 0) {
        if (filter === "active") {
            return <p className='no-items'>No Active Todos Found 📝</p>;
        }

        if (filter === "completed") {
            return <p className='no-items'>No Completed Todos Found 📝</p>;
        }

        return <p className='no-items'>No Todos Found 📝</p>;
    }

    


    return (
        <div>
            {filterTodo.map(todo => (
                <TodoItem key = {todo.id} todo = {todo}/>
            ))}
        </div>
    )
}

export default TodoList;
