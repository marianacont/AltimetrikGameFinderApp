const inputEmail = document.getElementById('email');
const regExpMail = /[._-\w]+@([\w-]+\.)+[\w]+/g
const inputPass = document.getElementById('pass');
const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!#$%&])[A-Za-z\d?!#$%&]{8,8}$/g


export function validateData(){
    let mail = inputEmail.value;
    
    if(regExpMail.test(mail)){
        console.log('ingreso correcto');
    }else {
        inputEmail.setCustomValidity('Wrong email')
    }
}

 function validatePassword(){
    let pass = inputPass.value
    if(regExpPass.test(pass)){
    } else {
    }
};
validatePassword()

