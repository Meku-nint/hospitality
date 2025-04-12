import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './service.css';
import NavBar from './NavBar';
const serviceQuestions = {
  'Room Service': [
    'How satisfied were you with the food quality?',
    'Was the room service timely?',
    'How would you rate the presentation of the food?',
  ],
  'Housekeeping': [
    'How satisfied were you with the cleanliness of your room?',
    'How was the lighting in your room?',
    'How would you rate the comfort of the bed?',
  ],
  'Front Desk': [
    'How helpful was the front desk staff?',
    'Was the check-in process smooth?',
    'How satisfied were you with the response time?',
  ],
  'Spa & Wellness': [
    'How would you rate the quality of the spa treatments?',
    'Was the spa environment relaxing?',
    'How satisfied were you with the staff professionalism?',
  ],
  'Dining / Restaurant': [
    'How satisfied were you with the food quality?',
    'How would you rate the ambiance of the restaurant?',
    'Was the service speed satisfactory?',
  ],
  'Booking Experience': [
    'How easy was the booking process?',
    'How satisfied were you with the booking system?',
    'Would you recommend our booking experience to others?',
  ],
};

const ServiceFeedback = () => {
  const { serviceName } = useParams();
  const [feedbackData, setFeedbackData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const initialFeedback = serviceQuestions[serviceName]?.reduce((acc, question) => {
      acc[question] = '';
      return acc;
    }, {});
    setFeedbackData(initialFeedback || {});
    document.title = `Feedback for ${serviceName}`;
  }, [serviceName]);

  const handleChange = (question, value) => {
    setFeedbackData((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted for', serviceName, feedbackData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmitted(true);
  };
  const questions = serviceQuestions[serviceName] || [];

  return (
    <div>
      <NavBar />
      <div className="feedback-container">
        <h2>Provide Feedback for {serviceName}</h2>
        
        {submitted ? (
          <div className="thank-you-message">
            <h3>Thank you for your feedback!</h3>
            <p>Your feedback helps us improve our services.</p>
          </div>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={index} className="feedback-question">
                <label>{question}</label>
                <div className="rating-options">
                  {['Not Satisfied', 'Medium', 'Satisfied'].map((rating, i) => (
                    <label key={i} className="radio-label">
                      <input
                        type="radio"
                        name={question}
                        value={rating}
                        checked={feedbackData[question] === rating}
                        onChange={() => handleChange(question, rating)}
                        required
                      />
                      {rating}
                    </label>
                  ))}
                </div>
              </div>
            ))}
         <textarea className='feedback-textarea' placeholder='Write your feedback (optional)'></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        )}
      </div>
      <div className={`popup-overlay ${showPopup ? 'active' : ''}`}>
        <div className="popup-content">
          <h3>Thank You!</h3>
          <p>Your feedback for {serviceName} has been submitted successfully.</p>
          <button className="popup-close" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeedback;
