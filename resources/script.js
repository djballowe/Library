const container = document.querySelector('#library');
// const title = document.getElementById('title').value;
// const author = document.getElementById('author').value;
// const pages = document.getElementById('pages').value;
console.log(title);


let Library = [];
console.log(Library);

function Book(title, author, pages, readStatus) {
    // constructor this needs to take the data logged on the form and create objects to store in the
    // library array
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function cardMaker(providedData = Library) {
    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('books');
        container.appendChild(element);
    })
}

 
const form = document.forms[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const {title, author, pages, checkbox} = this.elements;

    console.log(title.value, author.value, pages.value, checkbox.value)
    let book1 = new Book(title.value, author.value, pages.value, checkbox.value); 
    console.log(book1);
    add(book1);
})

function add(book) {
    // adding book to array
    Library.push(book);
}




 // pop up form for logging data

 const overlay = document.getElementById('overlay');

 overlay.addEventListener('click', 
 function() {
     document.getElementById('form').style.display = 'none';
     overlay.style.display = 'none'
 })

document.getElementById('add').addEventListener('click',
 function() {
     document.getElementById('form').style.display = 'block';
     overlay.style.display = 'block'
 })


 document.getElementById('close').addEventListener('click', 
 function() {
     document.getElementById('form').style.display = 'none';
     overlay.style.display = 'none'
 })

 document.getElementById('submit').addEventListener('click', 
 function() {
     document.getElementById('form').style.display = 'none';
     overlay.style.display = 'none'
 })
















// function loop() {
//     const container = document.querySelector('#library');
//     const book = document.createElement('div');
//     const author = document.createElement('p');
//     const title = document.createElement('p');
//     const page = document.createElement('p');
//     const status = document.createElement('button');
//     const remove = document.createElement('button');
    
//     for (let i = 0; i < Library.length; i++) {
//         book.setAttribute('class', 'books');
//         container.appendChild(book);
//         const infoContainer = document.querySelector('.books');
//         title.textContent = Library[i].title;
//         infoContainer.appendChild(title);
//         author.textContent = Library[i].author;
//         infoContainer.appendChild(author);
//         page.textContent = Library[i].pages;
//         infoContainer.appendChild(page);
//         status.setAttribute('id', 'status');
//         status.textContent = 'Read';
//         infoContainer.appendChild(status);
//         remove.setAttribute('id', 'remove');
//         remove.textContent = 'Remove';
//         infoContainer.appendChild(remove);
//         console.log('loop execute');
//     }
// }