import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{background:'lime', color:'#ccc', padding:'10px'}}>
        <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
        </ul>
        
        
      
    </div>
  )
}

export default Nav
