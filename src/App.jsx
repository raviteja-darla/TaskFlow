import './App.css'
import './Components/style.css'
import Header from './Components/Header'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoFilters from './Components/TodoFilters'


const App = () => {

    return (
        <div className='todo-app-warpper'>
            <div className='header-input'>
                <Header />
                <TodoInput/>
            </div>
            <TodoFilters/>
            <TodoList/>
        </div>
    )
}

export default App
