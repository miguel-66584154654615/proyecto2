const apiKey = 'fbafa62c72mshb23d24f6cb62a4dp1e2803jsn614f75d46ce8';  // Sustituye 'tu_clave_api' con tu clave API
const url = 'https://jokeapi-v2.p.rapidapi.com/joke/Programming?type=single';

function getJoke() {
    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        const joke = data.joke ? data.joke : `${data.setup} - ${data.delivery}`;
        document.getElementById('joke').innerText = joke;  // Muestra el chiste en la página
    })
    .catch(error => console.error('Error:', error));
}

// Llamar a la función al cargar la página
getJoke();
