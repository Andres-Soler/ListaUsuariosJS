import React from 'react';
import axios from 'axios';

function DeleteUser({ userId, onUserDeleted }) {
  const handleDelete = async () => {
    if (!window.confirm("¿Seguro que quieres eliminar este usuario?")) return;

    try {
      await axios.delete(`http://localhost:5001/api/usuarios/${userId}`);
      onUserDeleted(); // Notify parent to refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleDelete}>Eliminar</button>;
}

export default DeleteUser;
