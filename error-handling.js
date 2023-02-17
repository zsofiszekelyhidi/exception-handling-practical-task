// ReferenceError
try {
    console.log(a);
    let a = 3;
} catch {
    console.log("let variable must be declared before use");
}
  
// division by zero error
let numerator = 1;
let divisor = 0;
let result;
try {
  if (divisor === 0) {
    throw new Error("number cannot be divided by zero");
  } 
  result = numerator / divisor;
  console.log("result: " + result.toFixed(2));
} catch(err) {
  console.log(err.message);
}