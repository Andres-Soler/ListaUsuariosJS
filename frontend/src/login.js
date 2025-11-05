import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
<<<<<<< HEAD
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
=======
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:5001/login', {
        email,
        password
      });

      if (response.data.success) {
        navigate('/usuarios');
      } else {
        setError(response.data.message);
=======
      // Enviar los datos al backend
      const response = await axios.post('http://localhost:5001/login', {
        usuario,
        contrasena
      });

      // Si el login fue exitoso
      if (response.data.success) {
        // Puedes guardar el rol o token si es necesario
        // localStorage.setItem('rol', response.data.rol);
        navigate('/usuarios'); // Redirige al panel principal
      } else {
        setError('Usuario o contraseña incorrectos');
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
      }
    } catch (err) {
      console.error(err);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
<<<<<<< HEAD
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
=======
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
<<<<<<< HEAD
          value={password}
          onChange={(e) => setPassword(e.target.value)}
=======
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
<<<<<<< HEAD
=======

>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

const styles = {
  container: { maxWidth: 300, margin: '100px auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: 10 },
  input: { padding: 8, fontSize: 16 },
  button: { padding: 10, backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
};

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
