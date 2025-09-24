import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './landingpage.jsx'
import Predict from './predict.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </Router>
  )
}

export default App
