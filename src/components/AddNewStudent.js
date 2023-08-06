import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AddStudent } from './StudentSlice';


const AddNewStudent = () => {
    const studentList=useSelector((state)=>state.Student)
    const navigate=useNavigate();
   const dispatch=useDispatch()
    const [isMobile,setIsMobile]=useState(false)
    const [isMobile1,setIsMobile1]=useState(false)
    const [isMobile2,setIsMobile2]=useState(false)
    const [isMobile3,setIsMobile3]=useState(false)
    
    const [Name,setName]=useState('')
    const [Age,setAge]=useState('')
    const [Course,setCourse]=useState('')
    const [Batch,setBatch]=useState('')
   
  
    const handelClick=()=>{
      dispatch(AddStudent({
        id:studentList.length+1,
        Name,
        Age,
        Batch,
        Course,

      }))


        navigate('/student')
        setAge('')
        setName('')
        setCourse('')
        setBatch('')
    }

  return (
    <div className='addstu-parent'>
    <form>
      <div className='addstudent-container'>
        <div className='input-element'>
        <input type='text'  id='name' name='Name' value={Name} onChange={(e)=>setName(e.target.value)} onClick={()=>{setIsMobile(true)}}/>
          <span className={isMobile?'spanelement1':'spanelement'}>Name</span>
      </div>
      <div className='input-element'>
      <input type='number'  id='age' name='Age'  value={Age} onChange={(e)=>setAge(e.target.value)} onClick={()=>{setIsMobile1(true)}} />
      <span className={isMobile1?'spanelement1':'spanelement'}>Age</span>
      </div>
      <div className='input-element'>
      <input type='text'  id='course' name='Course'  value={Course} onChange={(e)=>setCourse(e.target.value)} onClick={()=>{setIsMobile2(true)}}/>
      <span className={isMobile2?'spanelement1':'spanelement'}>Course</span>
      </div>
      <div className='input-element'>
      <input type='text' id='batch' name='Batch'  value={Batch} onChange={(e)=>setBatch(e.target.value)} onClick={()=>{setIsMobile3(true)}} />
      <span className={isMobile3?'spanelement1':'spanelement'}>Batch</span>
      </div>
      
      </div>
      <div className='btn-container'>
      <button type='button'onClick={handelClick} className='btn2'>Submit</button>
      <button type='button'onClick={()=>{ navigate('/student')}} className='btn2 btn3'>Cancel</button>
      </div>
    </form>  
    </div>
  )
}

export default AddNewStudent
