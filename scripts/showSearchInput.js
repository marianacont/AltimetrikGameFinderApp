const searchInput = document.querySelector('.search-input');


export function showSearchInput() {
    console.log(searchInput.style);
    if(searchInput.style.display === "" || searchInput.style.display === "none"){
        searchInput.style.display = "inline"; 
        lens.style.position = "absolute";
        lens.style.padding = "11px";
    } else {
        searchInput.style.display = "none";
        lens.style.position = "relative";
    }
};