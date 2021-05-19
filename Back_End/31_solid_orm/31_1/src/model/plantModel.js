const { ObjectId } = require('bson');
const connection = require('./connection');

const getPlants = async () => {
  const plantRes = (await connection().then((db) => db.collection('plants').find())).toArray();
  return plantRes;
}

const getPlantById = async (id) => {
  const plantRes = await connection().then((db) => db.collection('plants').findOne(ObjectId(id)));
  return plantRes;
}

module.exports = {
  getPlants,
  getPlantById
}
