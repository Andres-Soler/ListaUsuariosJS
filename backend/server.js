const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const mysql = require('mysql2');

const app = express();
=======
const usuariosRoutes = require('./routes/usuarios');

const app = express();

>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
const PORT = 5001;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usuarios_app'
});

db.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err);
  } else {
    console.log('✅ Conectado a MySQL');
  }
});

// 🟢 Endpoint login (usa "contrasena")
app.post('/login', (req, res) => {
  const { email, password } = req.body; // "password" viene del frontend, pero en BD es "contrasena"

  if (!email || !password) {
    return res.json({ success: false, message: 'Faltan datos' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ? AND contrasena = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('🔥 Error MySQL:', err);
      console.error('🧠 Consulta fallida:', query);
      return res.json({ success: false, message: 'Error en la consulta' });
    }

    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false, message: 'Email o contraseña incorrectos' });
    }
  });
});

// 🟢 Endpoint para obtener lista de usuarios
app.get('/api/usuarios', (req, res) => {
  const query = 'SELECT id, nombre, email, telefono, fecha_registro FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error('🔥 Error al obtener usuarios:', err);
      res.json([]);
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
=======
app.use('/api/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
res.json({ message: 'API de Usuarios funcionando correctamente' });
});

app.listen(PORT, () => {
console.log(`🚀 Servidor corriendo en
http://localhost:${PORT}`);
});
>>>>>>> 48421313ca5269b20d86ac969aabdaf48c53113d
