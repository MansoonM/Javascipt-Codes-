// BigInt

/*
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.


With this standard, large integer cannot be exactly represented and will be rounded.
Because of this, JavaScript can only safely represent integers:
Up to 9007199254740991 +(253-1)and
Down to -9007199254740991 -(253-1).
Integer values outside this range lose precision.
*/

// Integer Precision
let x = 999999999999999;
let y = 9999999999999999;
console.log(x," ",y);

// create BigInt
let x1 = 1234567890123456789012345n;
let y1 = BigInt(1234567890123456789012345);
console.log(x1,"   ",y1);

// typeof
let x2 = BigInt(999999999999999);
let type = typeof x2;
console.log(type);

/*
BigInt is the second numeric data type in JavaScript (after Number).

With BigInt the total number of supported data types in JavaScript is 8:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

 */