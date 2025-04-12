import React, { useEffect, useState } from "react";
import "./home.css";
import NavBar from "./NavBar";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [feedbackQuestion, setFeedbackQuestion] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const currentHour = new Date().getHours();
  useEffect(() => {
    if (currentHour >= 18 || currentHour < 6) {
      setFeedbackQuestion("How was your dinner experience?");
    } else if (currentHour >= 6 && currentHour < 12) {
      setFeedbackQuestion("How was your breakfast this morning?");
    } else {
      setFeedbackQuestion("How was our service still ?");
    }
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
      <div className="hero-section" style={{content:"cover"}}>
        <img className="hero-image" style={{ width: "100%", height: "800px" }}
          src="https://kurifturesorts.com/_nuxt/img/Tana.303f00c.webp"
          alt="Kuriftu Resorts"
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
                  <h3 className="popup-title"style={{color: "#3498db"}}>We Value Your Opinion</h3>
                  <p style={{color: "white"}}>{feedbackQuestion}</p>
                  <div className="text-button">
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Share your experience with us..."
                    rows="3"
                  />
                  <button
                    onClick={handleFeedbackSubmit}
                    disabled={!feedbackText.trim()}
                    className="submit-btn"
                  >
                    send
                  </button>
                </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        <p style={{color: "white"}}>&copy; {new Date().getFullYear()} Kuriftu Resorts</p>
      </footer>
    </div>
  );
};
export default Home;