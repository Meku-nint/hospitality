import React, { useState } from 'react';
import './Book.css';
import NavBar from './NavBar';
const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted successfully!');
  };

  return (
    <div>
                <NavBar />
    <div className="book-container">
      <h2>Book Your Stay at Kuriftu Resort</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <div className="date-fields">
          <label>
            Check-In:
            <input 
              type="date" 
              name="checkIn" 
              value={formData.checkIn}
              onChange={handleChange}
              required 
            />
          </label>
          <label>
            Check-Out:
            <input 
              type="date" 
              name="checkOut" 
              value={formData.checkOut}
              onChange={handleChange}
              required 
            />
          </label>
        </div>
        <input 
          type="number" 
          name="guests" 
          min="1" 
          value={formData.guests}
          onChange={handleChange}
          required 
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
    </div>

  );
};

export default Book;
