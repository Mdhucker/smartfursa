import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tz_jobs from './pages/Tz_jobs';
import All_jobs from './pages/All_jobs';
import Post from './pages/Post';
import Login from './pages/Login';
import Why_sfursa from './pages/Why_sfursa';
import Results from './pages/Results';
import Tenders from './pages/Tenders';








function App() {


  
  return (
    <Router basename="/smartfursa">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Tz_jobs" element={<Tz_jobs/>} />
        <Route path="/All_jobs" element={<All_jobs/>} />
        <Route path="/Post" element={<Post/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Why_sfursa" element={<Why_sfursa/>} />
        <Route path="/Results" element={<Results/>} />
        <Route path="/Tenders" element={<Tenders/>} />






        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
