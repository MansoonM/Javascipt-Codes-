// 🔥Basic Array Methods

// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()

// 🔥See Also:

// Search Methods
// Sort Methods
// Iteration Methods
//	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size); //length
console.log(fruits[2]);
console.log(fruits.join("//")); //for separeator //join operator

//  pop
console.log(fruits.pop());
console.log(fruits);

// push
console.log(fruits.push("Mango"));
console.log(fruits);

//index number change element add
console.log((fruits[0] = "Banana"));
console.log(fruits);

// concat
let ar1 = [1, 2, 3, 4];
let ar2 = [5, 6, 7, 8];
console.log(ar1.concat(ar2));

// copywithin
// fruits.copyWithin(2, 0, 2);
// console.log(fruits);
