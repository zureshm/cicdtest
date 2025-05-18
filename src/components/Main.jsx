import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div style={{border:'2px solid red'}}>
        <h3>This is Main (Wrapper component)</h3>
        <hr />
        <Outlet />
      
    </div>
  )
}

export default Main
