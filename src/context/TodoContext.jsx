import { createContext, useContext, useCallback} from "react";
import useLocalStorage from "../hooks/useLocalStorage";


// Creact Context is as Global Store any component wrapped inside the provider can access this data.
const TodoContext = createContext();

// Create provider component, that holds the Global State & provides data + functions to all childern.
export function TodoProvider({children}) {

    /* ------------- Global State ------------- */

    // This holds all todos (Main Data);
    const [todos, setTodos] = useLocalStorage("todos", []);
    const [filter, setFilter] = useLocalStorage("filter", "all");
    const [searchText, setSearchText] = useLocalStorage("searchText", "");
    
    /* ------------- Action Functions ------------- */

    // Add a new todo this will called when user clicks "Add"
    const addTodo = useCallback((text) => {
        // Receiving newTodo from userInput & updated into the todos array 
        setTodos((prev) => [
            ...prev, {
                id: Date.now(),
                text,
                completed: false,
            }
        ]);
    }, [setTodos]);

    // Toggle Completed state this will called when user clicks task completed
    const toggleTodo = useCallback((id) => {
            setTodos(prev => 
            prev.map(todo => 
                todo.id === id ? {...todo, completed : !todo.completed} : todo
            )
        )
    }, [setTodos]);

    // Edit Todo text this will called when Save button clicked
    const editTodo = (id, newText) => {
        setTodos(prev => 
            prev.map(todo => 
                todo.id === id ?
                {...todo, text : newText}
                : todo
            )
        )
    }

    // Delete a todo this will called when delete button clicked 
    const deleteTodo = useCallback((id) => {
        setTodos(prev => 
            prev.filter(todo => todo.id !== id)
        )
    }, [setTodos]);

    // Clear all Completed Todos
    const clearCompleted = useCallback(() => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    }, [setTodos]);

    // This values object decides, What data & functions are shared globally.
    const values = {
        todos, 
        filter, 
        setFilter, 
        searchText, 
        setSearchText, 
        addTodo, 
        toggleTodo, 
        editTodo, 
        deleteTodo,
        clearCompleted
    }

    // Providing the values to children which is wrapped inside the providier
    return (
        <TodoContext.Provider value = {values}>
            {children}
        </TodoContext.Provider>
    )
};


// Custom Hook which helps to avoid importing useContext + context everywhere.
export const useTodos = () => {
    return useContext(TodoContext);
};