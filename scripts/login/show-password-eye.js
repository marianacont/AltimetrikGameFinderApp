let password = document.getElementById('pass');

export function changeEyeIcon(){
        if(password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text')
        eye.src = 'assets/icons/eye.svg';
    } else {
        password.setAttribute('type', 'password')
        eye.src = 'assets/icons/eye-off.svg'
    }
}