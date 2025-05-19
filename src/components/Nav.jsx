import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{background:'red', color:'#ccc', padding:'10px'}}>
        <h2>Testing Navbar</h2>
        <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
        </ul>
        
        
      
    </div>
  )
}

export default Nav
