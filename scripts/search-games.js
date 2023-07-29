 import { createCard } from "./fetch-api.js";

let lastSearches;
let pageNumber = 1


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

 export const searchGamesWithDebounce = debounce((searchTerm, pageNumber) => {
        const apiKey = "b42d30de36764aaf933ab77eeea3f2a6";
        const url = `https://rawg.io/api/games?key=${apiKey}&search="${searchTerm}"&page=${pageNumber}`

        fetch(url)
            .then(res => res.json())
            .then(data =>data.results)
            .then(results => {
                if(results.length == 0){
                    document.querySelector('.gallery').innerHTML = '<h2>No games found</h2>'
                } else {
                    document.querySelector('.gallery').innerHTML = ''
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

    

