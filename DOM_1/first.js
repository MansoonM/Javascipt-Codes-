//window object represent an open window in a browser. It is brower's object(not JS).
//It is a global object with lots of properties and methods.

// console.log(window);
// window.console.log("Hello");
// console.log(window.document); //-> not print html
// console.dir(window.document); //-->print html

// DOM -> Document Object Model
//heirarchial model
// when a web page is loaded, the browser creates a DOM of the page.
//each node is an object
// window->document->html->head&body
//head->meta,title,link
//body->div,script
//div->img,h1,p,div

// console.dir(document.body.childNodes);

let heading = document.getElementById("h1");
console.log(heading);

// access elments in 4 ways ->getElementsById,getElementsByClass,getElementsByTagName,querySelector

//properties get/set ->
// 1. tagName : returns tag for element nodes
// 2. innerText : returns the text content of the element and all it's children
// 3. innerHTML : returns the plain text or html content  in element
// 4. textContent :returns texual content even for hidden elements
