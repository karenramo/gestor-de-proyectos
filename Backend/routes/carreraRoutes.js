const express = require('express');
const router = express.Router();
const carreraController = require('../controllers/carreraController');

// Rutas para las operaciones CRUD de la entidad Carrera
router.get('/', carreraController.getAllCarreras);
router.get('/:id', carreraController.getCarreraById);
router.post('/', carreraController.createCarrera);
router.put('/:id', carreraController.updateCarrera);
router.delete('/:id', carreraController.deleteCarrera);

module.exports = router;
