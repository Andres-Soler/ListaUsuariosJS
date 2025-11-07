import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import Login from './login';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <h1>React + MySQL Example UwU</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usuarios" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}






export default App;

