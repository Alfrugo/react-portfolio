const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const timestamp = Date.now();
let now = new Date();
const nowstr = now.toISOString()
const nowLocalStr = now.toLocaleString()

console.log('hello world')

// console.log(timestamp, now)
// console.log(nowstr)
// console.log(nowLocalStr)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(username.value.trim())


    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // console.log(usernameValue, emailValue, password2Value, passwordValue)


    if (usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank...')
    } else {
        // add success class
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!')
    } else if (!isEmail(emailValue)){
        console.log('checking email format')
        setErrorFor(email, 'Email not valid')
    } else {
        // add success class
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank!')
    } else if (passwordValue.match(/^[A-Za-z]\w{7,15}$/)) {
        // console.log(passwordValue.match(/^[A-Za-z]\w{7,15}$/))
        setSuccessFor(password)

    }else {
        // add success class
        setErrorFor(password, 'need better pass!')
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank!')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match!')
    }
    
    else {
        // add success class
        setSuccessFor(password2)
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector('small');

        // add error message inside small
        small.innerText = message;

        //add error class
        formControl.className = 'form-control error'
    }

    function setSuccessFor(input){
        const formControl = input.parentElement;
       formControl.className = 'form-control success';
    }


function isEmail(email) {
    // console.log(emailValue)
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

}

}

module.exports = form;
