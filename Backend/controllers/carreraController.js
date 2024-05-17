const db = require('../db');


// Controlador para las operaciones CRUD de la entidad Carrera
// Obtener todas las carreras
exports.getAllCarreras = (req, res) => {
    db.query('SELECT * FROM carrera', (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener las carreras' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Obtener una carrera por su ID
exports.getCarreraById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM carrera WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener la carrera' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Carrera no encontrada' });
            } else {
                res.status(200).json(result[0]);
            }
        }
    });
};

// Crear una nueva carrera
exports.createCarrera = (req, res) => {
    const { nombre, codigo } = req.body;
    db.query('INSERT INTO carrera (nombre, codigo) VALUES (?, ?)', [nombre, codigo], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear la carrera' });
        } else {
            res.status(201).json({ message: 'Carrera creada exitosamente', id: result.insertId });
        }
    });
};

// Actualizar una carrera existente
exports.updateCarrera = (req, res) => {
    const id = req.params.id;
    const { nombre, codigo } = req.body;
    db.query('UPDATE carrera SET nombre = ?, codigo = ? WHERE id = ?', [nombre, codigo, id], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar la carrera' });
        } else {
            res.status(200).json({ message: 'Carrera actualizada exitosamente' });
        }
    });
};

// Eliminar una carrera
exports.deleteCarrera = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM carrera WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar la carrera' });
        } else {
            res.status(200).json({ message: 'Carrera eliminada exitosamente' });
        }
    });
};
