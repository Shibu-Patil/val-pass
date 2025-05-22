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
    let hasNoSpace=false
    

    for (let char of password) {
      if (lowerCase.includes(char)) hasLower = true;
      else if (upperCase.includes(char)) hasUpper = true;
      else if (numbers.includes(char)) hasNum = true;
      else if (specialChars.includes(char)) hasSpecial = true;
   
    }

     if(length) if(password.length>=length){
      hasLength=true
     }

     if(!password.includes(" ")){
        hasNoSpace=true
     }

    // console.log(password.includes("a"));
    
    return {
      hasSpecial,
      hasLower,
      hasNum,
      hasUpper,
      validateAll(){
        // console.log(hasNoSpace);
        if(hasLower && hasUpper && hasNum && hasSpecial && hasNoSpace){
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
          else if(!hasNoSpace) return new Error(`Password should not have space`)
          else return "No Error Detected"
          }
       }
        else{
          if(!hasLower) return new Error(`Password does not contain any Lower case`)
          else if(!hasUpper) return new Error(`Password does not contain any Upper case`)
          else if(!hasSpecial) return new Error(`Password does not contain any special character`)
          else if(!hasNum) return new Error(`Password does not contain any number`)
          else if(!hasNoSpace) return new Error(`Password should not have space`)
          
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
          else if(!hasNoSpace) return `Password should not have space`

          else return "No Error Detected"
          }
       }
        else{
          if(!hasLower) return `Password does not contain any Lower case`
          else if(!hasUpper) return `Password does not contain any Upper case`
          else if(!hasSpecial) return `Password does not contain any special character`
          else if(!hasNum) return `Password does not contain any number`
          else if(!hasNoSpace) return `Password should not have space`

          else return "No Error Detected"
        }
     
      },
      getAllValidationErrorMessage(){
   
        let errorObj=[]
           if(length){
        if(!hasLength){errorObj.push(`Password Length is less than ${length}`)}
      }  
        if(!hasLower) {errorObj.push(`Password does not contain any Lower case`)}
        if(!hasUpper){ errorObj.push(`Password does not contain any Upper case`)}
        if(!hasSpecial){errorObj.push( `Password does not contain any special character`)}
        if(!hasNum) {errorObj.push(`Password does not contain any number`)}
        if(!hasNoSpace){errorObj.push( `Password should not have space`)}
   
        // console.log(errorObj);
        if(errorObj.length){
          return errorObj
        }else{
          return `No Error Detected`
        }
        
      }
      
    };
  };

  module.exports={
    validatePassword
  }