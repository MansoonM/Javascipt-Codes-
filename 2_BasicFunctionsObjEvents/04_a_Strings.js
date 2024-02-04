//                 Strings

// JavaScript strings are for storing and manipulating text.
// Strings are immutable: Strings cannot be changed, only replaced.
let text ="Mansoon"
console.log(text);

let carName1 = "Volvo";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
console.log(carName1);
console.log(carName2);

let answer3 = 'He is called "Johnny"';
console.log(answer3);

// String Length

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length; //way 1
console.log(length); 

console.log(text1.length); //way 2

console.log("--------------------");


// Escape Character \

// double quotes = double backslash
let text4 = "We are the so-called \"Vikings\" from the north."
console.log(text4);

// single quotes = single backslash
let text5= 'It\'s alright.';
console.log(text5);

//  Double backslash continous \\ = \
let text6 = "The character \\ is called backslash.";
console.log(text6);

let text7 = "The character \# is called backslash.";
console.log(text7);

// newline \n
let text8 = "The character \n is called backslash.";
console.log(text8);

console.log("--------------------");
// Breaking Long Code Lines

// JavaScript Strings as Objects
// new keyword
// he new keyword complicates the code and slows down execution speed. 

// x is a string
let x = "John";
// y is an object
let y = new String("John");
console.log(typeof(x));
console.log(typeof(y));
