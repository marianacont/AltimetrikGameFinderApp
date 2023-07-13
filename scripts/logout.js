export const logoutListener = (btn) => {
    btn.addEventListener('click',() => {
        logout()
    });
};

const logout = () => {
    let result = window.confirm('Do you want to log out?');
        if (result === true) {
            window.location.href = 'index.html'
            localStorage.removeItem('user')
        } 
};