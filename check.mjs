// const {validatePassword}=require("index.cjs")
import {validatePassword} from "val-pass"

// console.log(validatePassword());

let {validateAll,getErrorMessage,getAllValidationErrorMessage}=validatePassword("S@1hubham",8)

console.log(validateAll());
console.log(getErrorMessage());
console.log(getAllValidationErrorMessage());





