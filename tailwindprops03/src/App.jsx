import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
       <Card username="Vikram Singh" btntext="Click me" />
       <Card username= "kunwar singh"/>
    </>
  )
}

export default App;