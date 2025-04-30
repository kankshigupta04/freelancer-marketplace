import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Calc from './Calculator'; // Assuming this is the calculator
import ProjectForm from './Projectform';
import FreelancerForm from './Freelancerform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/project" element={<ProjectForm />} />
        <Route path="/freelancer" element={<FreelancerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
