const plants = require('../../plants');


const getPlants = async (req, res) => {
  return res.status(200).json({ message: plants.defaultPlants })
};

const getPlantById = async (req, res) => {
  const { id } = req.params
  const plantRes = await plants.getPlantById(parseInt(id))
  return res.status(200).json({ message: plantRes })
}

const removePlantById = async (req, res) => {
  const { id } = req.params
  const plantRes = await plants.removePlantById(parseInt(id))
  return res.status(200).json({ message: plantRes })
}

const editPlantById = async (req, res) => {
  const { id } = req.params
  const { newPlant } = req.body;
  const plantRes = await plants.editPlant(parseInt(id), newPlant)
  return res.status(200).json({ message: plantRes })
}

const createNewPlant = async (req, res) => {
  const { newPlant } = req.body;
  const plantRes = await plants.createNewPlant(newPlant)
  return res.status(200).json({ message: plantRes })
}

const getSunny = async (req, res) => {
  const { id } = req.params
  const { newPlant } = req.body;
  const plantRes = await plants.getPlantsThatNeedsSunWithId(parseInt(id))
  return res.status(200).json({ message: plantRes })
}

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlantById,
  createNewPlant,
  getSunny
}