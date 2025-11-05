import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import UserList from './UserList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-500 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/usuarios" element={<UserListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

// Contenedor para Login
function LoginContainer() {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg w-96">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Login</h1>
      <Login />
    </div>
  );
}

// Contenedor para UserList
function UserListContainer() {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-3/5">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Usuarios</h1>
      <UserList />
    </div>
  );
}

export default App;
