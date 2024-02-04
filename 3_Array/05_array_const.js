// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; // ERROR

// An array declared with const has Block Scope.

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

cars = ["Saab", "Volvo", "BMW"];
var cars;
/*
const cars = ["Volvo", "BMW"]; // Allowed
const cars = ["Volvo", "BMW"]; // Not allowed
var cars = ["Volvo", "BMW"]; // Not allowed
cars = ["Volvo", "BMW"]; // Not allowed

{
  const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"]; // Not allowed
  cars = ["Volvo", "BMW"]; // Not allowed
}

*/
