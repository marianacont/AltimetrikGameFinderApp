const storagedMode = localStorage.getItem('mode');
const loginBody = document.querySelector('body');

export const darkModeLogin = () => {
    if(storagedMode === 'dark'){
        loginBody.classList.add("dark-mode");
    } else {
        loginBody.classList.remove("dark-mode");
    };
};