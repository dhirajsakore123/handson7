import React from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate ,Link} from 'react-router-dom'

const Student = () => {
  const navigate=useNavigate();
  const data=useSelector((state)=>state.Student)
 
 return (

  <div>
  <h1>Students Details</h1>
  <button className='btn1' onClick={()=>navigate('/addnewstudent')}>Add new student</button>
  <div className='table-container'>
  <table className='table'>
      <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Course</th>
      <th>Batch</th>
      <th>Change</th>
      </tr>
      {
        data.map((item,index)=>{
          return(
             <>
              <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                   <td  onClick={()=> navigate('/editstudent',{state:item.id})}> <Link>Edit</Link> </td>
 
              </tr>
              </>
          )
        })
      }
  </table>
  </div>
  </div>
 
  
)
}

export default Student
