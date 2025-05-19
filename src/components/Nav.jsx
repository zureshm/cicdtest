import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{background:'gold', color:'black', padding:'10px'}}>
        <h3>Navigation Main</h3>
        <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
        </ul>
        
        
      
    </div>
  )
}

export default Nav
