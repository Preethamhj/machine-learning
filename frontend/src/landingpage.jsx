import React from 'react';
import images from './assets/images.jpg';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  // 🎨 Styles
  const headerStyle = {
    textAlign: 'center',
    backgroundImage: `url(${images})`,
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textShadow: '2px 2px 6px rgba(0,0,0,0.5)'
  };

  const marqueeStyle = {
    backgroundColor: '#f0f0f0',
    fontSize: '20px',
    fontWeight: '500',
    color: '#333',
    padding: '10px 0'
  };

  const sectionStyle = {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #d0e7ff, #b8d8ff)',
    height: '300px',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

  const buttonStyle = {
    padding: '12px 30px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)'
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={headerStyle}>
        <h1 style={{ marginTop: 200, fontSize: '36px' }}>
          <b>Welcome to Student Performance Analytics</b>
        </h1>
        <p style={{ fontSize: '20px', marginTop: '10px' }}>
          Analyze and predict your academic performance with ease!
        </p>
      </div>

      {/* Marquee */}
      <marquee direction="rtl" style={marqueeStyle}>
        "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
      </marquee>

      {/* Predict Section */}
      <div style={sectionStyle}>
        <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>
          Do you want to predict your performance?
        </h1>
        <button
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.target.style.transform = buttonHoverStyle.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() => navigate('/predict')}
        >
          Follow Me →
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
