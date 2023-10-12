export const getGameDescription = (gameObject, apiKey) => {
    
        fetch(`https://rawg.io/api/games/${gameObject.id}?key=${apiKey}`)
                .then(response => response.json())
                .then(data => {obtainGamesDetails(data)})
                .catch(error => console.error(error))
    
    const obtainGamesDetails = (game) => {
        gameObject.description = game.description
        gameObject.developers = game.developers
        gameObject.publishers = game.publishers
        gameObject.website = game.website

        console.log(gameObject)
    }
    
    const addetails = (game) => {
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
        

        
    };

}; 




// export const getGameDescription = (games, apiKey) => {
//     console.log(games);
//     games.map(game => {
//         fetch(`https://rawg.io/api/games/${game.id}?key=${apiKey}`)
//                 .then(response => response.json())
//                 .then(data => {obtainGamesDetails(data)})
//                 .catch(error => console.error(error))
//     });

    
//     const obtainGamesDetails = (game) => {
//         let cards = document.querySelectorAll(".card")
       
//         for(let card of cards){
//             if(card.id == game.id){
//                 const card = document.getElementById(`${game.id}`)

//                 // obtain description
//                 const p = card.querySelector('.card_description')
//                 const descriptionParagraph = game.description
//                 p.innerHTML = descriptionParagraph
//             };
//         };
        
//         games.forEach(gameObject => {
//             gameObject.description = game.description
//             gameObject.developers = game.developers
//             gameObject.publishers = game.publishers
//             gameObject.website = game.website
//         })
        
//     };

// }; 
