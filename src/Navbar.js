import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav> 
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/table'>Table</NavLink>
        <NavLink to='/graph'>Graph</NavLink>
    </nav>
  )
}

export default Navbar;