// Number Properties

/*
1- toString() :	Returns a number as a string
2- toExponential()	:Returns a number written in exponential notation
3- toFixed() :	Returns a number written with a number of decimals
4- toPrecision() :	Returns a number written with a specified length
5- ValueOf() :	Returns a number as a number

 */

// The toString() method returns a number as a string.
let x = 123;
let a=x.toString();
let b=(123).toString();
let c=(100 + 23).toString();
console.log(x,a,b,c);

// toExponential() returns a string, with a number rounded and written using exponential notation.

let x1 = 9.656;
let c1=x1.toExponential(2);
let c2=x1.toExponential(4);
let c3=x1.toExponential(6);
console.log(x1,c1,c2,c3);

//tofixed

let x2 = 9.656;
let z2=  x2.toFixed(2);
let z3= x2.toFixed(0);
let z4=  x2.toFixed(4);
let z5=  x2.toFixed(6);
console.log(x2,z2,z3,z4,z5);

// toPrecision() returns a string, with a number written with a specified length:
