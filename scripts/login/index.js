import { changeEyeIcon } from "./login.js";
import { inputsListeners } from "./form.js";

let eye =  document.getElementById('eye');
const form = document.getElementById('login-form');



// LOGIN PAGE
// Eye Icon
eye.addEventListener('click', (e) => {
    e.preventDefault();
    changeEyeIcon();
});

// Form Validation
inputsListeners()

form.addEventListener('click', (e) => {
    e.preventDefault()
})