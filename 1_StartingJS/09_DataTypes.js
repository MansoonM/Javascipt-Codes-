// DataTypes
/*
 
JavaScript has 8 Datatypes:
1. String✅
2. Number✅
3. Bigint
4. Boolean✅
5. Undefined✅
6. Null✅
7. Symbol
8. Object✅

The object data type can contain:

1. An object
2. An array
3. A date

 */

// Numbers:✅
let length = 16;
let weight = 7.5;

console.log(length);
console.log(weight);

// Strings:✅
let color = "Yellow";
let lastName = "Johnson";

console.log(color);
console.log(lastName);


// Booleans✅
let x = true;
let y = false;
console.log(x);
console.log(y);

console.log("-----------------------");


// Object:✅
const person = {firstName:"John", lastName:"Doe"};
console.log(person);
console.log(typeof(person));

// Array object:✅
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Date object:✅
const date = new Date("2023-11-5");
console.log(date);


// Empty String 
var level=""
console.log(level);
console.log(typeof(level));

console.log("-----------------------");


//Revision OBJECTs

const students={
    name: "Mansoon Mohanty",
    age: "20"
}
console.log(students.name);
console.log(students.age);
console.log(students);


// Array Object ==> index starts with 0

let solarSystem = ["Moon","Sun","Planets"]
console.log(solarSystem);
console.log(typeof(solarSystem));
console.log(solarSystem[1]);
