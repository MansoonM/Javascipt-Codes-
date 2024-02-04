
// Assignment Operators (==)
var a=10
console.log(a==10); //true

/*
Operator|	Example	|   Same As
----------------------------------
=	       x = y	   x = y
+=         x+= y	   x = x + y
-=	       x -= y	   x = x - y
*=	       x *= y	   x = x * y
/=	       x /= y	   x = x / y
%=	       x %= y	   x = x % y
**=	       x **= y	   x = x ** y


Bitwise Assignment Operators:

Operator	Example     	Same As
-------------------------------------
&=	      x &= y	       x = x & y
^=	      x ^= y	       x = x ^ y
|=	      x |= y	       x = x | y


Operator	Example	             Same As
----------------------------------------------
&&=	         x &&= y	        x = x && (x = y)
||=	         x ||= y  	        x = x || (x = y)
??=        	 x ??= y	        x = x ?? (x = y)


*/

let x = 10;
    x += 5;
console.log(x);

let text = "Hello";
    text += " World";
    console.log(text);

let s = 10;
  s **= 5; //s= 10*10*10*10*10
  console.log(s);

let x1 = 10;
x1 /= 5; //10/5
console.log(x1);


// The Left Shift Assignment Operator left shifts a variable.
let m = 100;
m <<= 5;
console.log(m);

// OR operator-----> Add
let xd = 10;
xd |= 5;
console.log(xd);

//XOR Operator
let xe = 10;
xe ^= 5;
console.log(xe);

// AND Operator
let xb = 10;
xb &&= 5;
console.log(xb);

// OR Assignment
let xx = 10;
xx ||= 50;
console.log(xx);

// Nullish Coalescing Assignment 
let zz;
zz ??= 5;
console.log(zz);