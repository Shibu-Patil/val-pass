// const {validatePassword}=require("index.cjs")
import {validatePassword} from "val-pass"

// console.log(validatePassword());

let {validateAll,getErrorMessage,getAllValidationErrorMessage}=validatePassword("Shubham@11")

console.log(validateAll());
console.log(getErrorMessage());
console.log(getAllValidationErrorMessage());





