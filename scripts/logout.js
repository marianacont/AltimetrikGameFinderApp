const modal = document.getElementById('logout-modal');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const btnClose = document.querySelector('.close');

export const logoutListener = (btn) => {
    btn.addEventListener('click',() => {
        logout()
    });
};

const logout = () => {
    modal.classList.add('active');

    btnYes.addEventListener('click', () => {
        window.location.href = 'index.html'
        localStorage.removeItem('user')
    });

    btnNo.addEventListener('click', () => {
        modal.classList.remove('active')
    });

    btnClose.addEventListener('click', () => {
        modal.classList.remove('active')
    });
};