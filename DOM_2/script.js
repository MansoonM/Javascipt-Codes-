// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");

let box = document.getElementById("box");
box.style.backgroundColor = "purple";
box.style.fontSize = "20px";

// insertElement --> document.createElement("")

let newbtn = document.createElement("button");
newbtn.innerText = "ClickMe";

let div = document.querySelector("div");
div.append(newbtn);

let head = document.createElement("h1");
head.innerText = "Hello";

let head1 = document.querySelector("body").prepend(head);

// insert element
// node.append(newbtn)  ----> add element at end
//node.prepend(newbtn) ---> add at start of node
//node.before(newbtn) ---> adds before the node(outside)
//node.after(newbtn) ---> adds after the node(inside)

// remove element
//node.remove()

let para = document.querySelector("p");
para.remove();

let he = document.querySelector("h1");
he.remove();
