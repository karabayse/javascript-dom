// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

// Do not want to do this, because elements may be added
// document.all[10].textContent = 'Hello'

console.log(document.forms);
console.log(document.links);

// SELECTORS
// GETELEMENTBYID
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// let header = document.getElementById('main-header');

headerTitle.textContent = 'Hello';  // Changes title to 'Hello'
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


// GETELEMENTBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';

// items.style.backgroundColor = '#F4F4F4';  Does not work
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'F4F4F4';
}  // This works


// GETELEMENTSBYTAGNAME
let li = document.getElementsByTagName('li');


// QUERYSELECTOR
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #CCC';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

let item = document.querySelector('.list-group-item');
item.style.color = 'Red';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'Blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'Coral';


// QUERYSELECTORALL
let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'F4F4F4';
}

let even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'F4F4F4';
}


// TRAVERSING THE DOM
let itemList = document.querySelector('#items');
// parentNode property
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#F4F4F4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);

// childNodes
console.log(itemList.childNodes);

// children
console.log(itemList.children);

// firstChild; somewhat useless
console.log(itemList.firstChild);

// firstElementChild; more useful than firstChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);

// createElement
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = "hello1";
newDiv.setAttribute('title', 'Hello Div');

let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

let button = document.getElementById('button').addEventListener
  ('click', buttonClick);

function buttonClick(e) {
  console.log('Button clicked');
  // document.getElementById('header-title'.textContent = 'Changed');
  console.log(e);  // logs 'MouseEvent...'
  console.log(e.target);  // logs '<button class="btn btn-dark btn-block"...'
  console.log(e.target.className);
  let output = document.getElementById('output');
  output.innerHTML = '<h3>'+e.target.id+'</h3>';
}

function runEvent(e) {
  console.log('EVENT TYPE: '+e.type);
}
