const makeListOfSearches = () => {
    let ulSearches = document.getElementById('search-results-ul');
    // Get elements from local storage
    let storageList = JSON.parse(localStorage.getItem('lastSearches')) || [];

    // Create a list element for each term stored
    storageList.forEach(element => {
        const item = document.createElement('li');
        item.innerHTML = element;
        ulSearches.appendChild(item)
    })
 };
 makeListOfSearches()