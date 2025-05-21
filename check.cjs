const {validatePassword}=require("val-pass")
// import validatePassword from "val-pass"
// console.log(validatePassword());


let {validateAll,getErrorMessage}=validatePassword("Shubham@11")

console.log(validateAll());
console.log(getErrorMessage());


