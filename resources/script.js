

let Library = [];

function Book() {
    // constructor
}

function addBook() {
    // adding book to array
}


// pop up form for logging data





function openForm() {
    document.getElementById('form').style.display = 'block';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';
}

window.onclick = function (event) {
    let modal = document.getElementById('form');
    if (event.target == modal) {
        closeForm();
    }
}



