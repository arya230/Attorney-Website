import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import People from './pages/people';
import Gst from './pages/Practices/gst';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People/>} />
        <Route path="/gst" element={<Gst/>} />
      </Routes>
    </Router>
  );
};

export default App;
