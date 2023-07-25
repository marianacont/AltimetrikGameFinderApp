const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?!#$%&])[A-Za-z\d?!#$%&]{8,8}$/g
const regExpMail = /[._-\w]+@([\w-]+\.)+[\w]+/g


// export const inputsListeners = () => {
//     inputEmail.addEventListener('keyup', validateData);
//     inputPass.addEventListener('keyup', validateData);
// }

// const validateData = (e) => {
//     let mail = inputEmail.value;
//     let pass = inputPass.value;

//     const validateInputs = (regex, input, invalid) => {
//         if(regex.test(input) || input === ''){
//             invalid.style.display = 'none';
//         }else {
//             invalid.style.display = 'block';
//             invalid.innerText = 'Insert a valid value'
//         }
//     };

//     switch(e.target.id){
//         case 'email':
//             validateInputs(regExpMail, mail, invalidEmail)
//             break
//         case 'pass':
//             validateInputs(regExpPass, pass, invalidPassword)
//             break
//     };
// };