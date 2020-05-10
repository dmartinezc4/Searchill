var email = document.getElementById('email');
var password = document.getElementById('password');
var error = document.getElementById('error');
error.style.color = 'red';
var submit = document.getElementById('register-button');

submit.addEventListener('click', sendForm);

function sendForm(e){
    e.preventDefault();

    var error_mss = [];

    if(email.value === null || email.value === ''){
        error_mss.push('Ingrese su nombre');
    }
    if(password.value === null || password.value === ''){
        error_mss.push('Ingrese su contraseña');
    }

    error.innerHTML = error_mss.join(', ');
}