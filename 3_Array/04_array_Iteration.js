// Array Iteration Methods
// Array iteration methods operate on every array item:

// Array forEach
// Array map()
// Array flatMap()
// Array filter()
// Array reduce()
// Array reduceRight()
// See Also:
// Basic Array Methods
// Array Search Methods
// Array Sort Methods	Array every()
// Array some()
// Array from()
// Array keys()
// Array entries()
// Array with()
// Array Spread (...)
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2);
