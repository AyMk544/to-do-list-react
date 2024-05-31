import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Todo from './Components/Todo'
import { TodoContextProvider } from './contexts/TodoContext'

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos(prev => [todo, ...prev]);
  }
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id));
  }
  const editTodo = (id, todo) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo));
  }
  const toggleComplete = (id) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }} >
      <Form />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
    </TodoContextProvider>
  )
}

export default App
