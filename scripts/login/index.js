import { changeEyeIcon } from "./show-password-eye.js";
import { submitForm } from "./login.js";
import { darkModeLogin } from "./dark-mode-login.js";

let eye =  document.getElementById('eye');
const form = document.getElementById('login-form');


// LOGIN PAGE
// Eye Icon
eye.addEventListener('click', (e) => {
    e.preventDefault();
    changeEyeIcon();
});

// Form Validation
form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm()
});


const isLogged = () => {
    const isUser = localStorage.getItem('user')
    if (isUser){
        window.location.href = 'games.html'
    }
}

// Dark mode
window.addEventListener('load', ()=> {
    darkModeLogin
    isLogged()
})

