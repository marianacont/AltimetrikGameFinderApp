let eye =  document.getElementById('eye');
let password = document.getElementById('pass');

eye.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(password);
    
    if(password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text')
        eye.src = 'assets/icons/eye.svg'
        password.style.fontSize = '1rem';
    } else {
        password.setAttribute('type', 'password')
        eye.src = 'assets/icons/eye-off.svg'
        password.style.fontSize = '2rem';
    }
})



const form = document.getElementById('login-form');
const inputEmail = document.getElementById('email')
const regExpMail = /[._-\w]+@([\w-]+\.)+[\w]+/g

// console.log(regExpMail.test('mariana@algo.com.ar'));
// console.log(regExpMail.test('mariana@algo.com'));


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let mail = inputEmail.value;
    
    if(regExpMail.test(mail)){
        console.log('ingreso correcto');
    }else {
        inputEmail.setCustomValidity('Wrong email')
    }
})