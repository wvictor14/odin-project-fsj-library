// init empty library
const myLibrary = [];
var total = 0;

// book constructor
function Book(title, author, npages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  // take params, create a book then store it in the array
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.read = read;

  // unique id
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, npages, read) {
  let newBook = new Book(title, author, npages, read);
  myLibrary.push(newBook);
  total += total;
}

console.log('Initializing library with 2 books...');
addBookToLibrary('Harry Potter', 'JRR Tolkien', 360, false);
addBookToLibrary('The Hobbit', 'JRR Tolkien', 500, false);
addBookToLibrary('Old Man and the Sea', 'Hemingway', 126, true);
addBookToLibrary('A Game of Thrones', 'George R. R. Martin', 495, true);
console.log(myLibrary);


// generate cards from books
const divLibrary = document.getElementById('library');
function createBookDiv(book) {

  // book div
  let newBook = document.createElement('div');
  newBook.classList.add('book');
  newBook.setAttribute('data-id', book.id);

  let span = document.createElement('span');
  span.classList.add('remove-book');
  span.textContent = 'x';

  // book > (title + author)
  let newBookTitle = document.createElement('h2');
  newBookTitle.classList.add('title');
  newBookTitle.textContent = book.title;

  let newBookAuthor = document.createElement('p');
  newBookAuthor.classList.add('author');
  newBookAuthor.textContent = book.author;

  // last row 
  let lastRow = document.createElement('div');
  lastRow.classList.add('last-row');

  let newBookPages = document.createElement('p');
  newBookPages.classList.add('pages');
  newBookPages.textContent = book.npages;
  lastRow.appendChild(newBookPages);

  
  let newBookRead = document.createElement('button');
  console.log(book);
  if (book.read) {
    newBookRead.classList.add('read');
  } else {
    newBookRead.classList.add('not-read');
  }
  lastRow.appendChild(newBookRead);

  // add divs together
  newBook.appendChild(span);
  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(lastRow);

  // add to library
  divLibrary.appendChild(newBook);

  // close button
  // event listener for each close button
  span.addEventListener('click', () => {

    // get the data-id for the div
    const currentBook = span.parentNode;
    const currentBookDataID = currentBook.getAttribute('data-id');

    if (currentBook) {
      // remove from library array
      const indexToRemove = myLibrary.findIndex(book => book.id === currentBookDataID);
      myLibrary.splice(indexToRemove, 1);

      // remove from page
      divLibrary.removeChild(currentBook);

      // update total
      updateTotal();
    }
  });

}

function displayLibrary() {
  divLibrary.innerHTML = '';
  myLibrary.map(function (element) {
    createBookDiv(element)
  });

  // update total
  updateTotal();
}

function updateTotal() {
    // update total
  const totalBooks = document.querySelector('.total');
  totalBooks.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('total-text');
  p.textContent = myLibrary.length + ' Total';

  console.log(totalBooks);
  totalBooks.appendChild(p);
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
  const npages = formData.get('npages');
  var read = formData.get('read');
  if (read == 'read') {
    read = true;
  } else if (read == 'not read') {
    read = false;
  }

  addBookToLibrary(title, author, npages, read);
  displayLibrary();
  updateTotal();
  modal.style.display = "none";
});
