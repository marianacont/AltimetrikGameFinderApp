const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const invalidEmail = document.querySelector('.invalid-email');
const invalidPassword = document.querySelector('.invalid-password');
const checkbox = document.getElementById('checkbox');

const findUser = async () => {
    let data = {
        "email": inputEmail.value,
        "password": inputPass.value
    }

    try {
        const response = await fetch("https://game-finder-app.vercel.app/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });

        if (response.ok) {
            const user = await response.json();
            if(checkbox.checked){
                localStorage.setItem('user', user.accessToken);
                window.location.href = 'games.html';
            } else {
                sessionStorage.setItem('session', 'temporal access');
                window.location.href = 'games.html';
            }
        } else if (response.status === 400) {
            invalidPassword.style.display = 'block';
            invalidPassword.innerText = 'Wrong email or password';
        } else {
            console.error("Unexpected response status:", response.status);
        }
    } catch (error) {
        console.error("Error occurred:", error);
    }
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