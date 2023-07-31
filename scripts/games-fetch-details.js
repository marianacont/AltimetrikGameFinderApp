import { apiKey } from "./games-fetch.js";
import { GAMES } from "./games-fetch.js";

export const getGameDescription = () => {
  const url = `https://rawg.io/api/games?key=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .then(games => games.map(game => {fetchCardsDetails(game.id)}))
    .catch(error => console.error('Error:', error));


    const fetchCardsDetails = async (id) => {
        return fetch(`https://rawg.io/api/games/${id}?key=${apiKey}`)
                .then(response => response.json())
                .then(data => {obtainGamesDetails(data)})
                .catch(error => console.error(error))
    };

    const obtainGamesDetails = (game) => {
        let cards = document.querySelectorAll(".card")
       
        for(let card of cards){
            if(card.id == game.id){
                const card = document.getElementById(`${game.id}`)

                // obtain description
                const p = card.querySelector('.card_description')
                const descriptionParagraph = game.description
                p.innerHTML = descriptionParagraph
            };
        };
        
        GAMES.forEach(gameObject => {
            gameObject.description = game.description
            gameObject.developers = game.developers
            gameObject.publishers = game.publishers
            gameObject.website = game.website
        })
        
    };

}; 
