import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './feedback.css';

const servicesList = [
  { name: 'Room Service', icon: '🛎' },
  { name: 'Housekeeping', icon: '🧹' },
  { name: 'Front Desk', icon: '👨‍💼' },
  { name: 'Spa & Wellness', icon: '💆' },
  { name: 'Dining / Restaurant', icon: '🍽' },
  { name: 'Booking Experience', icon: '📅' },
];

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    servicesUsed: [],
  });

  const toggleService = (serviceName) => {
    setFeedbackData((prev) => {
      const alreadySelected = prev.servicesUsed.includes(serviceName);
      const updatedServices = alreadySelected
        ? prev.servicesUsed.filter((s) => s !== serviceName)
        : [...prev.servicesUsed, serviceName];
      return { ...prev, servicesUsed: updatedServices };
    });
  };

  return (
    <div>
      <NavBar />
      <div className="feedback-container">
        <h2>We Value Your Feedback</h2>
        <p>Select the services you used during your stay:</p>

        <div className="service-cards">
          {servicesList.map(({ name, icon }) => {
            const isSelected = feedbackData.servicesUsed.includes(name);
            return (
              <div key={name}>
                <Link to={`/feedback/${name}`}>
                  <div
                    className={`card ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleService(name)}
                  >
                    <span className="icon">{icon}</span>
                    <span className="label">{name}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {feedbackData.servicesUsed.length > 0 && (
          <div className="next-section">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={feedbackData.name}
              onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedbackData.email}
              onChange={(e) => setFeedbackData({ ...feedbackData, email: e.target.value })}
              required
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
