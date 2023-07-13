const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const invalidEmail = document.querySelector('.invalid-email');
const invalidPassword = document.querySelector('.invalid-password');


// Function that find a match within the value of the input and the users
const findUser = async () => {
    let mail = inputEmail.value;
    let pass = inputPass.value;
    try {
        let res = await fetch("http://localhost:3000/users"),
        users = await res.json();
        let match = null
        users.forEach(user => {
            if(user.username === mail && user.password === pass) {
                match = user  
                localStorage.setItem("user", user.username);
            }
        });
        if (match){
            window.location.href = 'main.html'
        } else {
            invalidPassword.style.display = 'block';
            invalidPassword.innerText = 'Wrong email or password'
        }
    } catch (err) {
        let message = err.statusText;
    };
};

export const submitForm = () =>{
    if (inputEmail.value === ''){
        invalidEmail.style.display = 'block';
        invalidEmail.innerText = 'Email is required'
    } else {
        if (inputPass.value === ''){
            invalidPassword.style.display = 'block';
            invalidPassword.innerText = 'Password is required'
        } else {
            findUser()
        }
    }
}