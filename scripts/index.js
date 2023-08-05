import { darkModeListener, windowListener } from "./dark-mode.js";
import { showSearchInput } from "./show-search-input.js";
import { changeColumnViewListener } from "./columns.js";
import { createGameCards } from "./games-fetch.js";
import { logoutListener } from "./logout.js";
import { getGameDescription } from "./games-fetch-details.js";
import { searchGamesWithDebounce } from "./games-search.js";
import { makeListOfSearches, gallery } from "./create-search-list.js";

const switchMode = document.querySelectorAll('.switch');
const lens = document.querySelector('.lens');
const colBtn = document.querySelectorAll("img[class*='col']")
const logoutBtn = document.querySelectorAll('.logout');
const searchInput = document.querySelector('.search-input');
const lastSearchesMenuLink = document.getElementById('last-searches');
const homeLink = document.querySelector('#home-link');

window.addEventListener('load', () => {
    const isUser = localStorage.getItem('user')
    if(isUser == null){
        window.location.href = 'index.html'
    }
})


// Dark/light mode functionality
switchMode.forEach(darkModeListener);
windowListener()

// Show search input (tablet screen)
lens.addEventListener('click', showSearchInput);

// Change columns view
colBtn.forEach(changeColumnViewListener)


// fetch api
// createGameCards(1)
// getGameDescription()
// homeLink.addEventListener('click', () => {
//     gallery.innerHTML = ''
//     createGameCards(1) 
//     getGameDescription()
// })


// Logout
logoutBtn.forEach(logoutListener)

//Search games
// searchInput.addEventListener('input', (e) => {
//     e.preventDefault();
//     let value = e.target.value.toLowerCase()
//     if(value.trim() === ''){
//         console.log(`${value} is an empty string` );
        
//     }else {
//         searchGamesWithDebounce(value)
//     }
// });

// Last searches
lastSearchesMenuLink.addEventListener('click',  (e) => {
    e.preventDefault()
    makeListOfSearches()
})


