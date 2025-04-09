// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Make sure this import is correct
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />

        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
