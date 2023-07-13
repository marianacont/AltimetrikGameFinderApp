import { darkModeListener, windowListener } from "./dark-mode.js";
import { showSearchInput } from "./show-search-input.js";
import { changeColumnViewListener } from "./columns.js";
import { createGameCards } from "./fetch-api.js";
import { logoutListener } from "./logout.js";
import { getGameDescription } from "./fetch-api-details.js";
import { searchGamesWithDebounce } from "./search-games.js";
import { getGames } from "./new-function.js"

// Dark-mode button
const switchMode = document.querySelectorAll('.switch');
// Lens (tablet screen)
const lens = document.querySelector('.lens');
const colBtn = document.querySelectorAll("img[class*='col']")
const logoutBtn = document.querySelectorAll('.logout');
const searchInput = document.querySelector('.search-input')



// Dark/light mode functionality
switchMode.forEach(darkModeListener);
windowListener()

// Show search input (tablet screen)
lens.addEventListener('click', showSearchInput);

// Change columns view
// colBtn.forEach(changeColumnViewListener);
colBtn.forEach(changeColumnViewListener)


// fetch api
createGameCards()
getGameDescription()


// Logout
logoutBtn.forEach(logoutListener)

//Search games
searchInput.addEventListener('input', (e) => {
    // e.preventDefault();
    let value = e.target.value
    searchGamesWithDebounce(value)
});

// new functionality
// getGames()

