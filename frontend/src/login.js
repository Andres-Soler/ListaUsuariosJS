import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
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

export default Login;