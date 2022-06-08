let myLibrary = [];

const bookShelf = document.getElementById("bookshelf");

//constructor for each new book
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

//adds book to Library
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);  
  myLibrary.push(newBook);
  createLibrary(myLibrary);
}

//just some dummy books


//renders the information for each book on screen
function renderBook(book) {
  const bookWrapper = document.createElement("div");
  bookWrapper.classList.add("bookWrapper");

  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const read = document.createElement("p")

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;

  bookWrapper.appendChild(title);
  bookWrapper.appendChild(author);
  bookWrapper.appendChild(pages);
  bookWrapper.appendChild(read);

  bookShelf.appendChild(bookWrapper);
  
}

//loops through library and calls renderBook() for each book
function createLibrary() {
  for (const book of myLibrary) {
    renderBook(book);
  }
}

