// An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars.length;

for (i = 0; i <= car; i++) {
  console.log(cars[i]);
}

let fruits = ["Apple", "Kiwi", "Orange", "Mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // Will return 3
person[0]; // Will return "John"
console.log(person);
console.log(person.length);
console.log(person[2]);
