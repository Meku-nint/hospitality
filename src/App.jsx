import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Book from './components/Book';
import About from './components/About';
import Feedback from './components/Feedback';
import ServiceFeedback from './components/ServiceFeedback';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/book" element={<Book />} />
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/feedback/:serviceName" element={<ServiceFeedback />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App