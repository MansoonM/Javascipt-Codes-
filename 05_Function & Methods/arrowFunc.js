// Arrow Function

// use for small codes


/*
const functionName=(parameter1,parameter2...)=>{
    //do somework
}
*/

const arrowSum=(a,b)=>{
    console.log("a + b = ",a+b);
}
arrowSum(2,3);


let arrowMul=(a,b)=>{
// console.log("a * b = ",a*b);
return a*b;
}
let mul=arrowMul(1,4);
console.log("a * b = ",mul);