// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
        <Route path="/" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
