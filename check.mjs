// const {validatePassword}=require("index.cjs")
import {validatePassword} from "val-pass"

// console.log(validatePassword());

let {validateAll,getAllValidationErrorMessage}=validatePassword("S@1hubha",15)
console.log(validateAll());
console.log(getAllValidationErrorMessage());



// let {validateAll,getErrorMessage,getAllValidationErrorMessage}=validatePassword("hubha m",78)

// // console.log(validateAll());
// // console.log(getErrorMessage());
// console.log(getAllValidationErrorMessage());





