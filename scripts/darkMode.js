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
    btn.addEventListener('click', enableDarkMode);
    btn.addEventListener('click', () => {
        if(localStorage.mode === "dark"){
            return btn.classList.add('active');
        } else {
           return btn.classList.remove('active');
        }
    })
};