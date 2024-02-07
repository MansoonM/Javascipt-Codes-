// Create a Function using function keyword that takes a String as an Input and returns no. of vowel in the string

function mystr(str) {
  //hello, for h :count=1
  let count = 0;
  for (const char of str) {
    // console.log(char);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
mystr("hello");




let countStr = (str)=>{
    let count = 0;
  for (const char of str) {
    // console.log(char);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countStr("hsidhfiushfiscids");