import React, { useState } from 'react'
import css from './App.css'

function App() {
  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState('');

  function handleChange(e){
    setInput(e.target.value);
  }
  function newTask(){
    setTodos([...todos,input]);
    setInput('');
  }
  function deleteFun(index){
    const newTodo = [...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
  }


  return (
    <>
    <div className='main'>
      <input type='text' value={input} onChange={handleChange}/><br/>
      <button onClick={newTask}>Add task</button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>
            {todo}
            <button onClick={deleteFun}>Delete</button>
          </li>
          
        ))}
      </ul>

    </div>
    </>
  )
}

export default App