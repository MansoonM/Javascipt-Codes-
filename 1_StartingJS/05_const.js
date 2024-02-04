// constant
/*
The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope
*/

// simple declaration✅
const a=23
console.log(a);

console.log("----------------");


// block scope✅
{
    const x=10;
    console.log("Inside "+x);
}

console.log("----------------");

// redeclaration and reassigned✅
const animal =12
// animal= 12+234
// const animal ="Fox"
console.log(animal);

/**
When to use JavaScript const?✅
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp


 */
// You can change the properties of a constant object✅
const car = {
    // (property) name : string
     type:"Fiat",
     model:"500", 
     color:"white"
}
car.color = "red";
car.owner = "Johnson";
console.log(car.color);