//   Q.What is  Object Method✅

// A method is a function stored as a property.📌
// Objects can also have methods.⚡
// Methods are actions that can be performed on objects.😎
// Methods are stored in properties as function definitions.✨

let student = {
    firstname:"Mansoon",
    lastname:"Mohanty",
    age:20,
    Role:"Frontend Developer",
    fullname: function() {
       return this.firstname+" "+this.lastname;
    }
}
console.log(student);

// Display data from the object:
// document.getElementById("demo").innerHTML = person.fullName();


/*

 Q. What is this?✅       

🚀(not a variable)(is a Keyword)(cannot change the value of this)(refers to global object)

🚀In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).

🚀The this keyword refers to different objects depending on how it is used:

📌In an object method, this refers to the object.
📌Alone, this refers to the global object.
📌In a function, this refers to the global object.
📌In a function, in strict mode, this is undefined.
📌In an event, this refers to the element that received the event.
📌Methods like call(), apply(), and bind() can refer this to any object.


 */


