let eye =  document.getElementById('eye');
let password = document.getElementById('pass');

eye.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(password);
    
    if(password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text')
        eye.src = 'assets/icons/eye-off.svg'
        password.style.fontSize = '1rem';
    } else {
        password.setAttribute('type', 'password')
        eye.src = 'assets/icons/eye.svg'
        password.style.fontSize = '2rem';
    }
})