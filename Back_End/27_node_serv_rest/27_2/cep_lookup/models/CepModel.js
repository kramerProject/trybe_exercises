const connection = require('../configs/connection');

const incrementByOne = async (cep) => {
  const increment = connection().then((db) => db.collection('address').updateOne({ "cep": cep }, { $inc: {"counter": 1}}));
  
  return increment;
}

const getAddressByCep = async (cep) => {
  const address = connection().then((db) => db.collection('address').findOne({ "cep": cep }));

  return address
}

const createNewCep = async (cep, uf, city, district, log) => {
  const address = await connection().then((db) => db.collection('address').insertOne({ cep, uf, city, district, log, "counter": 1 }));

  return address.ops;
}

const getStatsByUf = async (query) => {
  const statsRes = await connection().then((db) => db.collection('address').aggregate([
    { $match: { uf: query }},
    { $group: { _id: "$uf", quantidade: { $sum: "$counter" } }},
    {$project: {_id: 0, uf: "$_id", quantidade: 1 }}
  ]).toArray())
  return statsRes[0];
}

const getStatsByCity = async (query) => {
  const statsRes = await connection().then((db) => db.collection('address').aggregate([
    { $match: { city: query }},
    { $group: { _id: "$city", quantidade: { $sum: "$counter" } }},
    {$project: {_id: 0, city: "$_id", quantidade: 1 }}
  ]).toArray())
  return statsRes[0];
}


module.exports = {
  getAddressByCep,
  createNewCep,
  incrementByOne,
  getStatsByUf,
  getStatsByCity
}


