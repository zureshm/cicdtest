import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{background:'teal', color:'#ccc', padding:'10px'}}>
        <h3>Nvigation Staging</h3>
        <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/userlist'>User List</Link></li>
        </ul>
        
        
      
    </div>
  )
}

export default Nav
