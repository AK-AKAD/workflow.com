var nameError = document.getElementById('name-error');
var lastNameError = document.getElementById('lastName-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var conPasswordError = document.getElementById('conPassword-error');
var submitError = document.getElementById('submit-error');
var togglePasswordIcon = document.getElementById('.toggle-password');

function validateName(){
    var name = document.getElementById('contact-name').value;
    if (name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+$/)){
        nameError.innerHTML = 'Alphabetic characters only';
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
    
    }
    function validateLastName(){
        var name = document.getElementById('last-name').value;
        if (name.length == 0){
            lastNameError.innerHTML = 'Last Name is required'
            return false;
        }
if(!name.match(/^[A-Za-z]+$/)){
    nameError.innerHTML = 'Alphabetic characters only';
    return false;
}
lastNameError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;

}
function validatePassword(){
    var password = document.getElementById('password').value;

if(password.length == 0){
    passwordError.innerHTML = 'password is required';
    return false;
}
    if(password.length ==10){
        phoneError.innerHTML = 'Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 9 characters long';
        return false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/)) {
        passwordError.innerHTML = 'Password must contain at least one number, one uppercase letter, one lowercase letter, and be at least 9 characters long';
        return false;
    }
    
    passwordError.innerHTML= '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateConPassword() {

    var confirmPassword = document.getElementById('confirm-password').value;
    
    if (confirmPassword !== password) {
        conPasswordError.innerHTML = 'Passwords does not match';
        return false;
    } 
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if (email.length ==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePassword() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}



togglePasswordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; 
        togglePasswordIcon.classList.remove('fa-eye');
        togglePasswordIcon.classList.add('fa-eye-slash');  
    } else {
        passwordInput.type = 'password';  
        togglePasswordIcon.classList.remove('fa-eye-slash');
        togglePasswordIcon.classList.add('fa-eye');  
    }
});
