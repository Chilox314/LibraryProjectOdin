let myLibrary = [];

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
}

//just some dummy books
addBookToLibrary("HP","JKR","300","Read")
addBookToLibrary("HPA","JKR","300","Read")
addBookToLibrary("HPB","JKR","300","Read")
addBookToLibrary("HPC","JKR","300","Read")
addBookToLibrary("HPD","JKR","300","Read")
addBookToLibrary("HPE","JKR","300","Read")
addBookToLibrary("HPF","JKR","300","Read")

//renders the information for each book on screen
function renderBook(book) {
  
}

//loops through library and calls renderBook() for each book
function createLibrary(myLibrary) {
  for (const book of myLibrary) {
    renderBook(book);
  }
}

