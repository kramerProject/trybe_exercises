const { getAddressByCep, createNewCep, incrementByOne, getStatsByUf, getStatsByCity } = require('../models/CepModel');
const CepSchema = require('../schemas/CepSchema');
const fetch = require('node-fetch');


const onFetchCep = async (cep) => {
  const endpoint = 'http://cep.la'
  const headers = {
    Accept: 'application/json',
  };

  const cepRes = await fetch(`${endpoint}/${cep}`, { headers })
  const cepFound = await cepRes.json();

  if(cepFound.length > 0 || cepFound.cep) {
    const { cep, uf, cidade, bairro, logradouro } = cepFound;
    const create = await createNewCep( cep, uf, cidade, bairro, logradouro )
    return create;
  }
  else return { message: 'CEP Não encontrado' }
}

const findAddress = async (cep) => {
  
  const result = await getAddressByCep(cep)

  if (result) {
    await incrementByOne(cep)
    return result;
  } else {
    const cepRes = await onFetchCep(cep);
    return cepRes
  }

}


const getCepStats = async (query) => {
  const { uf, city } = query;
  

  if (uf) {
    const ufStatsRes = await getStatsByUf(uf);
    return ufStatsRes
  } else if (city) {
    const cityStatsRes = await getStatsByCity(city)
    return cityStatsRes;
  } else {
    return { message: 'Digite um parametro válido' }
  }
}


module.exports = {
  findAddress,
  getCepStats
}