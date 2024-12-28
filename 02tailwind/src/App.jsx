import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <div className='bg-slate-600 flex justify-center items-center gap-2 flex-col h-screen'>
      <h1 className='bg-green-300 rounded-lg p-3 text-black w-fit'>Tailwind Card</h1>
      <Card username="Ashish" age='21'/>
      <Card username="niti"/>
    </div>
     
    </>
  )
}

export default App
