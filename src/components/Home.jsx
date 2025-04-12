import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./home.css";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [feedbackQuestion, setFeedbackQuestion] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const currentHour = new Date().getHours();

  // Set popup question based on time of day
  useEffect(() => {
    if (currentHour >= 18 || currentHour < 6) {
      setFeedbackQuestion("How was your dinner experience?");
    } else if (currentHour >= 6 && currentHour < 12) {
      setFeedbackQuestion("How was your breakfast this morning?");
    } else {
      setFeedbackQuestion("How was your lunch today?");
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentHour]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleFeedbackSubmit = () => {
    if (feedbackText.trim() === "") return;

    console.log("Feedback submitted:", feedbackText);
    setShowThankYouMessage(true);
    setFeedbackText("");

    setTimeout(() => {
      setShowThankYouMessage(false);
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div>
      <NavBar />
      <div className="hero-section">
        <img
          src="https://kurifturesorts.com/_nuxt/img/Tana.303f00c.webp"
          alt="Kuriftu Resorts"
          className="hero-image"
        />  
      </div>
      {showPopup && (
        <div
          className={`feedback-popup-container ${showPopup ? "visible" : ""}`}
        >
          <div className="feedback-popup">
            <button className="popup-close-btn" onClick={closePopup}>
              &times;
            </button>

            {showThankYouMessage ? (
              <div className="popup-thankyou">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#4BB543"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3>Thank You!</h3>
                <p>We appreciate your feedback</p>
              </div>
            ) : (
              <>
                <div className="popup-header">
                  <h3>We Value Your Opinion</h3>
                  <p>{feedbackQuestion}</p>
                </div>
                <div className="popup-body">
                  <textarea
                    style={{ width: "90%" }}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Share your experience with us..."
                    rows="3"
                  />
                </div>
                <div className="popup-actions">
                  <button
                    onClick={handleFeedbackSubmit}
                    disabled={!feedbackText.trim()}
                    className="submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Kuriftu Resorts</p>
      </footer>
    </div>
  );
};
export default Home;
