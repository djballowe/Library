let book1 = new Book('Davids life', 'David', 500);
let book2 = new Book('Davids life', 'David', 500);
let book3 = new Book('Davids life', 'David', 500);
console.log(book1);

let Library = [book1];
console.log(Library);

function Book(title, author, pages) {
    // constructor this needs to take the data logged on the form and create objects to store in the
    // library array
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook() {
    // adding book to array
    Library.push(book1);
    Library.push(book2);
    Library.push(book3);
    console.log(Library);
}

function loop() {
    const container = document.querySelector('#library');
    const book = document.createElement('div');
    const info = document.createElement('p');
    const button = document.createElement('button');
    
        book.setAttribute('class', 'books');
        container.appendChild(book);
        const infoContainer = document.querySelector('.books');
        info.textContent = Library[0].title;
        infoContainer.appendChild(info);
        
        
    
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
     loop();
 })


 document.getElementById('close').addEventListener('click', 
 function() {
     document.getElementById('form').style.display = 'none';
     overlay.style.display = 'none'
 })







