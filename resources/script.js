const container = document.querySelector('#library');



// storing the books in an array

let Library = [];
console.log(Library);

// constructor function for creating the Book objects

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// adding tiles to the DOM

function cardMaker(providedData = Library) {
    const title = document.createElement('p');
    const author = document.createElement('p');
    const page = document.createElement('p');
    const remove = document.createElement('button');
    const status = document.createElement('button');
    for (let i = 0; i < Library.length; i++) {
        
        let index = Library.length - 1;
             
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
        remove.setAttribute('data', index);
        status.setAttribute('id', 'status');
        status.setAttribute('data', index);
        remove.textContent = 'Remove';
        status.textContent = 'Read';
        infoContainer.appendChild(title);
        infoContainer.appendChild(author);
        infoContainer.appendChild(page);
        infoContainer.appendChild(remove);
        infoContainer.appendChild(status);
        
        if (Library[index].readStatus === true) {
            status.classList.add('on');
        } else if (Library[index].readStatus === false) {
            status.classList.add('off');
        } 
        infoContainer.appendChild(status);

        break;
    }
}


    
// grabbing data from the form on submit and calling the constructor function

const form = document.forms[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const {title, author, pages, checkbox} = this.elements;

    let book1 = new Book(title.value, author.value, pages.value, checkbox.checked); 
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



document.querySelector('body').addEventListener('click', function(e) {
    if (e.target.id === 'status') {
        console.log('AAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHH');
    }
});

