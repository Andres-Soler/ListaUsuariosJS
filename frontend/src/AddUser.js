import React, { useState } from 'react';
import axios from 'axios';

function AddUser({ onUserAdded }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/usuarios', { nombre, email });
      setNombre('');
      setEmail('');
      onUserAdded(); // Notify parent to refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleAddUser} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Agregar Usuario</button>
    </form>
  );
}

export default AddUser;
