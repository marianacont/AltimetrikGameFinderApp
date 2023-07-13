export const getGameDescription = () => {
  const apiKey = '7a29cc5de6ab485491bdb04ccd264f92'; 
  const url = `https://rawg.io/api/games?key=${apiKey}`;


  fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .then(games => games.map(game => game.id))
    .then(ids => ids.forEach(id => {
            fetchCardsDetails(id)}))
    .catch(error => console.error('Error:', error));


    const fetchCardsDetails = async (id) => {
        return fetch(`https://rawg.io/api/games/${id}?key=${apiKey}`)
                .then(response => response.json())
                .then(data => createDescriptionParagraph(data))
                .catch(error => console.error(error))
    };

    const createDescriptionParagraph = (game) => {
        let cards = document.querySelectorAll(".card")
       
                for(let card of cards){
                        if(card.id == game.id){
                                let card = document.getElementById(`${game.id}`)
                                let p = card.querySelector('.card_description')
                                let descriptionParagraph = game.description
                                p.innerHTML = descriptionParagraph
                        }
        }
        

    }

}; 
