import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tasks from './components/Tasks'
import { Route, Routes } from 'react-router-dom'
import Tasks2 from './components/Tasks2'
import Tasks3 from './components/Tasks3'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path='/Task' element={<Tasks2/>}></Route>
        <Route path='/Task/:id' element={<Tasks3/>}></Route>
      </Routes>
    </>
  )
}

export default App
