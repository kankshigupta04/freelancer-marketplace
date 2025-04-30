import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css'; // Import the CSS file

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to Freelancer Marketplace</h1>
      <p>Your one-stop solution for freelancing</p>

      <div className="button-group">
        <button onClick={() => navigate('/calculator')}>🧮 Calculator</button>
        <button onClick={() => navigate('/project')}>📋 Post Project</button>
        <button onClick={() => navigate('/freelancer')}>📤 Upload Resume</button>
      </div>
    </div>
  );
}

export default LandingPage;
