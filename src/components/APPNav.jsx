import React from 'react'
import { NavLink } from 'react-router-dom'

function APPNav () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/"> Products</NavLink>
        </li>
        <li>
          <NavLink to="/Users"> Users</NavLink>
        </li>
        <li>
          <NavLink to="/Verification"> Verification</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default APPNav
