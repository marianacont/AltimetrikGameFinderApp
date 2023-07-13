const storagedMode = localStorage.getItem('mode');
const body = document.querySelector('body');

const enableDarkMode = () => {
    
    if(!body.classList.contains("dark-mode")){
            body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
    }else {
        body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light");
    }
};

const addActiveClassToButtons = () => {
    let btnMain = document.getElementById('dark-mode-btn-main');
    let btnMenu = document.getElementById('dark-mode-btn-menu');
    if(localStorage.mode === "dark"){
        btnMain.classList.add('active');
        btnMenu.classList.add('active');
    } else {
       btnMain.classList.remove('active');
       btnMenu.classList.remove('active');
    }
}

const changeModeWhenLoad = () => {
    if(storagedMode === 'dark'){
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    };
};

export const darkModeListener = (btns) => {
    btns.addEventListener('click', enableDarkMode);
    btns.addEventListener('click', addActiveClassToButtons)
};

export const windowListener = () => {
    window.addEventListener('load', changeModeWhenLoad);
    window.addEventListener('load', addActiveClassToButtons)
}