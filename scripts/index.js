import { darkModeListener, windowListener } from "./dark-mode.js";
import { showSearchInput } from "./show-search-input.js";
import { changeColumnViewListener } from "./columns.js";
import { createGameCards } from "./fetch-api.js";
import { logoutListener } from "./logout.js";
import { getGameDescription } from "./fetch-api-details.js";
import { searchGamesWithDebounce } from "./search-games.js";

// Dark-mode button
const switchMode = document.querySelectorAll('.switch');
const lens = document.querySelector('.lens');
const colBtn = document.querySelectorAll("img[class*='col']")
const logoutBtn = document.querySelectorAll('.logout');
const searchInput = document.querySelector('.search-input');
const lastSearchesMenuLink = document.getElementById('last-searches');
const searchResults = document.querySelector('.search-results')
const homeLink = document.querySelector('#home-link')


// Dark/light mode functionality
switchMode.forEach(darkModeListener);
windowListener()

// Show search input (tablet screen)
lens.addEventListener('click', showSearchInput);

// Change columns view
colBtn.forEach(changeColumnViewListener)


// fetch api
createGameCards(1)
getGameDescription()
homeLink.addEventListener('click', () => {
    createGameCards(1) 
    getGameDescription()
})


// Logout
logoutBtn.forEach(logoutListener)

//Search games
searchInput.addEventListener('input', (e) => {
    e.preventDefault();
    let value = e.target.value.toLowerCase()
    if(value.trim() === ''){
        console.log(`${value} is an empty string` );
        
    }else {
        console.log('I will call the function');
        searchGamesWithDebounce(value)
    }
});


