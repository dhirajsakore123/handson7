import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routing/>
    </BrowserRouter>
      
    </>
  )
}

export default App

