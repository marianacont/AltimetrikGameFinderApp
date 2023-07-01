import { changeEyeIcon } from "./login.js";
import { validateData } from "./regex.js";

let eye =  document.getElementById('eye');
const form = document.getElementById('login-form');



// LOGIN PAGE
// Eye Icon
eye.addEventListener('click', (e) => {
    e.preventDefault();
    changeEyeIcon();
});

// Validation with regex
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateData();
})