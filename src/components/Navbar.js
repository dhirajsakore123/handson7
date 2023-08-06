import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const mystyle={
    textDecoration:'none',
    fontSize:'2.5vw',
    color:'white'
}
  return (
    <div  className='nav-container'>
      <NavLink to='/' style={mystyle}>Home</NavLink>
      <NavLink to='/student' style={mystyle}>Student</NavLink>
      <NavLink to='/contact' style={mystyle}>contact</NavLink>
    </div>
  )
}

export default Navbar
