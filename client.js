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

let odd = document.querySelectorAll('li:nth-child(odd)';
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'F4F4F4';
}

let even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'F4F4F4';
}
