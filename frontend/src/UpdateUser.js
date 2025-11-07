import React from 'react';
import axios from 'axios';

function UpdateUser({ userId, onUserUpdated }) {
  const handleUpdate = async () => {
    const newName = prompt("Nuevo nombre:");
    const newEmail = prompt("Nuevo email:");
    if (!newName || !newEmail) return;

    try {
      await axios.put(`http://localhost:5001/api/usuarios/${userId}`, {
        nombre: newName,
        email: newEmail
      });
      onUserUpdated(); // Notify parent to refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleUpdate}>Editar</button>;
}

export default UpdateUser;
