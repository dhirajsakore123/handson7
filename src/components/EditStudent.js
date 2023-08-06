import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditStudent1 } from './StudentSlice'

const EditStudent = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const data=useLocation()
const studentId=data.state
const stdData=useSelector((state)=>state.Student.filter((item)=>item.id===studentId))

const{Name,Age,Batch,Course}=stdData[0];


const[newName,setName]=useState(Name)
const[newAge,setAge]=useState(Age)
const[newBatch,setBatch]=useState(Batch)
const[newCourse,setCourse]=useState(Course)
const handelClick=()=>{
dispatch(EditStudent1({
  id:studentId,
  newName,
  newAge,
  newBatch,
  newCourse,
}))
navigate('/student')
}
    return (
     
        <div>
           <h1>edit</h1> 
         <>
        <form>
          <div className='addstudent-container'>
          <input type='text'  id='name' name='Name' value={newName} onChange={(e)=>setName(e.target.value)}/>
          <input type='number'  id='age' name='Age' value={newAge} onChange={(e)=>setAge(e.target.value)}/>
          <input type='text'  id='course' name='Course' value={newCourse} onChange={(e)=>setCourse(e.target.value)}/>
          <input type='text'  id='batch' name='Batch'value={newBatch}onChange={(e)=>setBatch(e.target.value)}/>
          </div>
          <div className='btn-container'>
          <button type='button' className='btn2' onClick={handelClick}>Update</button>
          <button type='button' className='btn2 btn3'>Cancel</button>
          </div>
        </form>  
        </>
        </div>
      )
}

export default EditStudent
