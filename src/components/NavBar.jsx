import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; // Make sure to import your CSS file

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src='https://kurifturesorts.com/_nuxt/img/Tana.303f00c.webp' alt='kuriftu logo' />
        </div>
        <div className="nav-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/feedback" className={({ isActive }) => isActive ? "active" : ""}>Feedback</NavLink>
          <NavLink to="/book" className={({ isActive }) => isActive ? "active" : ""}>Book</NavLink>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;