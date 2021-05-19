const express = require('express');
const router = express.Router();

const plantController = require('../controllers/plantControllerWithDb');

router.get('/plants', plantController.getPlants);

router.get('/plants/:id', plantController.getPlantById);

router.delete('/plants/:id', plantController.removePlantById);

router.post('/plants/:id', plantController.editPlantById);

router.post('/plants', plantController.createNewPlant)

router.get('/sunny/:id', plantController.getSunny)

module.exports = router;