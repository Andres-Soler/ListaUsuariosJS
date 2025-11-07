const express = require('express');
const router = express.Router();
const db = require('../config/database');

// =======================
// GET all users
// =======================
router.get('/', (req, res) => {
  const query = 'SELECT * FROM usuarios ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// =======================
// ADD a user
// =======================
router.post('/', (req, res) => {
  const { nombre, email, contrasena } = req.body;
  if (!nombre || !email || !contrasena)
    return res.status(400).json({ error: 'Faltan datos' });

  const query = 'INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)';
  db.query(query, [nombre, email, contrasena], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nombre, email });
  });
});

// =======================
// UPDATE a user
// =======================
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email, contrasena } = req.body;
  if (!nombre || !email || !contrasena)
    return res.status(400).json({ error: 'Faltan datos' });

  const query = 'UPDATE usuarios SET nombre = ?, email = ?, contrasena = ? WHERE id = ?';
  db.query(query, [nombre, email, contrasena, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: Number(id), nombre, email });
  });
});

// =======================
// DELETE a user
// =======================
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Usuario eliminado', id: Number(id) });
  });
});

// =======================
// LOGIN
// =======================
router.post('/login', (req, res) => {
  const { email, contrasena } = req.body;
  if (!email || !contrasena)
    return res.status(400).json({ success: false, message: 'Faltan datos' });

  const query = 'SELECT * FROM usuarios WHERE email = ? AND contrasena = ?';
  db.query(query, [email, contrasena], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });

    if (results.length > 0) {
      // Login successful
      res.json({ success: true, user: results[0] });
    } else {
      // Login failed
      res.json({ success: false, message: 'Correo o contraseña incorrectos' });
    }
  });
});

module.exports = router;
