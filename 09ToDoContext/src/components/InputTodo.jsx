import React, { useState } from 'react'
import { useTodo } from '../context';

function InputTodo() {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodo();

  const add = (e) => {
    e.preventDefault()

    if (!todo) return

    addTodo({ todo, completed: false})
    setTodo("")
  } 

  return (
    <>
        <form className='flex' onSubmit={add}>
          <input 
          type="text" 
          className='bg-white w-full p-2 rounded-l-md outline-none'
          placeholder='Your Task'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          />

          <button type='submit' className='bg-blue-500 text-white px-2 rounded-r-md transition-all hover:bg-blue-600'>Add</button>
        </form>
    </>
  )
}

export default InputTodo
