

let Library = [];

function Book() {
    // constructor
}

function addBook() {
    // adding book to array
}


// pop up form for logging data

const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
    closeForm();
    console.log();
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








