const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const invalidEmail = document.querySelector('.invalid-email');
const invalidPassword = document.querySelector('.invalid-password');
const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!#$%&])[A-Za-z\d?!#$%&]{8,8}$/g
const regExpMail = /[._-\w]+@([\w-]+\.)+[\w]+/g



export function inputsListeners() {
    inputEmail.addEventListener('keyup', validateData);
    inputPass.addEventListener('keyup', validateData);
}

function validateData(e){
    let mail = inputEmail.value;
    let pass = inputPass.value;

    switch(e.target.id){
        case 'email':
            validateInputs(regExpMail, mail, invalidEmail)
            break
        case 'pass':
            validateInputs(regExpPass, pass, invalidPassword)
            break
    }

    function validateInputs(regex, input, invalid){
        if(regex.test(input) || input === ''){
            invalidEmail.style.display = 'none';
        }else {
            invalid.style.display = 'block';
        }
    };
}

