import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  // 1️⃣ Fetch inicial de usuarios
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/usuarios');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 2️⃣ Función para agregar usuario
  const handleAddUser = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    try {
      await axios.post('http://localhost:5001/api/usuarios', { nombre, email });
      setNombre(''); // Limpiar input
      setEmail('');
      fetchUsers(); // 🔄 Recarga la lista de usuarios para mostrar el nuevo
    } catch (err) {
      console.error(err);
    }
  };

  // 3️⃣ Función para actualizar usuario
  const handleUpdate = async (id) => {
    const newName = prompt("Nuevo nombre:");
    const newEmail = prompt("Nuevo email:");
    if (!newName || !newEmail) return;
    try {
      await axios.put(`http://localhost:5001/api/usuarios/${id}`, { nombre: newName, email: newEmail });
      fetchUsers(); // Recarga la lista después de actualizar
    } catch (err) {
      console.error(err);
    }
  };

  // 4️⃣ Función para eliminar usuario
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/usuarios/${id}`);
      fetchUsers(); // Recarga la lista después de eliminar
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      {/* Formulario para agregar usuario */}
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

      {/* Tabla de usuarios */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => handleUpdate(u.id)}>Editar</button>
                <button onClick={() => handleDelete(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
