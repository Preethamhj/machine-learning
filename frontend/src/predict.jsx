import React, { useState } from 'react';
import axios from 'axios';

function Predict() {
  const [formData, setFormData] = useState({
    Attendance: '',
    StudyHours: '',
    Marks: ''
  });

  const [result, setResult] = useState({
    prediction: '',
    probability: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post('http://localhost:5000/predict', formData);
      console.log(response.data);
      setResult({
        ...result,
        prediction: response.data.prediction,
        probability: response.data.probability
      });
    } catch (error) {
      console.error('There was an error!', error);
      alert('Error in prediction');
    }
  };

  // 🎨 Styles
  const containerStyle = {
    textAlign: 'center',
    marginTop: '5%',
    backgroundColor: '#f5f5f5',
    height: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    margin: '30px auto',
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '12px',
    marginTop: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>📊 Prediction Page</h1>
      <form
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <input
          style={inputStyle}
          type="text"
          name="Attendance"
          value={formData.Attendance}
          onChange={(e) =>
            setFormData({ ...formData, Attendance: e.target.value })
          }
          placeholder="Attendance (%)"
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="StudyHours"
          value={formData.StudyHours}
          onChange={(e) =>
            setFormData({ ...formData, StudyHours: e.target.value })
          }
          placeholder="Study Hours"
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="Marks"
          value={formData.Marks}
          onChange={(e) =>
            setFormData({ ...formData, Marks: e.target.value })
          }
          placeholder="Marks"
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Predict
        </button>
      </form>

      <h2 style={{ color: '#333', marginTop: '30px' }}>Prediction Result:</h2>
      <div
        style={{
          marginTop: '10px',
          fontSize: '18px',
          color: '#555',
          backgroundColor: '#fff',
          display: 'inline-block',
          padding: '15px 25px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}
      >
        {result.prediction !== ''
          ? `Predicted: ${result.prediction} | Probability: ${(
              result.probability * 100
            ).toFixed(2)}%`
          : 'No prediction yet'}
      </div>
    </div>
  );
}

export default Predict;
