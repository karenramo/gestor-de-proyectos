const express = require('express');
const router = express.Router();
const supervisorController = require('../controllers/supervisorController');

// Rutas para las operaciones CRUD de la entidad Supervisor
router.get('/', supervisorController.getAllSupervisores);
router.get('/:id', supervisorController.getSupervisorById);
router.post('/', supervisorController.createSupervisor);
router.put('/:id', supervisorController.updateSupervisor);
router.delete('/:id', supervisorController.deleteSupervisor);

module.exports = router;
