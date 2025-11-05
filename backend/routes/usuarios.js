const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Obtener todos los usuarios
router.get('/', (req, res) => {
  const query = 'SELECT * FROM usuarios ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Agregar usuario
router.post('/', (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Faltan datos' });

  const query = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
  db.query(query, [nombre, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nombre, email });
  });
});

// Actualizar usuario
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Faltan datos' });

  const query = 'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?';
  db.query(query, [nombre, email, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: Number(id), nombre, email });
  });
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Usuario eliminado', id: Number(id) });
  });
});

router.get('/login', (req, res) => {
  const { usuario,password } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  db.query(query, [usuario,password], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Usuario eliminado', id: Number(id) });
  });
});

module.exports = router;