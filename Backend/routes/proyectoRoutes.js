const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Rutas para las operaciones CRUD de la entidad Proyecto
router.get('/', proyectoController.getAllProyectos);
router.get('/:id', proyectoController.getProyectoById);
router.post('/', proyectoController.createProyecto);
router.put('/:id', proyectoController.updateProyecto);
router.delete('/:id', proyectoController.deleteProyecto);

module.exports = router;
