import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { TodoProvider } from "./context/TodoContext";

createRoot(document.getElementById('root')).render(
    // Wrapping App with TodoProvidier. Now entire app can access global todo data
    <TodoProvider>
        <App />
    </TodoProvider>
)
