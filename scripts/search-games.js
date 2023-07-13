 import { createCard } from "./fetch-api.js";



 let lastSearches;
let divSearches = document.querySelector('.search-results');
let ulSearches = document.querySelector('.search-results-ul');

if(localStorage.lastSearches && localStorage.lastSearches != ''){
    lastSearches = JSON.parse(localStorage.lastSearches)
}else {
    lastSearches = []
};
 const makeListOfSearches = (term, parent) => {
    let listSearches = document.createElement('li');
    listSearches.textContent = term;
    parent.appendChild(listSearches);
 };

 lastSearches.forEach(term => {
    makeListOfSearches(term, ulSearches)
 });





 // search games from API
const debounce = (func, timeout) => {
    let timer;
    return (...args) => {
        timer = setTimeout(()=>{
            func(...args);
        }, timeout);
    };
 };

 export const searchGamesWithDebounce = debounce((searchTerm) => {
        const apiKey = "7a29cc5de6ab485491bdb04ccd264f92";
        const url = `https://rawg.io/api/games?key=${apiKey}&search="${searchTerm}"`
        console.log(searchTerm)
        
        fetch(url)
            .then(res => res.json())
            .then(data =>data.results)
            .then(results => {
                console.log(results)
                if(results.length == 0){
                    document.querySelector('.gallery').innerHTML = '<h2>No games found</h2>'
                } else {
                    createCard(results)
                    lastSearches.push(searchTerm);
                    makeListOfSearches(searchTerm, ulSearches)
                    localStorage.lastSearches = JSON.stringify(lastSearches)
                }
            })
            .catch(err => console.error(err))
            
 }, 1000)

    