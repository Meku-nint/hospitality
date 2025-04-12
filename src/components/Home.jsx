import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <img src='https://kurifturesorts.com/_nuxt/img/Tana.303f00c.webp'alt='the image is not displayed' />
      <p>Your smart resort in the heart of the city</p>
    </div>
  )
}

export default Home;