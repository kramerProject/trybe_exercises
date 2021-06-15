const socket = window.io();

let stars = 0

const form = document.querySelector('form');
const likeButton = document.querySelector('#likeIcon');

const starButton = document.querySelector('#starIcon');

const currentLikes = document.querySelector('#currentLikes')
const currentStars = document.querySelector('#currentStars')

likeButton.addEventListener('click', (e) => {
  socket.emit('likePost', 'someone liked your post')
})

starButton.addEventListener('click', (e) => {
  socket.emit('starPost', 'someone starred your post')
  currentStars.innerHTML = stars += 1
})

socket.on('updateLikes', (likesCount) => currentLikes.innerHTML = likesCount);
socket.on('updateStars', (starsCount) => currentStars.innerHTML = starsCount);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   socket.emit('clientMessage', inputMessage.value);
//   inputMessage.value = '';
//   return false;
// });


// const createMessage = (message) => {
//   const messagesUl = document.querySelector('#messages');
//   const li = document.createElement('li');
//   li.innerText = message;
//   messagesUl.appendChild(li);
// };



window.onbeforeunload = function(event) {
  socket.disconnect();
};