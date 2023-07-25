let pageNumber = 1;
const apiKey = "7a29cc5de6ab485491bdb04ccd264f92";
const url = `https://rawg.io/api/games?key=${apiKey}&page=${pageNumber}`
let gallery = document.querySelector(".gallery");

export const createGameCards = () => {  
  
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

    games.map(async game =>{
        // Get genres from each game
        let genres = game.genres.map(genre => {
            let genreList =  genre.name
            return genreList
        }).join(' ');

        // Get platforms from each game
        let platforms = game.parent_platforms.map(platform => `<img src="../assets/icons/${platform.platform.slug}.svg" alt="${platform.platform.name}">`).join('');

        
        // Create card with all the information
            card +=  `
            <div class="card" id="${game.id}">
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
                      
                    </p>

                </div>
            </div>`

           gallery.innerHTML = card        
    });   
};

//Infinite scrolling
window.addEventListener('scroll', (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if(scrollTop + clientHeight >= scrollHeight){
        console.log('cargar más');
        pageNumber++
        createGameCards()
    }
})