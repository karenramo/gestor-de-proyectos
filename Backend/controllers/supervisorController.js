const db = require('../db');
const redis = require('redis');


// Controlador para las operaciones CRUD de la entidad Supervisor

// Obtener todos los supervisores
exports.getAllSupervisores = (req, res) => {
    db.query('SELECT * FROM supervisor', (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los supervisores' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Obtener un supervisor por su ID
exports.getSupervisorById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM supervisor WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener el supervisor' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Supervisor no encontrado' });
            } else {
                res.status(200).json(result[0]);
            }
        }
    });
};

// Crear un nuevo supervisor
exports.createSupervisor = (req, res) => {
    const { nombre, carrera_id } = req.body;
    db.query('INSERT INTO supervisor (nombre, carrera_id) VALUES (?, ?)', [nombre, carrera_id], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear el supervisor' });
        } else {
            res.status(201).json({ message: 'Supervisor creado exitosamente', id: result.insertId });
        }
    });
};

// Actualizar un supervisor existente
exports.updateSupervisor = (req, res) => {
    const id = req.params.id;
    const { nombre, carrera_id } = req.body;
    db.query('UPDATE supervisor SET nombre = ?, carrera_id = ? WHERE id = ?', [nombre, carrera_id, id], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el supervisor' });
        } else {
            res.status(200).json({ message: 'Supervisor actualizado exitosamente' });
        }
    });
};

// Eliminar un supervisor
exports.deleteSupervisor = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM supervisor WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el supervisor' });
        } else {
            res.status(200).json({ message: 'Supervisor eliminado exitosamente' });
        }
    });
};
