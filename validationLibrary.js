function validateName (inputName) {
    const nameRegex = /^[a-z ,.'-]+$/i; 
    
    if(inputName.value.match(nameRegex)) {
        // alert("");
        return true;
    } else
    {
        alert("Enter a valid name");
        return false;
    }
}

function validatePhone (inputPhone) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(inputPhone.value.match(phoneRegex)) {
        // alert("You entered a valid phone number");
        return true;
    } else
    {
        alert("Please enter a valid phone number");
        return false;
    }
}

function validateEmail (inputEmail) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(inputEmail.value.match(emailRegex)) {
        // alert("You entered a valid email address");
        return true;
    } else
    {
        alert("Please enter a valid email address");
        return false;
    }
}

function validatePassword (inputPassword) {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
    
    if(inputPassword.value.match(passwordRegex)) {
        // alert("You entered a valid password");
        return true;
    } else
    {
        alert("Please enter a valid password");
        return false;
    }
}