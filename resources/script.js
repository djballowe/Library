const container = document.querySelector('#library');



// storing the books in an array

let book1 = new Book ('Davids Life', 'David', 500, true);
let book2 = new Book ('Janes Life', 'Jane', 500, true);
let book3 = new Book ('Bobs Life', 'Bob', 500, true);

let Library = [];
console.log(Library);

// constructor function for creating the Book objects

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


function cardMaker(providedData = Library) {
    const title = document.createElement('p');
    const author = document.createElement('p');
    const page = document.createElement('p');
    const remove = document.createElement('button');
    const status = document.createElement('button');
    for (let i = 0; i < Library.length; i++) {
        if (Library.length > 1) {
            let index = i + 1;
            console.log(`the index is currently ${i}`);
            console.log(`the index I want read is ${index}`);
            const element = document.createElement('div');
            element.classList.add('books');
            element.setAttribute('id', index);
            container.appendChild(element);
            const infoContainer = document.getElementById(index);
            title.textContent = Library[index].title;
            author.textContent = Library[index].author;
            page.textContent = Library[index].pages;
            remove.setAttribute('id', 'remove');
            status.setAttribute('id', 'status');
            remove.textContent = 'Remove';
            status.textContent = 'Read';
            infoContainer.appendChild(title);
            infoContainer.appendChild(author);
            infoContainer.appendChild(page);
            infoContainer.appendChild(remove);
            infoContainer.appendChild(status);
        }
        
        if (Library.length <= 1) {
            const element = document.createElement('div');
            element.classList.add('books');
            element.setAttribute('id', i);
            container.appendChild(element);
            const infoContainer = document.getElementById(i);
            title.textContent = Library[i].title;
            author.textContent = Library[i].author;
            page.textContent = Library[i].pages;
            remove.setAttribute('id', 'remove');
            status.setAttribute('id', 'status');
            remove.textContent = 'Remove';
            status.textContent = 'Read';
            infoContainer.appendChild(title);
            infoContainer.appendChild(author);
            infoContainer.appendChild(page);
            infoContainer.appendChild(remove);
            infoContainer.appendChild(status);
        }
    }
}




 
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
