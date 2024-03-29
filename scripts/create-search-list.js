export const gallery = document.querySelector('.gallery');

export const makeListOfSearches = () => {
    const clock = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10ZM10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM11 4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V10C9.00006 10.2652 9.10545 10.5195 9.293 10.707L12.293 13.707C12.4816 13.8892 12.7342 13.99 12.9964 13.9877C13.2586 13.9854 13.5094 13.8802 13.6948 13.6948C13.8802 13.5094 13.9854 13.2586 13.9877 12.9964C13.99 12.7342 13.8892 12.4816 13.707 12.293L11 9.586V4Z" fill="#BF5FE1"/>
    </svg>`
    gallery.innerHTML = ''
    // Get elements from local storage
    let storageList = JSON.parse(localStorage.getItem('lastSearches')) || [];
    
    // Create a list element for each term stored
    let list = storageList.map(element =>  `<li style="font-size: 1.5rem;line-height: 2.5rem;">${clock}   ${element}</li>`).join('')

    gallery.innerHTML = `
            <div class="search-results">
                <h2>Last terms searched</h2>
                <ul>
                    ${list}
                </ul>
            </div>
    `

 };
