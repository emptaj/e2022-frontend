export function validateUsername(username){
    if(username.length >= 5)
        return "";
    
    return "Username should have at least 5 characters!";
}

export function validateEmail(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.match(validRegex)) 
        return "";

    return "Email address should be valid!";
}

export function validatePassword(password){
    if(password.length >= 8)
        return "";
    
    return "Password should have at least 8 characters!";
}

export function validateConfPassword(password, confPassword){
    if(password === confPassword)
        return "";
    
    return "Passwords should be exactly the same!";
}