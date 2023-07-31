const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const invalidEmail = document.querySelector('.invalid-email');
const invalidPassword = document.querySelector('.invalid-password');


// Function that find a match within the value of the input and the users
const findUser = async () => {

    let data = {
        "email": inputEmail.value,
        "password": inputPass.value
    }

    fetch("http://localhost:3000/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(res => res.json())
    .then(user => {
        localStorage.setItem('user', user.accessToken)
        window.location.href = 'games.html'
    })
    .catch(err => {
        err.statusText
        invalidPassword.style.display = 'block';
        invalidPassword.innerText = 'Wrong email or password'
    })

}

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