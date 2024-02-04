// 🖐Array Find and Search Methods SEARCHING

// Array indexOf()
// Array lastIndexOf()
// Array includes()

//🖐 See Also:

// Basic Methods
// Sort Methods
// Iteration Methods	Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()

// SORTING

// Alpabetic Sort
// Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()
// Sorting Objects
// See Also:
// Basic Methods
// Search Methods
// Iteration Methods
// Numeric Sort
// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()

let alpha = ["a", "z", "f", "b"];
let num = [1, 54, 2, 5, 2, 4];
console.log(alpha.sort());
console.log(num.reverse());

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
