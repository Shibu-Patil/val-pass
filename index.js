 function validatePassword (password) {
    if(typeof password!="string"){
        password=String(password)
    }
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*";

    let hasLower = false;
    let hasUpper = false;
    let hasNum = false;
    let hasSpecial = false;
    

    for (let char of password) {
      if (lowerCase.includes(char)) hasLower = true;
      else if (upperCase.includes(char)) hasUpper = true;
      else if (numbers.includes(char)) hasNum = true;
      else if (specialChars.includes(char)) hasSpecial = true;
    }

    return hasLower && hasUpper && hasNum && hasSpecial ;
  };

  module.exports={
    validatePassword
  }