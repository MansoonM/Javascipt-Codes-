
// Variables---> Container that contains values✅

var anyname = "String is a value"
var number = 23
var bool = true
var float = 23.4

console.log(anyname)
console.log(number)
console.log(bool)
console.log(float)


// for space
console.log("----------------");


// typeof keyword✅
console.log(typeof(number));
console.log(typeof(bool));
console.log(typeof(float));
console.log(typeof("String is a value"))
console.log(typeof(23)); //direct values are also acceptable

console.log("----------------");
// variable typing: Same variable having diff.values✅

var i="Good"
var i=12 //accept curent value
console.log(i);


console.log("----------------");

// What is the unshift() method?✅
// This method is functional at the starting of the array, unlike the push(). It adds the desired number of elements to the top of an array.
var name = [ "john" ];
name.unshift( "joseph", "Jane" );
name.unshift( "charlie" );
console.log(name);

console.log("----------------");


// Hoisting (var) ✅

// use the value before assigning

console.log(myclass);
var myclass=7 //undefined



