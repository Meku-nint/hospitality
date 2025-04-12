import React from 'react';
import './about.css';
import NavBar from './NavBar';
const About = () => {
  return (
    <div>
      <NavBar />
    <div className="about-container">
      <h1>About Kuriftu Resort and Hotel</h1>
      
      <section className="about-description">
        <p>
          Welcome to Kuriftu Resort and Hotel, the ultimate getaway for relaxation, adventure, and luxury. 
          Nestled in the heart of the city, we offer exceptional services, world-class amenities, and breathtaking 
          views of nature. Whether you're here for business or leisure, our resort promises a memorable experience.
        </p>
        <p>
          Experience our modern accommodations, exquisite dining, rejuvenating spa treatments, and more. At Kuriftu Resort, 
          every moment is designed to offer the best in comfort, luxury, and recreation. Join us and discover your perfect escape.
        </p>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>If you have any questions or want to book your stay, don't hesitate to contact us!</p>
        <ul>
          <li><strong>Phone:</strong> +251 123 456 789</li>
          <li><strong>Email:</strong> info@kurifturesorts.com</li>
          <li><strong>Address:</strong> Kuriftu Resort, Addis Ababa, Ethiopia</li>
          <li><strong>Website:</strong> <a href="https://kurifturesorts.com" target="_blank" rel="noopener noreferrer">kurifturesorts.com</a></li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default About;