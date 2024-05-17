const db = require('../db');
const redis = require('redis');


// Controlador para las operaciones CRUD de la entidad Persona

// Obtener todas las personas
exports.getAllPersonas = (req, res) => {
    db.query('SELECT * FROM persona', (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las personas' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Obtener una persona por su ID
exports.getPersonaById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM persona WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la persona' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Persona no encontrada' });
            } else {
                res.status(200).json(result[0]);
            }
        }
    });
};

// Crear una nueva persona
exports.createPersona = (req, res) => {
    const { nombre, carrera_id, semestre } = req.body;
    db.query('INSERT INTO persona (nombre, carrera_id, semestre) VALUES (?, ?, ?)', [nombre, carrera_id, semestre], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear la persona' });
        } else {
            res.status(201).json({ message: 'Persona creada exitosamente', id: result.insertId });
        }
    });
};

// Actualizar una persona existente
exports.updatePersona = (req, res) => {
    const id = req.params.id;
    const { nombre, carrera_id, semestre } = req.body;
    db.query('UPDATE persona SET nombre = ?, carrera_id = ?, semestre = ? WHERE id = ?', [nombre, carrera_id, semestre, id], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la persona' });
        } else {
            res.status(200).json({ message: 'Persona actualizada exitosamente' });
        }
    });
};

// Eliminar una persona
exports.deletePersona = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM persona WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la persona' });
        } else {
            res.status(200).json({ message: 'Persona eliminada exitosamente' });
        }
    });
};
