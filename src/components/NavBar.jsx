import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>

       <nav>
        <img src='https://kurifturesorts.com/_nuxt/img/Tana.303f00c.webp'alt='kuriftu logo' />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
       </nav>
    </div>
  )
}
export default NavBar;