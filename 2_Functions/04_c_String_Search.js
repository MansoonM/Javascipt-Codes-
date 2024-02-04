//               String  Search💌


/* 

String Search Methods:
------------------------>
String indexOf()✅
String lastIndexOf()✅
String search()✅
String match()✅      "object type methode"+"output in detail"

String matchAll() ✅   //If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

String includes()✅
String startsWith()✅
String endsWith()✅

*/

let text="This text is written only for Learning Purpose"

let index=text.indexOf("written") //after [13]
console.log(index);

let lasttext= text.lastIndexOf("written") //before written what is the index number[13]
console.log(lasttext);

let search1=text.search("written")
console.log(search1); //after[13] only we getting the "written"

let match1=text.match("written")
console.log(match1);

let matchall2=text.matchAll("written")
console.log(matchall2);

let stringInc=text.includes("written") //Do the word Present in the sentence or not, if it is present then o/p is "True" otherwise "false"
console.log(stringInc);

let startW=text.startsWith("written")
console.log(startW)

let endW=text.endsWith("Written")
console.log(endW);