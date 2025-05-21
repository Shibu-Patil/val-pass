 function validatePassword (password,length) {

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
    let hasLength=false
    

    for (let char of password) {
      if (lowerCase.includes(char)) hasLower = true;
      else if (upperCase.includes(char)) hasUpper = true;
      else if (numbers.includes(char)) hasNum = true;
      else if (specialChars.includes(char)) hasSpecial = true;
    }
     if(length) if(password.length>=length){
      hasLength=true
     }

    return {
      hasSpecial,
      hasLower,
      hasNum,
      hasUpper,
      validateAll(){

        if(hasLower && hasUpper && hasNum && hasSpecial  ){
          if(length){
            if(hasLength) return true
            else return false
          }else{
            return true
          }
        }else{
          return false
        }
      },
      getError(){
    
        
       if(length) {
        if(!hasLength) return new Error(`Password Length is less than ${length}`)
          else {
            if(!hasLower) return new Error(`Password does not contain any Lower case`)
          else if(!hasUpper) return new Error(`Password does not contain any Upper case`)
          else if(!hasSpecial) return new Error(`Password does not contain any special character`)
          else if(!hasNum) return new Error(`Password does not contain any number`)
          else return "No Error Detected"
          }
       }
        else{
          if(!hasLower) return new Error(`Password does not contain any Lower case`)
          else if(!hasUpper) return new Error(`Password does not contain any Upper case`)
          else if(!hasSpecial) return new Error(`Password does not contain any special character`)
          else if(!hasNum) return new Error(`Password does not contain any number`)
          else return "No Error Detected"
        }
     
      },

      getErrorMessage(){
    
        
       if(length) {
        if(!hasLength) return `Password Length is less than ${length}`
          else {
            if(!hasLower) return `Password does not contain any Lower case`
          else if(!hasUpper) return `Password does not contain any Upper case`
          else if(!hasSpecial) return `Password does not contain any special character`
          else if(!hasNum) return `Password does not contain any number`
          else return "No Error Detected"
          }
       }
        else{
          if(!hasLower) return `Password does not contain any Lower case`
          else if(!hasUpper) return `Password does not contain any Upper case`
          else if(!hasSpecial) return `Password does not contain any special character`
          else if(!hasNum) return `Password does not contain any number`
          else return "No Error Detected"
        }
     
      }
      
    };
  };

  module.exports={
    validatePassword
  }