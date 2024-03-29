// This function can help you validate name 
export function validateName (inputName) {
    const nameRegex = /^[a-z ,.'-]+$/i; 
    
    if(inputName.value.match(nameRegex)) {
        return true;
    } else
    {
        return false;
    }
}

// This function can help you validate phone
export function validatePhone (inputPhone) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(inputPhone.value.match(phoneRegex)) {
        return true;
    } else
    {
        return false;
    }
}

// This function can help you validate email 
export function validateEmail (inputEmail) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(inputEmail.value.match(emailRegex)) {
        return true;
    } else
    {
        return false;
    }
}

// This function can help you validate password
export function validatePassword (inputPassword) {
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
    
    if(inputPassword.value.match(passwordRegex)) {
        return true;
    } else
    {
        return false;
    }
} 