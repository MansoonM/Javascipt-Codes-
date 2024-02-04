
//   Functions

/*
A JavaScript function is a block of code designed to perform a particular task.✅

A JavaScript function is executed when "something" invokes it (calls it).✅

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().✅

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)✅

The code to be executed, by the function, is placed inside curly brackets: {} ✅

Inside the function, the arguments (the parameters) behave as local variables.✅

Function parameters are listed inside the parentheses () in the function definition.✅

Function arguments are the values received by the function when it is invoked.✅

*/
//---------------------------------------------------------------

// Function is called, the return value will end up in x

let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}