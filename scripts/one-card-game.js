export const createModalCard = () => {
    const cardsArray = document.querySelectorAll('.card');
    const closeBtn =  document.querySelector('.card_close');
    

    cardsArray.forEach(card => {
        const hideElements = document.querySelectorAll(".card .hide")
        card.addEventListener('click', () => {
            card.classList.add('modal')
            card.classList.add('card_modal')
            card.classList.add('active')
            hideElements.forEach(el => el.classList.remove('hide'))
        });
        closeBtn.addEventListener('click', () => {
            card.classList.remove('modal')
            card.classList.remove('card_modal')
            card.classList.remove('active');
            hideElements.forEach(el => el.classList.add('hide'))
        })
    })
};
