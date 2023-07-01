const apiKey = "076125fe7d0647b6a94e0263bcf57f86";
const url = `https://rawg.io/api/games?key=${apiKey}`
let gallery = document.querySelector(".gallery");


// Get game details for id
function fetchDetails(movieId) {
    return new Promise((resolve, reject) => {
      // Realizar la solicitud para obtener los detalles de la película por su ID
      fetch(`https://rawg.io/api/games/${game.id}?key=${apiKey}`)
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  // Get all id's games
  function fetchIds() {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  // Get and show games information
  export async function getGameDetailsAndRender() {
    try {
      // Get games Ids
      const gamesIds = await fetchIds();
  
      // Games info array
      const gameDetails = [];
  
      // Recorrer cada ID de película y obtener sus detalles
      for (const gameId of gamesIds) {
        const details = await fetchDetails(gameId);
        gameDetails.push(details);
      }
  
      // Una vez obtenidos todos los detalles, dibujar las cards
      renderCards(gameDetails);
    } catch (error) {
      // Manejo de errores
      console.log('Error:', error);
    }
  }
  
  // Función para dibujar las cards de las películas
  function renderCards(gameDetails) {
    // Aquí puedes utilizar los detalles de las películas para dibujar las cards
    // en el DOM, por ejemplo:
    gameDetails.forEach(game => {
      const card = document.createElement('div');
      card.innerHTML = `
      <div class="card">
      <div class="card_image" style="background-image: url(${game.background_image})"></div>
      <div class="card_content">
          <div class="flex">
              <p class="card_title">${game.name}</p>
              <p class="card_number">#${games.indexOf(game) + 1}</p>
          </div>
          
          <div class="flex">
              <p class="card_realease">Release date:</p>
              <p class="card_date">${game.released}</p>
          </div>

          <div class="flex">
              <p class="card_genres">Genres:</p>
              <p class="card_genres_names">${genres}</p>
          </div>

          <div class="card_icons flex">
              ${platforms}
          </div>

          <p class="card_description">
            ${description}
          </p>

      </div>
  </div>
      `;
      gallery.appendChild(card);
    });
  }
  
  // Llamar a la función principal para obtener y mostrar los detalles de las películas
//   getGameDetailsAndRender();