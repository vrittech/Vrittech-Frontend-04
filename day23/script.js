// //dom traverse
// //5 methods

// // get element by id
// // const text1 = document.getElementById("text-1");
// // text1.className = "text-center"
// // text1.innerHTML = "Hey whats up!!"

// // const text3 = document.getElementById("text-3");
// // text3.innerHTML = "ok"
// text3.style.backgroundColor = "red"
// // text3.style.color = "white"

// // console.log(text1)

// // get elements by class name
// const texts = document.getElementsByClassName("text2");

// for (let i = 0; i < texts.length; i++) {
//    texts[i].style.color = "green"
// }
// // get elements by tag name

// const tags = document.getElementsByTagName("h2");

// for (let i = 0; i < tags.length; i++) {
//    tags[i].style.backgroundColor = "black"
//    tags[i].style.color = "white"
// }
// // query selector
// const te = document.querySelector("#text-1")
// const te2 = document.querySelector(".text2")
// const h2 = document.querySelectorAll("h2")
// console.log(h2)

// const input = document.querySelector("input")
// input.className = "okhello"
// // const input1 = document.querySelector("#input")
// // const input2 = document.getElementById("input")
// console.log(input.value);

// input.value = "hey@gmail.com"

// // const data = document.getElementsByClassName("okhello");
// // console.log(data)

// // query selector all


// Create Element

const button = document.createElement('button');
button.innerText = "Submit";
button.className = "btn btn-outline-primary"
button.id = "unique-btn"

const container = document.getElementById("container");
container.append(button);

const cancelButton = document.createElement('button');
cancelButton.innerText = "Cancel"
cancelButton.className = "btn btn-danger";

container.append(cancelButton);

const breakTag = document.createElement("br");
container.append(breakTag);

const h3 = document.createElement("h3");
h3.innerText = "loremloremlorem";
h3.style.color = "blue";
h3.style.marginTop = "35px";
h3.style.margin = "35px";

container.append(h3);


const ul = document.createElement("ul");
ul.className = "list-group";

const li1 = document.createElement('li');
li1.className = "list-group-item";
li1.innerText = "An Item"

ul.appendChild(li1);
const li2 = document.createElement('li');
li2.className = "list-group-item";
li2.innerText = "An Item 2"

ul.appendChild(li2);
const li3 = document.createElement('li');
li3.className = "list-group-item";
li3.innerText = "An Item 3"

ul.appendChild(li3);

const li4 = document.createElement('li');
li4.className = "list-group-item";
li4.innerText = "An Item 4"

ul.appendChild(li4);

Image.src = "https://abc.com?jpg"


document.body.append(ul)




const card = document.createElement('div')
card.className = "card";
card.style.width = "18rem";

const image = document.createElement("img");
image.src = "https://images.unsplash.com/photo-1695112174922-f5aee549bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
image.className = "card-img-top"

card.append(image);

const cardBody = document.createElement('div')
cardBody.className = "card-body";

const h5 = document.createElement('h5')
h5.className = "card-title";
h5.innerHTML = "Card Title"

cardBody.append(h5);

const p = document.createElement('p')
p.className = "card-text";
p.innerHTML = "Card p tag"

cardBody.append(p);

const anc = document.createElement('a')
anc.className = "btn btn-primary";
anc.innerHTML = "Go somewhere"

cardBody.append(anc);

card.append(cardBody);

document.body.append(card)