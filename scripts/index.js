import { darkModeListener } from "./darkMode.js";
import { showSearchInput } from "./showSearchInput.js";
import { changeColumnViewListener } from "./columns.js";
import { fetchGameApi } from "./fetchApi.js";

// Dark-mode button
const switchMode = document.querySelectorAll('.switch');
// Lens (tablet screen)
const lens = document.querySelector('.lens');
//
const colBtn = document.querySelectorAll("img[class*='col']")




// Dark/light mode functionality
switchMode.forEach(darkModeListener);


// Show search input (tablet screen)
lens.addEventListener('click', showSearchInput);

// Change columns view
// colBtn.forEach(changeColumnViewListener);

colBtn.forEach(changeColumnViewListener)


// fetch api
fetchGameApi()