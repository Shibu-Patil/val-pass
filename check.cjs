const {validatePassword}=require("val-pass")
// import validatePassword from "val-pass"
// console.log(validatePassword());


let {validateAll,getErrorMessage,getAllValidationErrorMessage}=validatePassword("Shubha@1")

console.log(validateAll());
console.log(getErrorMessage());

console.log(getAllValidationErrorMessage());



