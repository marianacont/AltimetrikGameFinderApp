import { createModalCard } from "./one-card-game.js";

let gallery = document.querySelector(".gallery");
let pageNumber = 1

export const createGameCards = (pageNumber) => {  
    const apiKey = "b42d30de36764aaf933ab77eeea3f2a6";
    const url = `https://rawg.io/api/games?key=${apiKey}&page=${pageNumber}`

  // fetch API
  fetch(url)
        .then(res => res.json())
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

        // Get platforms from each game
        let platforms = game.parent_platforms.map(platform => `<img src="../assets/icons/${platform.platform.slug}.svg" alt="${platform.platform.name}">`).join('');

        
        // Create card with all the information
            card +=   `
            <div class="card" id="${game.id}">
                <div class="modal_container">
                    <div class="card_image" style="background-image: url(${game.background_image})">
                        <div class="gradient_layer"></div>
                    </div>

                    <div class="card_content">
                        <svg 
                            class="hide card_close" 
                            width="24" height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff">
                            <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z" /></svg>
            
                        <div class="card_header flex">
                            <h2 class="card_title">${game.name}</h2>
                            <p class="card_number">#${games.indexOf(game) + 1}</p>
                        </div>

                        <div class="hide card_highlights">
                            <p class="card_date">${game.released}</p>
                            <p><span>#${games.indexOf(game) + 1}</span> top 2023</p>
                            <p><span>#5</span> Action</p>
                        </div>
                        
                        <div class="info flex">
                            <p class="card_realease">Release date:</p>
                            <p class="card_date">${game.released}</p>
                        </div>

                        <div class="info flex">
                            <p class="card_genres">Genres:</p>
                            <p class="card_genres_names">${genres}</p>
                        </div>

                        <div class="card_icons flex">
                            ${platforms}
                        </div>

                        <p class="card_description">
                        
                        </p>

                    </div>
                </div>
            </div>`

               
    });   
    gallery.insertAdjacentHTML('beforeend', card);

    // Card modal
createModalCard()

};

//Infinite scrolling
window.addEventListener('scroll', (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if(scrollTop + clientHeight >= scrollHeight ){
        pageNumber++
        createGameCards(pageNumber)
    }
});