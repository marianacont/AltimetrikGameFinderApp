const apiKey = "076125fe7d0647b6a94e0263bcf57f86";
const url = `https://rawg.io/api/games?key=${apiKey}`
let gallery = document.querySelector(".gallery");

function createGameCards(){
  // fetch API
  fetch(url)
        .then(res => res.json())
        .then(data => orderByRating(data.results))
        .catch(error => console.error('Error:', error));


    // Rating orden
    function orderByRating(games){
        let ordered =  games.sort((a,b) => b.rating - a.rating)
        createCard(ordered)
}

  // Create card
  function createCard(games){
    let card = ''

    games.map(game => {
        let genres = game.genres.map(genre => genre.name);
        let platforms = game.parent_platforms.map(platform => `<img src="../assets/icons/${platform.platform.slug}.svg" alt="${platform.platform.name}">`).join('');
        
        card +=  `
            <div class="card">
                <div class="card_image" style="background-image: url(${game.background_image})"></div>
                <div class="card_content">
                    <div class="flex w100">
                        <p class="card_title">${game.name}</p>
                        <p class="card_number">#${games.indexOf(game) + 1}</p>
                    </div>
                    
                    <div class="flex w100">
                        <p class="card_realease">Release date:</p>
                        <p class="card_date">${game.released}</p>
                    </div>

                    <div class="flex w100">
                        <p class="card_genres">Genres:</p>
                        <p class="card_genres_names">${genres}</p>
                    </div>

                    <div class="card_icons flex">
                        ${platforms}
                    </div>

                    <p class="card_description">
                      ${game.description}
                    </p>

                </div>
            </div>`

            gallery.innerHTML = card
    });
    
}
  
}


createGameCards()