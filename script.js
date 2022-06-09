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
// addBookToLibrary("HP","JKR","300","Read")
// addBookToLibrary("HPA","JKR","300","Read")
// addBookToLibrary("HPB","JKR","300","Read")
// addBookToLibrary("HPC","JKR","300","Read")
// addBookToLibrary("HPD","JKR","300","Read")
// addBookToLibrary("HPE","JKR","300","Read")
// addBookToLibrary("HPF","JKR","300","Read")


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
  bookShelf.innerHTML = "";
  for (const book of myLibrary) {
    renderBook(book);
  }
}

//UI
const addBtn = document.getElementById("addBtn");
const resetAllBtn = document.getElementById("resetAll");

addBtn.addEventListener("click", () => {
  const titleInput = document.getElementById("titleInput").value;
  const authorInput = document.getElementById("authorInput").value;
  const pagesInput = document.getElementById("pagesInput").value;
  let readInput;

  //get checkbox value
  if(document.getElementById("readInput").checked) {
    readInput = "read"
  }
  else {
    readInput = "not read"
  }

  addBookToLibrary(titleInput, authorInput, pagesInput, readInput)

  //reset input
  document.getElementById("addBooksForm").reset();
});

//hard reset for full library
resetAllBtn.addEventListener("click", () => {
  bookShelf.innerHTML = "";
  myLibrary = []
})