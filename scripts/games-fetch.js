import { createModalCard } from "./game-card-modal.js";
import { getGameDescription } from "./games-fetch-details.js";
import { searchGamesWithDebounce } from "./games-search.js";

export const apiKey = "fba17e9f91664885a6cfafa88948a796";
let gallery = document.querySelector(".gallery");
let pageNumber = 1
export const GAMES = []

export const createGameCards = (pageNumber) => {
    const url = `https://rawg.io/api/games?key=${apiKey}&page=${pageNumber}&page_size=10`

  // fetch API
  fetch(url)
        .then(response => {
            if(response.ok){
                return response.json()
            }else if(!response.ok){
                console.log(response.status)
                gallery.innerHTML = `<h2>Sorry!</h2>
                                    <br>
                                    <h3>An error has ocurred</h3>`
                gallery.classList.add('block')
            }
        })
        .then(data => data.results)
        .then(results => createCard(results))
        .catch(error => console.error('Error:', error));
};


// Create card
 export const createCard = (games) => {
    let card = ''
    games.map(game =>{
        // Get genres from each game
        let genres = game.genres.map(genre => {
            let genreList =  genre.name
            return genreList
        }).join(' ');
        

        const gameObject = {
            id: game.id,
            title: game.name,
            genres: genres,
            platforms: game.parent_platforms,
            background: game.background_image,
            released: game.released,
            number: games.indexOf(game) + 1,
            esrb: game.esrb_rating,
            images: game.short_screenshots,
            slug: game.slug
        }

        // Get platforms from each game
        let platforms = game.parent_platforms.map(platform => `<img src="../assets/icons/${platform.platform.slug}.svg" alt="${platform.platform.name}">`).join('');
        gameObject.platforms_icons = platforms;
        

        
        // Create card with all the information
            card +=  `
            <div class="card" id="${gameObject.id}">
                <div class="card_image" style="background-image: url(${gameObject.background})"></div>
                <div class="card_content">
                    <div class="card_header flex">
                        <p class="card_title">${gameObject.title}</p>
                        <p class="card_number">#${gameObject.number}</p>
                    </div>
                    
                    <div class="flex">
                        <p class="card_realease">Release date:</p>
                        <p class="card_date">${gameObject.released}</p>
                    </div>

                    <div class="flex">
                        <p class="card_genres">Genres:</p>
                        <p class="card_genres_names">${gameObject.genres}</p>
                    </div>

                    <div class="card_icons flex">
                        ${platforms}
                    </div>

                    <p class="card_description">
                      
                    </p>

                </div>
            </div>`

            GAMES.push(gameObject)   
    });   
    gallery.insertAdjacentHTML('beforeend', card);
    let cardsArray = document.querySelectorAll('.card'); 
    createModalCard(GAMES, cardsArray)
    getGameDescription(GAMES, apiKey)
};


