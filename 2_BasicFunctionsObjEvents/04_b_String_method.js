//             String Methods

/*


String length✅💥
String slice()✅💥
String substring()✅💥
String substr()✅💥

String replace()✅💥
String replaceAll()✅

String toUpperCase()✅💥
String toLowerCase()✅💥
String concat()✅💥

String trim()✅
String trimStart()✅
String trimEnd()✅

String padStart()❌
String padEnd()❌

String charAt()✅💥
String charCodeAt()✅💥

String split()✅💥
*/


// varname.length
let x ="I love Coding"
console.log(x.length);

// slice(start, end)
console.log(x.slice(0,8));

// substring(start, end)
console.log(x.slice(4,8));

// substr(start, length)
console.log(x.slice(3,8));

// Revision
let text = "Apple, Banana, Kiwi";
console.log(text.slice(7));
console.log(text.slice(-12));
console.log(text.slice(-12, -6));

console.log("---------------------");

// replace(past,current)
let text1="Let me go America"
console.log(text1.replace("America","South Korea"));

// allreplace(allpastword,allcurrentword)
let text3 = "I love cats. Cats are very easy to love. Cats are very popular.";
text2 = text.replaceAll(/Cats/g,"Dogs");
text2 = text.replaceAll(/cats/g,"dogs");
console.log(text3);

console.log("---------------------");

// Uppercase and Lowercase
let name1="mansoon MANSOON"
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

// Concat 
let nameA="Mansoon"
let nameB=" Mohanty"
console.log(nameA.concat(nameB));

console.log("---------------------");

// trim (extra space remove)
let text8 = "      I love cats. Cats are very easy to love.    Feel";
let text9= text8.trim()
let text10= text8.trimStart()
let text11= text8.trimEnd()

// trimstart (extra space remove but only from starting)
console.log(text9.length);
console.log(text10.length);
console.log(text11.length);


console.log("---------------------");


// Extracting String Characters
// There are 3 methods for extracting string characters:

// 1)charAt(position)
// 2)charCodeAt(position)
// 3)Property access [ ]

// ------------------3)Property access [ ]--------------------
// Property access might be a little unpredictable:
// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)

let mytext="My name is Mansoon Mohanty"
let newtext= mytext.charAt(6)
let verynewtext= mytext.charCodeAt(6)
let char = mytext[0];
console.log(newtext); //o/p: e
console.log(verynewtext); //o/p: The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(char);  //o/p: M


// Split String

mytext.split(",")    // Split on commas
mytext.split(" ")    // Split on spaces
mytext.split("|")    // Split on pipe
console.log(mytext[1]); //O/P = y


