 import { createCard } from "./fetch-api.js";
// import { ulSearches } from "./create-search-list.js";

let lastSearches;

    if(localStorage.lastSearches && localStorage.lastSearches != ''){
        lastSearches = JSON.parse(localStorage.lastSearches)
    }else {
        lastSearches = []
    };

 // search games from API
const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func(...args);
        }, timeout);
    };
 };

 export const searchGamesWithDebounce = debounce((searchTerm) => {
        const apiKey = "7a29cc5de6ab485491bdb04ccd264f92";
        const url = `https://rawg.io/api/games?key=${apiKey}&search="${searchTerm}"`

        fetch(url)
            .then(res => res.json())
            .then(data =>data.results)
            .then(results => {
                if(results.length == 0){
                    document.querySelector('.gallery').innerHTML = '<h2>No games found</h2>'
                } else {
                    createCard(results)
                    lastSearches.unshift(searchTerm);
                    if(lastSearches.length >= 10){
                        lastSearches.pop()
                    }
                    localStorage.lastSearches = JSON.stringify(lastSearches)
                }
            })
            .catch(err => console.error(err))
            
 }, 700)

    

