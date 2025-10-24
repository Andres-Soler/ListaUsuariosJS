const express = require('express');
const router = express.Router();
const db = require('../config/database');

// GET todos los usuarios
router.get('/', (req, res) => {
  const query = 'SELECT * FROM usuarios ORDER BY id DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      return res.status(500).json({ error: 'Error al obtener usuarios', details: err.message });
    }
    res.json(results);
  });
});

// POST agregar usuario
router.post('/', (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Faltan datos' });

  const query = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
  db.query(query, [nombre, email], (err, result) => {
    if (err) {
      console.error('Error al agregar usuario:', err);
      return res.status(500).json({ error: 'Error al agregar usuario', details: err.message });
    }

    // Traer el usuario recién creado
    db.query('SELECT * FROM usuarios WHERE id = ?', [result.insertId], (err, user) => {
      if (err) {
        console.error('Error al obtener usuario:', err);
        return res.status(500).json({ error: 'Error al obtener usuario', details: err.message });
      }
      res.json(user[0]);
    });
  });
});

// PUT actualizar usuario
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  const query = 'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?';

  db.query(query, [nombre, email, id], (err) => {
    if (err) {
      console.error('Error al actualizar usuario:', err);
      return res.status(500).json({ error: 'Error al actualizar usuario', details: err.message });
    }

    // Traer el usuario actualizado
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, user) => {
      if (err) {
        console.error('Error al obtener usuario:', err);
        return res.status(500).json({ error: 'Error al obtener usuario', details: err.message });
      }
      res.json(user[0]);
    });
  });
});

// DELETE usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';

  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error al eliminar usuario:', err);
      return res.status(500).json({ error: 'Error al eliminar usuario', details: err.message });
    }
    res.json({ success: true });
  });
});

module.exports = router;
