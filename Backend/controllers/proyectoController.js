const db = require('../db');
const redis = require('redis');


// Controlador para las operaciones CRUD de la entidad Proyecto

// Obtener todos los proyectos
exports.getAllProyectos = (req, res) => {
    db.query('SELECT * FROM proyecto', (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener los proyectos' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Obtener un proyecto por su ID
exports.getProyectoById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM proyecto WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener el proyecto' });
        } else {
            if (result.length === 0) {
                res.status(404).json({ error: 'Proyecto no encontrado' });
            } else {
                res.status(200).json(result[0]);
            }
        }
    });
};

// Crear un nuevo proyecto
exports.createProyecto = (req, res) => {
    const { nombre_proyecto, sede, año, carrera_id, semestre, lider_id, supervisor_id, observaciones, descripcion, fecha_inicio, fecha_fin, tiempo_dias, avance_proyecto } = req.body;
    db.query('INSERT INTO proyecto (nombre_proyecto, sede, año, carrera_id, semestre, lider_id, supervisor_id, observaciones, descripcion, fecha_inicio, fecha_fin, tiempo_dias, avance_proyecto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre_proyecto, sede, año, carrera_id, semestre, lider_id, supervisor_id, observaciones, descripcion, fecha_inicio, fecha_fin, tiempo_dias, avance_proyecto], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear el proyecto' });
        } else {
            res.status(201).json({ message: 'Proyecto creado exitosamente', id: result.insertId });
        }
    });
};

// Actualizar un proyecto existente
exports.updateProyecto = (req, res) => {
    const id = req.params.id;
    const { nombre_proyecto, sede, año, carrera_id, semestre, lider_id, supervisor_id, observaciones, descripcion, fecha_inicio, fecha_fin, tiempo_dias, avance_proyecto } = req.body;
    db.query('UPDATE proyecto SET nombre_proyecto = ?, sede = ?, año = ?, carrera_id = ?, semestre = ?, lider_id = ?, supervisor_id = ?, observaciones = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, tiempo_dias = ?, avance_proyecto = ? WHERE id = ?', [nombre_proyecto, sede, año, carrera_id, semestre, lider_id, supervisor_id, observaciones, descripcion, fecha_inicio, fecha_fin, tiempo_dias, avance_proyecto, id], (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar el proyecto' });
        } else {
            res.status(200).json({ message: 'Proyecto actualizado exitosamente' });
        }
    });
};

// Eliminar un proyecto
exports.deleteProyecto = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM proyecto WHERE id = ?', id, (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el proyecto' });
        } else {
            res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
        }
    });
};
