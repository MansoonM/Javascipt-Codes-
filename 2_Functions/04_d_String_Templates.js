//                String templates

/*Synonyms:
A.Template Literals
B.Template Strings
C.String Templates
D.Back-Tics Syntax

*/


// 1-Back-Tics Syntax✅

let name=`Mansoon Mohanty`;
console.log(name);

// 2-Quotes Inside Strings✅
let text = ` He's often called "Johnny" `;
console.log(text);

// 3- Multiline Strings✅
let mytext=` I am
 Waiting 
for an oppurtunity`;
              console.log(mytext);


 // 4- Interpolation     or    ${...}✅💥

//  Automatic replacing of variables with real values is called string interpolation.
 let firstName = "Mansoon";
let lastName = "Mohanty";

let fullName= ` Welcome ${firstName}, ${lastName}! `;
console.log(fullName);

//5-Expression Substitution ✅💥

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);