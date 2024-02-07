// function in JS

// 
// prevent from redundency / Minimize redundency



// function defination

function myfunc(){
 console.log("Javascript is Awesome.");
 console.log("Let's get Started");
}
myfunc();  // function call /function invoke
myfunc();


//function parameter
function myfunction(msg){  //parameter
    //parameter--> input
 console.log(msg);
}
myfunction("I Love JS");  //arguments




// Multiple Parameters and argument

function student(name,age,email){
console.log(name,age,email);
}
student("Mansoon Mohanty",20,"mansoon@gmail.com")
// local Variable:name,age,email -->Func para are local variable/block scope


// sum function to add

function sum(x,y){
    console.log("x + y= ",x+y );
}
sum(7,9);
sum(100,50);


//Use return keyword

function add(x,y){
 add=x+y;
 console.log("Before return"); // run
 return add;
 console.log("After return"); //  not run
}

let s=add(3,4);
console.log(s);



