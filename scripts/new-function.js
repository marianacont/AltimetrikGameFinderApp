export const getGames = () => {    
    const apiKey = "7a29cc5de6ab485491bdb04ccd264f92";
    const url = `https://rawg.io/api/games?key=${apiKey}`
    let gallery = document.querySelector(".gallery");
    const searchInput = document.querySelector('.search-input')


    // Fetch function
    const fetchGames = (url) => {
         fetch(url)
        .then(res => res.json())
        .then(data => data.results)
        .then(results => createCard(results))
        .catch(error => console.error('Error:', error));
    }

    // Search listener
    searchInput.addEventListener('input', (e) => {
        e.preventDefault()
        let searchTerm = e.target.value
        
        if(searchTerm){
            console.log(searchTerm)
            fetchGames(`${url}&search_exact="${searchTerm}"`)
        } 
    });

    // Fetch games when the page loads
    fetchGames(url)
}

