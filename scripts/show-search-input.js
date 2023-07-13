const searchInput = document.querySelector('.search-input');
const lens = document.querySelector('.lens')

export function showSearchInput() {
    if(searchInput.style.display === "" || searchInput.style.display === "none"){
        searchInput.style.display = "inline"; 
        lens.style.position = "absolute";
        lens.style.padding = "11px";
    } else {
        searchInput.style.display = "none";
        lens.style.position = "relative";
    }
};