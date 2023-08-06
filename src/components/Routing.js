import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'


const Routing = () => {
  return (
    <>
    
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/student' element={<Student/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
     </Routes>
    </>
  )
}

export default Routing
