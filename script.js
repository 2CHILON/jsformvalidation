//switch between the log in and signup dynamically

function switchForm(form){
    document.getElementById("signup-form").style.display = form === "signup" ? "block" : "none";
    document.getElementById("login-form").style.display = form === "login" ? "block" : "none";
    document.getElementById("form-title").innerText = form === "signup" ? "Sign Up" : "Login";

}

//real time validation for signup form

document.getElementById("signup-name").addEventListener("input", validateName);
document.getElementById("signup-email").addEventListener("input", validateEmail);
document.getElementById("signup-password").addEventListener("input", validatePassword);
document.getElementById("signup-confirm-password").addEventListener("input", validateConfirmPassword);

//real time validation for Login Form

document.getElementById("login-email").addEventListener("input", validateLoginEmail);
document.getElementById("login-password").addEventListener("input", validateLoginPassword);

//signup form validation functions

function validateName(){
    let name  = document.getElementById("signup-name").value.trim();
    let error = document.getElementById("signup-name-error");

    if(name  === ""){
        error.innerText = "Name is required";
        
    } else if(!/^[a-zA-Z\s]+$/.test(name)){
        error.innerText = "Name can only contain letters";
    }else {
        error.innerText = "" ;
    }
}

function validateEmail(){
    let email = document.getElementById("signup-email").value.trim();
    let error  = document.getElementById("signup-email-error");

    if (email === ""){
        error.innerText = "Email is required";

    }else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
        error.innerText = "invalid email format";
    
    } else {
        error.innerText = "";
    }
}

function validatePassword(){
    let password = document.getElementById("signup-password").value.trim();
    let error = document.getElementById("signup-password-error");
    if(password === ""){
        error.innerText = "Password is required";
    } else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
        error.innerText = "Must be 8+ chars, include uppercase, lowercase, number &special char";
    } else {
        error.innerText = "";
    }
}

function validateConfirmPassword(){
    let password = document.getElementById("signup-password").value.trim();
    let confirmPassword = document.getElementById("signup-confirm-password").value.trim();
    let error = document.getElementById("signup-confirm-password-error");

    if(confirmPassword ===""){
        error.innerText = "Confirm password is required";
    }else if(password !== confirmPassword){
        error.innerText = "Passwords do not match";

    }else {
        error.innerText = "";
    }
}

//login form validation functions

function validateLoginEmail(){
    let email = document.getElementById("login-email").value.trim();
    let error = document.getElementById("login-email-error");

    if(email === ""){
        error.innerText = "Email is required";
    } else if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){
        error.innerText = "Invalid email format";
    } else {
        error.innerText = "";
    }
}


function validateLoginPassword(){
    let password = document.getElementById("login-password").value.trim();
    let error = document.getElementById("login-password-error");

    if(password === ""){
        error.innerText = "Password is required";

    } else {
        error.innerText = "";
    }
}

//Signup Form Submission Check

document.getElementById("signup-form").addEventListener("submit", function(event){
    event.preventDefault();

    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    let errors  =  document.querySelectorAll(".error");
    let hasError = false;

    errors.forEach((error) => {
        if (error.innerText !== ""){
            hasError = true;
        }
    });

    if(!hasError){
        document.getElementById("success-message").innerText = "Signup successful!";
        document.getElementById("sucess-message").style.display = "block";

        setTimeout(() =>{
            switchForm("login");
            document.getElementById("sucess-message").style.display = "none";

        }, 2000);
    }
});

//log in form submission check

document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();

    validateLoginEmail();
    validateLoginPassword();

    let errors = document.querySelectorAll(".error");
    let hasError = false;

    errors.forEach((error) => {
        if (error.innerText !== ""){
            hasError = true;
        }
    });

    if(!hasError){
        document.getElementById("success-message").innerText = "Login sucessfull";
        document.getElementById("success-message").style.display = "block";

        setTimeout(() =>{
            document.getElementById("sucess-message").style.display = "none";
        }, 2000);
    }
});