const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

router.get('/', carController.getAllCars);
router.post('/', verifyToken, requireAdmin, carController.createCar);
router.get('/:id', carController.getCar);
router.put('/:id', verifyToken, requireAdmin, carController.updateCar);
router.delete('/:id', verifyToken, requireAdmin, carController.deleteCar);

module.exports = router;
