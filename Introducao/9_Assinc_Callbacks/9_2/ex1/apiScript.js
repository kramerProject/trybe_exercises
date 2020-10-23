const jokeContainer = document.getElementById('jokeContainer')
const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  
  .then(message => message.json())
  .then(message => jokeContainer.innerText = message.joke)
};

window.onload = () => fetchJoke();
