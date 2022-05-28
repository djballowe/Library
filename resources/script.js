const container = document.querySelector('#library');
// const title = document.getElementById('title').value;
// const author = document.getElementById('author').value;
// const pages = document.getElementById('pages').value;


// storing the books in an array

let book1 = new Book ('Davids Life', 'David', 500, true);
let book2 = new Book ('Janes Life', 'Jane', 500, true);
let book3 = new Book ('Bobs Life', 'Bob', 500, true);

let Library = [book1, book2, book3];
console.log(Library);

// constructor function for creating the Book objects

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


function cardMaker(providedData = Library) {
    // providedData.forEach((item) => {
    //     const element = document.createElement('div');
    //     element.classList.add();
    //     container.appendChild(element);
    // })
    for (let i = 0; i < Library.length; i++) {
        const element = document.createElement('div');
        element.classList.add('books');
        element.setAttribute('id', i);
        container.appendChild(element);
    }
}

cardMaker();

 
// grabbing data from the form on submit and calling the constructor function

const form = document.forms[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const {title, author, pages, checkbox} = this.elements;

    console.log(title.value, author.value, pages.value, checkbox.value)
    let book1 = new Book(title.value, author.value, pages.value, checkbox.value); 
    add(book1);
})

// adding book to array and clearing the form for the next submission

function add(book) {
    Library.push(book);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    cardMaker();
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
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
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