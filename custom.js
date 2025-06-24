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

console.log(myLibrary);
console.log('Adding 2 books...');
addBookToLibrary('Harry Potter', 'JRR Tolkien');
addBookToLibrary('The Hobbit', 'JRR Tolkien');
console.log(myLibrary);


// generate cards from books
const divLibrary = document.getElementById('library');

function addToLibrary(book) {
  
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

myLibrary.map(function(element) {
  addToLibrary(element)
});