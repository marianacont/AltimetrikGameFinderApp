const inputEmail = document.getElementById('email');
const regExpMail = /[._-\w]+@([\w-]+\.)+[\w]+/g
const inputPass = document.getElementById('pass');
const regExpPass = /(\w-_!\?.,;:\{\}\(\))+/g // its wrong because I need to test all of the special characters as a group, an also I have to separate the letters with the digits.

// (?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$


// console.log(regExpMail.test('mariana@algo.com.ar'));
// console.log(regExpMail.test('mariana@algo.com'));

export function validateData(){
    let mail = inputEmail.value;
    
    if(regExpMail.test(mail)){
        console.log('ingreso correcto');
    }else {
        inputEmail.setCustomValidity('Wrong email')
    }
}