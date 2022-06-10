let myLibrary = [];

const bookShelf = document.getElementById("bookshelf");

//constructor for each new book
function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

//change read status
Book.prototype.changeReadStatus = function(data) {
  if(myLibrary[data].read === "Read") {
    myLibrary[data].read = "Not Read";
  }
  else{
    myLibrary[data].read = "Read";
  };
};

//adds book to Library
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);  
  myLibrary.push(newBook);
  newBook.id = myLibrary.length - 1;  //to identify each book for removal
  createLibrary();
}

//just some dummy books
const dummy = document.getElementById("dummy") 
dummy.addEventListener("click", () => {
  addBookToLibrary("HP","JKR","300","Read")
  // addBookToLibrary("HPA","JKR","300","Read")
  // addBookToLibrary("HPB","JKR","300","Read")
  // addBookToLibrary("HPC","JKR","300","Read")
  // addBookToLibrary("HPD","JKR","300","Read")
  // addBookToLibrary("HPE","JKR","300","Read")
  // addBookToLibrary("HPF","JKR","300","Read")
})


//renders the information for each book on screen
function renderBook(book) {
  const bookWrapper = document.createElement("div");
  bookWrapper.classList.add("bookWrapper");

  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const dummy = document.createElement("p")
  const read = document.createElement("button")
  const removeBtn = document.createElement("button")

  read.classList.add("button","read");

  removeBtn.classList.add("button","remove");

  //give remove btn data identify
  const dataAttr = document.createAttribute("data-id");
  dataAttr.value = book.id;
  removeBtn.setAttributeNode(dataAttr);

  //button removes book by it's index
  removeBtn.addEventListener("click", () => {
    myLibrary.splice(dataAttr,1);
    createLibrary(myLibrary);
  })

  //toggle read status by clicking
  read.addEventListener("click", () => {
    myLibrary[book.id].changeReadStatus(book.id); 
    read.textContent = book.read;
  })

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  read.textContent = book.read;
  removeBtn.textContent = "Remove"

  bookWrapper.appendChild(title);
  bookWrapper.appendChild(author);
  bookWrapper.appendChild(pages);
  bookWrapper.appendChild(dummy);
  bookWrapper.appendChild(read);
  bookWrapper.appendChild(removeBtn);

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
    readInput = "Read"
  }
  else {
    readInput = "not read"
  }

  if (titleInput === "" || authorInput === "" || pagesInput === "") {
    //error message
    document.getElementById("titleInput").style.border = "1.5px #fca5a5 solid";
    document.getElementById("authorInput").style.border = "1.5px #fca5a5 solid";
    document.getElementById("pagesInput").style.border = "1.5px #fca5a5 solid";
  }
  else {
    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
    //reset input
  document.getElementById("addBooksForm").reset();
  }
  
});

//hard reset for full library
resetAllBtn.addEventListener("click", () => {
  bookShelf.innerHTML = "";
  myLibrary = []
})