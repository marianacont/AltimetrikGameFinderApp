 import { createCard, apiKey } from "./games-fetch.js";
 import { gallery } from "./create-search-list.js";

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
        const url = `https://rawg.io/api/games?key=${apiKey}&search="${searchTerm}"`

        fetch(url)
            .then(res => res.json())
            .then(data =>data.results)
            .then(results => {
                if(results.length == 0){
                    gallery.innerHTML = '<h2>No games found</h2>'
                } else {
                    gallery.innerHTML = ''
                    createCard(results)
                    if(searchTerm.length >=2){
                        lastSearches.unshift(searchTerm);
                    console.log(searchTerm, lastSearches);
                    }
                    
                    if(lastSearches.length >= 11){
                        lastSearches.pop()
                    }
                    localStorage.lastSearches = JSON.stringify(lastSearches)
                }
            })
            .catch(err => console.error(err))
            
 }, 700)

    

