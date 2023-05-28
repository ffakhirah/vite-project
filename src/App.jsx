import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'

const DUMMY_TODO = [
  {
    id : 1,
    title : 'Belajar React JS',
    isCompleteda : false
  }
]

function App() {
  const [todos, setTodos] = useState(DUMMY_TODO)
  const [newTodo, setNewTodo] = useState('')

  function addNewTodo() {
    const updatedTodos = [...todos]
    const objTodo = {
      id: nanoid(),
      title: newTodo,
      isCompleted: false
    }

    updatedTodos.push(objTodo)
    setTodos(updatedTodos)
    setNewTodo('')
  }
  return (
    <>
      <h1>Todo App</h1>
      <input 
      type='text' 
      placeholder='Isi Todo disini!' 
      value={newTodo} onChange={event => setNewTodo(event.target.value)} 
      />
      <button onClick={() => addNewTodo()} >Create</button>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
