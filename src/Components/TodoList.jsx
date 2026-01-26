import TodoItem from './TodoItem'
import { useTodos } from '../context/TodoContext'
import './style.css'

const TodoList = () => {

    const {todos, filter, searchText} = useTodos()

    const filterTodo = todos.filter(todo => {
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true; //All
    })
    .filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div>
            {filterTodo.map(todo => (
                <TodoItem key = {todo.id} todo = {todo}/>
            ))}
        </div>
    )
}

export default TodoList;
