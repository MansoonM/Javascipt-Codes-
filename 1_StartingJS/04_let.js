 
 
 //  let 

/*
The let keyword was introduced in ES6 (2015)
Variables defined with let cannot be Redeclared
Variables defined with let must be Declared before use
Variables defined with let have Block Scope
*/

var a1=67 //ignored ✅
// updated
var  a1=34  //accepted--> recent value
console.log("a1 "+ a1);

let b= "Mansoon Mohanty"
console.log(b);

let a= {
    // (property) name : string
    name:"Mansoon",
    age:"20"
}
console.log(a);



// global /blocks only in the case of var and const✅

{
    var x=10;
    console.log("Inside "+x);
}

/*

What is Good?✅

let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.

What is Not Good?✅

var does not have to be declared.
var is hoisted.
var binds to this.

The let and const keywords are not supported in Internet Explorer 11 or earlier.
Browser Support let and const fully✅

Chrome 49
Edge 12	
Firefox 36	
Safari 11	
Opera 36

*/