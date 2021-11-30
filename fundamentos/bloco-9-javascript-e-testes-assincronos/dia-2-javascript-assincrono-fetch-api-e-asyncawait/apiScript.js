// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const displayJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json()) 
    .then(object => displayJoke(object.joke));
};

window.onload = () => fetchJoke();
