function enableDarkMode() {
    const body = document.querySelector('body');
    if(!body.classList.contains("dark-mode")){
            body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
    }else {
        body.classList.remove("dark-mode");
        localStorage.setItem("mode", "light");
    }
};


export function darkModeListener(btn) {
    let btnMain = document.getElementById('dark-mode-btn-main');
    let btnMenu = document.getElementById('dark-mode-btn-menu');

    btn.addEventListener('click', enableDarkMode);
    btn.addEventListener('click', () => {


        if(localStorage.mode === "dark"){
            btnMain.classList.add('active');
            btnMenu.classList.add('active');
        } else {
           btnMain.classList.remove('active');
           btnMenu.classList.remove('active');
        }
    })
};