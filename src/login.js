import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar error al intentar de nuevo

    try {
      const response = await axios.post('http://localhost:5001/login', {
        email,
        contrasena
      });

      if (response.data.success) {
        // localStorage.setItem('user', JSON.stringify(response.data));

        navigate('/usuarios'); // Redirige al panel
      } else {
        setError(response.data.message || 'Usuario o contraseña incorrectos');
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
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: { maxWidth: 300, margin: '100px auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: 10 },
  input: { padding: 8, fontSize: 16 },
  button: { padding: 10, backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' },
  error: { color: 'red', marginTop: 10 }
};

export default Login;
