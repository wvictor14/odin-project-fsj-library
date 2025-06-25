// init empty library
const myLibrary = [];

// book constructor
function Book(title, author) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  // take params, create a book then store it in the array
  this.title = title;
  this.author = author;

  // unique id
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author) {
  let newBook = new Book(title, author);
  myLibrary.push(newBook);
}

console.log('Initializing library with 2 books...');
addBookToLibrary('Harry Potter', 'JRR Tolkien');
addBookToLibrary('The Hobbit', 'JRR Tolkien');
console.log(myLibrary);


// generate cards from books
const divLibrary = document.getElementById('library');
function createBookDiv(book) {
  
  // book div
  let newBook = document.createElement('div');
  newBook.classList.add('book');

  // book > (title + author)
  let newBookTitle = document.createElement('h2');
  newBookTitle.classList.add('title');
  let newBookAuthor = document.createElement('p');
  newBookAuthor.classList.add('author');

  newBookTitle.textContent = book.title;
  newBookAuthor.textContent = book.author;

  // add divs together
  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);

  // add to library
  divLibrary.appendChild(newBook);
}

function displayLibrary() {
  divLibrary.innerHTML = '';
  myLibrary.map(function (element) {
    createBookDiv(element)
  });
}

// initialize a library
displayLibrary();

// add a book buton
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// get the content of the form
const myForm = document.getElementById('add-book'); // Get your form by ID
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');

  addBookToLibrary(title, author);
  displayLibrary();
});
