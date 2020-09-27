const buttonCount = document.getElementById('count-button');
let count = 0;

buttonCount.addEventListener('click', () => {
  const result = document.getElementById('result')
  count += 1;
  result.innerText = count;
});