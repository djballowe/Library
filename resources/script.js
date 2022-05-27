let book1 = new Book('Davids life', 'David', 500);
console.log(book1);

let Library = [1,2,3];

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
    console.log(Library[3]);
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







