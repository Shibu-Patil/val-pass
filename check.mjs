// const {validatePassword}=require("index.cjs")
import {validatePassword} from "val-pass"

// console.log(validatePassword());

let {validateAll,getErrorMessage,getAllValidationErrorMessage}=validatePassword("hubha m",78)

// console.log(validateAll());
// console.log(getErrorMessage());
console.log(getAllValidationErrorMessage());





