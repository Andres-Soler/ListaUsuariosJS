import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import Login from './login';

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
=======
import UserList from './UserList';
import login from './login'

function App() {
  
return (
<div>
<h1>React + MySQL Example UwU</h1>
<UserList />


</div>
);
}

export default App;
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
